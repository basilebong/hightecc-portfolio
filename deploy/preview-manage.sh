#!/usr/bin/env bash
# Per-PR preview lifecycle helper. Shipped by the workflow at
# .github/workflows/preview.yml; runs on the deploy host as the
# unprivileged deploy user.
#
# All inputs come from env vars and are validated. The only privileged
# action is `sudo -n /bin/systemctl reload caddy`, allowed by sudoers.
set -euo pipefail

PREVIEW_ROOT="/opt/hightecc/preview/hightecc-website-26"
CADDY_DIR="/etc/caddy/preview.d"
PREVIEW_DOMAIN="preview.hightecc.com"
PORT_BASE=18000
MAX_ACTIVE_PREVIEWS=20

action="${1:-}"
: "${PR_NUMBER:?PR_NUMBER required}"

if ! [[ "$PR_NUMBER" =~ ^[1-9][0-9]{0,4}$ ]]; then
    echo "PR_NUMBER must be 1-99999, got: ${PR_NUMBER}" >&2
    exit 2
fi

PR_DIR="${PREVIEW_ROOT}/pr-${PR_NUMBER}"
PR_PORT=$((PORT_BASE + PR_NUMBER))
HOSTNAME="portfolio-${PR_NUMBER}.${PREVIEW_DOMAIN}"
CADDY_SNIPPET="${CADDY_DIR}/portfolio-${PR_NUMBER}.caddy"
COMPOSE_TEMPLATE="/tmp/preview-compose-${PR_NUMBER}.yaml"

reload_caddy() {
    sudo -n /bin/systemctl reload caddy
}

count_active() {
    find "$PREVIEW_ROOT" -maxdepth 1 -type d -name 'pr-*' 2>/dev/null | wc -l
}

up() {
    : "${IMAGE:?IMAGE required}"

    trap 'rm -f "$CADDY_SNIPPET"' ERR

    # Lock image to our own GHCR namespace so a malicious env can't pull arbitrary images.
    local expected_prefix="ghcr.io/basilebong/hightecc-portfolio:"
    if [[ "$IMAGE" != "${expected_prefix}"* ]]; then
        echo "refusing IMAGE outside ${expected_prefix}* : ${IMAGE}" >&2
        exit 2
    fi
    if [[ "$IMAGE" =~ [[:space:]] ]] || [[ ${#IMAGE} -gt 200 ]]; then
        echo "IMAGE contains whitespace or is too long" >&2
        exit 2
    fi

    if [ ! -d "$PR_DIR" ] && [ "$(count_active)" -ge "$MAX_ACTIVE_PREVIEWS" ]; then
        echo "max active previews (${MAX_ACTIVE_PREVIEWS}) reached; close some PRs first" >&2
        exit 3
    fi

    mkdir -p "$PR_DIR"

    if [ -f "$COMPOSE_TEMPLATE" ]; then
        mv "$COMPOSE_TEMPLATE" "$PR_DIR/compose.yaml"
    elif [ ! -f "$PR_DIR/compose.yaml" ]; then
        echo "compose template missing at ${COMPOSE_TEMPLATE} and no prior compose.yaml in ${PR_DIR}" >&2
        exit 1
    fi

    umask 077
    cat > "$PR_DIR/.env" <<EOF
NODE_ENV=production
PORT=3000
IMAGE=${IMAGE}
PR_PORT=${PR_PORT}
PR_NUMBER=${PR_NUMBER}
EOF
    umask 022

    docker rm -f "portfolio-${PR_NUMBER}" >/dev/null 2>&1 || true

    (
        cd "$PR_DIR"
        docker compose pull
        docker compose up -d --remove-orphans
    )

    cat > "$CADDY_SNIPPET" <<EOF
${HOSTNAME} {
    encode zstd gzip
    reverse_proxy 127.0.0.1:${PR_PORT}
    header {
        X-Robots-Tag "noindex, nofollow, noarchive"
        Strict-Transport-Security "max-age=31536000"
        X-Content-Type-Options "nosniff"
        Referrer-Policy "strict-origin-when-cross-origin"
        X-Frame-Options "DENY"
        -Server
        -X-Powered-By
        -x-nextjs-cache
        -x-nextjs-prerender
        -x-nextjs-stale-time
        -x-nextjs-matched-path
        -x-nextjs-redirect
    }
}
EOF

    reload_caddy

    trap - ERR
    echo "preview up: https://${HOSTNAME} -> 127.0.0.1:${PR_PORT}"
}

down() {
    if [ -d "$PR_DIR" ]; then
        (cd "$PR_DIR" && docker compose down --remove-orphans) || true
        rm -rf "$PR_DIR"
    fi
    rm -f "$CADDY_SNIPPET"
    reload_caddy || true
    docker image prune -f >/dev/null 2>&1 || true
    echo "preview down: portfolio-${PR_NUMBER}"
}

case "$action" in
    up)   up ;;
    down) down ;;
    *)
        echo "Usage: PR_NUMBER=<n> [IMAGE=...] $0 {up|down}" >&2
        exit 1
        ;;
esac
