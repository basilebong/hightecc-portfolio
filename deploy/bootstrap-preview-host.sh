#!/usr/bin/env bash
# One-time bootstrap to enable PR previews on the deploy host.
# Run as root on the host that will serve previews:
#
#   sudo DEPLOY_USER=<user> bash deploy/bootstrap-preview-host.sh
#
# DEPLOY_USER must be set to the existing deploy user.
# Idempotent: safe to re-run.
set -euo pipefail

if [ "$(id -u)" -ne 0 ]; then
    echo "Must run as root (use sudo)." >&2
    exit 1
fi

: "${DEPLOY_USER:?DEPLOY_USER is required (e.g. sudo DEPLOY_USER=<name> bash $0)}"
CADDY_GROUP="caddy"
PREVIEW_CADDY_DIR="/etc/caddy/preview.d"
PREVIEW_ROOT="/opt/hightecc/preview/hightecc-website-26"
CADDYFILE="/etc/caddy/Caddyfile"
SUDOERS_FILE="/etc/sudoers.d/hightecc-preview"

if ! id "$DEPLOY_USER" >/dev/null 2>&1; then
    echo "Deploy user '$DEPLOY_USER' does not exist." >&2
    exit 1
fi

if ! getent group "$CADDY_GROUP" >/dev/null 2>&1; then
    echo "Group '$CADDY_GROUP' does not exist (is Caddy installed?)." >&2
    exit 1
fi

echo "[1/5] creating ${PREVIEW_CADDY_DIR}"
install -d -o root -g "$CADDY_GROUP" -m 2775 "$PREVIEW_CADDY_DIR"

echo "[2/5] adding ${DEPLOY_USER} to ${CADDY_GROUP} group"
if id -nG "$DEPLOY_USER" | tr ' ' '\n' | grep -qx "$CADDY_GROUP"; then
    echo "  already a member"
else
    usermod -aG "$CADDY_GROUP" "$DEPLOY_USER"
fi

echo "[3/5] ensuring Caddyfile imports ${PREVIEW_CADDY_DIR}"
if ! grep -qE '^[[:space:]]*import[[:space:]]+preview\.d/\*\.caddy' "$CADDYFILE"; then
    backup="${CADDYFILE}.bak.$(date +%s)"
    cp "$CADDYFILE" "$backup"
    printf '\nimport preview.d/*.caddy\n' >> "$CADDYFILE"
    if ! caddy validate --config "$CADDYFILE" --adapter caddyfile >/dev/null 2>&1; then
        echo "Caddyfile failed validation after appending import; restoring $backup" >&2
        cp "$backup" "$CADDYFILE"
        exit 1
    fi
else
    echo "  already imports preview.d"
fi

echo "[4/5] creating ${PREVIEW_ROOT}"
install -d -o "$DEPLOY_USER" -g "$DEPLOY_USER" -m 0750 "$PREVIEW_ROOT"

echo "[5/5] installing sudoers entry"
tmp=$(mktemp)
cat > "$tmp" <<EOF
# Allow the deploy user to reload Caddy when toggling PR preview routes.
${DEPLOY_USER} ALL=(root) NOPASSWD: /bin/systemctl reload caddy
EOF
chmod 0440 "$tmp"
if visudo -cf "$tmp" >/dev/null; then
    mv "$tmp" "$SUDOERS_FILE"
else
    rm -f "$tmp"
    echo "sudoers syntax check failed" >&2
    exit 1
fi

systemctl reload caddy

cat <<'NEXT'

bootstrap done. remaining manual steps:

1. DNS: add a wildcard A (or AAAA) record for *.preview.hightecc.com
   pointing to this host's public IP.

2. Open a PR. The workflow at .github/workflows/preview.yml will build,
   ship preview-compose.yaml + preview-manage.sh, and bring the preview
   up at https://portfolio-<N>.preview.hightecc.com.

note: existing SSH sessions for the deploy user won't see the new caddy
group membership until reconnect. GitHub Actions opens a fresh session
each run, so it picks up the group immediately.
NEXT
