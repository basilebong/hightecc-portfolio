# Deployment

## Overview

Two pipelines, both running on GitHub Actions and deploying via SSH to a single VPS that fronts everything with Caddy (auto-TLS via Let's Encrypt).

- **Production**: `main` only. One container, fixed port, served at `hightecc.com`.
- **PR Preview**: every PR opened from a same-repo branch. One container per PR, deterministic port, served at `portfolio-<N>.preview.hightecc.com`. Torn down on close/merge.

The same SSH user runs both flows. The host has no inbound port besides 22, 80, 443.

## Production flow

`.github/workflows/deploy.yml` triggers on push to `main`.

1. **quality**: `pnpm check`, `pnpm typecheck`, plus a grep that bans `NEXT_PUBLIC_*` outside `src/lib/env.ts`.
2. **build**: Docker buildx, push to `ghcr.io/basilebong/hightecc-portfolio` tagged `latest` and `sha-<sha>`. Cache via GHA cache.
3. **deploy**: SSH to the host, `scp` `deploy/compose.yaml` into `/opt/hightecc/hightecc-website-26/`, rewrite `IMAGE=` in the on-host `.env`, then `docker compose pull && up -d`, then `docker image prune -f`.
4. **healthcheck**: poll `https://hightecc.com` until 200 (40s budget).

Caddy reverse-proxies `hightecc.com` to `127.0.0.1:8001`, defined in `/etc/caddy/Caddyfile`.

### Production state on the host

```
/opt/hightecc/hightecc-website-26/
├── compose.yaml          # shipped by deploy job
└── .env                  # rewritten by deploy job (IMAGE, PORT)
```

## Preview flow

`.github/workflows/preview.yml` triggers on `pull_request` events (`opened`, `synchronize`, `reopened`, `closed`).

**Previews are gated to PRs authored by the repo owner on same-repo branches.** Every job (including `quality`) checks both `github.event.pull_request.user.login == github.repository_owner` and `github.event.pull_request.head.repo.full_name == github.repository`. Fork PRs and PRs from any other author skip the workflow entirely. No jobs run.

For eligible PRs:

1. **quality**: same checks as production.
2. **build**: push image tagged `pr-<N>` and `sha-<sha>` to GHCR.
3. **deploy**: SSH to host, `scp` `deploy/preview-compose.yaml` to `/tmp/preview-compose-<N>.yaml` and `deploy/preview-manage.sh` to `/opt/hightecc/preview/hightecc-website-26/preview-manage.sh`, then run `preview-manage.sh up`. The script:
   - writes `/opt/hightecc/preview/hightecc-website-26/pr-<N>/{compose.yaml,.env}`
   - writes a `/etc/caddy/preview.d/portfolio-<N>.caddy` reverse-proxy snippet
   - `docker compose up -d` with `mem_limit=512m`, `cpus=0.5`, `cap_drop: ALL`, `no-new-privileges`
   - `sudo systemctl reload caddy` (only command in the deploy user's sudoers)
4. **healthcheck**: poll `https://portfolio-<N>.preview.hightecc.com` until 200.
5. **comment**: sticky PR comment with the URL.

On PR close (or merge):

6. **teardown**: `preview-manage.sh down` removes the container, deletes `/opt/hightecc/preview/hightecc-website-26/pr-<N>/` and the Caddy snippet, reloads Caddy, prunes images.

### Port allocation

`PR_PORT = 18000 + PR_NUMBER`. PR #1 → 18001, PR #42 → 18042. Each port binds to `127.0.0.1` only, never exposed externally. Caddy is the only public entry point.

### Preview state on the host

```
/opt/hightecc/preview/hightecc-website-26/
├── preview-manage.sh         # shipped by workflow each deploy
└── pr-42/
    ├── compose.yaml          # from deploy/preview-compose.yaml
    └── .env                  # written by preview-manage.sh

/etc/caddy/preview.d/
└── portfolio-42.caddy        # one reverse_proxy block per PR
```

## Required infrastructure

### GitHub Actions secrets

Already used by `deploy.yml`; no new secrets needed for previews.

| Secret              | What it is                                            |
| ------------------- | ----------------------------------------------------- |
| `DEPLOY_SSH_KEY`    | Private SSH key, passwordless, ed25519 preferred.     |
| `SSH_KNOWN_HOSTS`   | Output of `ssh-keyscan <host>` for the deploy host.   |
| `DEPLOY_USER`       | Linux user on the host.                               |
| `DEPLOY_HOST`       | Hostname or IP of the deploy host.                    |

### DNS

| Record               | Value                                  | Purpose          |
| -------------------- | -------------------------------------- | ---------------- |
| `hightecc.com`       | host IP                                | production       |
| `www.hightecc.com`   | host IP (or CNAME to apex)             | redirect to apex |
| `*.preview.hightecc.com` | host IP                            | wildcard for previews |

The wildcard is what makes per-PR subdomains work. Caddy handles TLS per subdomain via HTTP-01 challenge as previews come up.

### Host bootstrap

Once, on the host, as root:

```bash
sudo DEPLOY_USER=<deploy-user> bash deploy/bootstrap-preview-host.sh
```

This:
- creates `/etc/caddy/preview.d/` (group-writable by `caddy`)
- adds the deploy user to the `caddy` group
- appends `import preview.d/*.caddy` to `/etc/caddy/Caddyfile` (backs up first)
- creates `/opt/hightecc/preview/hightecc-website-26/`
- installs `/etc/sudoers.d/hightecc-preview` granting *only* `NOPASSWD: /bin/systemctl reload caddy`
- reloads Caddy

## Operations

### Manually tear down a preview

```bash
ssh <deploy-user>@<host>
PR_NUMBER=42 /opt/hightecc/preview/hightecc-website-26/preview-manage.sh down
```

### Inspect a preview

```bash
docker logs portfolio-42
docker stats --no-stream portfolio-42
cat /opt/hightecc/preview/hightecc-website-26/pr-42/.env
cat /etc/caddy/preview.d/portfolio-42.caddy
```

### Roll back production

Re-deploy a previous image manually:

```bash
ssh <deploy-user>@<host>
cd /opt/hightecc/hightecc-website-26
sed -i 's|^IMAGE=.*|IMAGE=ghcr.io/basilebong/hightecc-portfolio:sha-<good-sha>|' .env
docker compose pull && docker compose up -d
```

Or push a revert commit to `main`. The workflow will redeploy.

### Caddy didn't pick up a preview

```bash
sudo systemctl reload caddy
sudo journalctl -u caddy -n 50
```

Check `/etc/caddy/preview.d/portfolio-<N>.caddy` exists and is syntactically valid:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
```

## Security model

The repo is public; the host is private. Things to keep in mind:

- **Only PRs authored by the repo owner (on same-repo branches) get previews.** The workflow gates every job on `github.event.pull_request.user.login == github.repository_owner && github.event.pull_request.head.repo.full_name == github.repository`. Anything else (forks, other authors) skips the workflow entirely. `quality` is also gated, so fork PRs run nothing here.
- **Preview code runs in a hardened container.** `mem_limit=512m`, `cpus=0.5`, `pids_limit=256`, `cap_drop: ALL`, `no-new-privileges:true`. Bound to `127.0.0.1` only.
- **Sudoers is one line.** The deploy user can only `systemctl reload caddy`, nothing else with elevated privileges.
- **Image source is locked.** `preview-manage.sh` refuses any `IMAGE` not starting with `ghcr.io/basilebong/hightecc-portfolio:`.
- **Active-preview cap.** `preview-manage.sh` refuses a new preview if 20 are already running. Adjust `MAX_ACTIVE_PREVIEWS` in the script if needed.
- **Previews are non-indexable.** `X-Robots-Tag: noindex, nofollow, noarchive` set in the Caddy snippet.
- **Cookies don't cross subdomains** unless prod sets `Domain=.hightecc.com`, which it doesn't. If you add cross-subdomain cookies later (auth, etc.), revisit this.
