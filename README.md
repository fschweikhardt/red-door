# Red Door Church

## Local development

**Dev (hot reload):**
```bash
docker compose -f docker-compose.dev.yml up --build
```
→ http://localhost:5173

**Production image (local):**
```bash
docker compose up --build
```
→ http://localhost:8080

Copy container-built `node_modules` to local:
```bash
docker cp <container id>:/app/node_modules .
```

---

## Threads feed setup

The News section loads posts live from `@reddoorbtown` via the Threads API. A small Node server fetches posts at runtime and refreshes the access token automatically — no manual post URLs and no redeploy needed when you publish on Threads.

### 1. Create a Meta app

1. Go to [developers.facebook.com](https://developers.facebook.com/) and create an app.
2. Add the **Threads API** use case.
3. Note your **Threads App ID** and **Threads App Secret** (App settings → Basic).
4. Under OAuth / redirect URIs, add:
   - `http://localhost:5173/api/threads/oauth/callback` (local dev)
   - `https://red-door.fly.dev/api/threads/oauth/callback` (production — use your real Fly URL if different)

### 2. Local dev

```bash
cp .env.example .env
```

Fill in `.env`:
```
THREADS_APP_ID=your_app_id
THREADS_APP_SECRET=your_app_secret
THREADS_REDIRECT_URI=http://localhost:5173/api/threads/oauth/callback
```

Start the dev container:
```bash
docker compose -f docker-compose.dev.yml up --build
```

Connect Threads once (log in as `@reddoorbtown` when prompted):
```
http://localhost:5173/api/threads/oauth/start
```

You should be redirected back to the site with `?threads=connected`. Scroll to **News & Events** to confirm posts are loading.

The token is saved in `./data/threads-token.json` (gitignored) and refreshed automatically by the server.

### 3. Fly.io production

**Create a volume** (once — stores the token across deploys):
```bash
fly volumes create threads_data --region ord --size 1
```

**Set secrets:**
```bash
fly secrets set \
  THREADS_APP_ID=your_app_id \
  THREADS_APP_SECRET=your_app_secret \
  THREADS_REDIRECT_URI=https://red-door.fly.dev/api/threads/oauth/callback
```

**Deploy:**
```bash
fly deploy
```

**Connect Threads once** (log in as `@reddoorbtown`):
```
https://red-door.fly.dev/api/threads/oauth/start
```

After approving access, new Threads posts appear in the News section within a few minutes (feed is cached for 5 minutes).

### How it works

| Piece | What it does |
|---|---|
| `server.mjs` | Serves the site and `/api/threads-feed` |
| `/api/threads/oauth/start` | One-time OAuth connect for `@reddoorbtown` |
| `/data/threads-token.json` | Stores the long-lived token (Fly volume or local `./data`) |
| Auto-refresh | Server refreshes the token weekly — no manual token maintenance |

### Troubleshooting

- **News shows “Follow on Threads” instead of posts** — OAuth connect hasn’t been completed yet. Visit `/api/threads/oauth/start`.
- **OAuth error after redirect** — `THREADS_REDIRECT_URI` must exactly match a URI in your Meta app settings (including trailing slashes).
- **Posts stopped appearing** — Token may have expired after 60+ days without a refresh. Visit `/api/threads/oauth/start` again to reconnect.
- **Local API not responding** — The dev setup runs the API server on port 3000 inside the container; Vite proxies `/api` requests to it.

### Optional env vars

See `.env.example` for tuning:

- `THREADS_POST_LIMIT` — number of posts to show (default `5`, max `25`)
- `THREADS_CACHE_TTL_MS` — how long to cache the feed (default `300000` = 5 minutes)
