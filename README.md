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

---

## Threads feed — what's done vs what's left

### Already done in this repo / Fly

- Live feed API (`/api/threads-feed`)
- OAuth connect flow (`/api/threads/oauth/start` + callback)
- Automatic token refresh
- Docker/Fly Node server (replaces nginx)
- Fly volume `threads_data` mounted at `/data` (created)
- Status check endpoint: `/api/threads/status`

### Still needs a human (cannot be automated)

1. **You:** create a Meta app and set Fly secrets (App ID + Secret)
2. **You:** invite `@reddoorbtown` as a Threads Tester
3. **Church account holder:** accept the tester invite in Threads
4. **Church account holder:** open the OAuth link once and click Allow

---

## Developer checklist (do these next)

### Step A — Create the Meta app

1. Open [developers.facebook.com](https://developers.facebook.com/) → **Create app**
2. Add use case: **Access the Threads API**
3. Copy **Threads App ID** and **Threads App Secret** (App settings → Basic / Threads settings)
4. Under Threads **Redirect Callback URLs**, add exactly:
   ```
   https://red-door.fly.dev/api/threads/oauth/callback
   ```
5. Optional for local OAuth:
   ```
   http://localhost:5173/api/threads/oauth/callback
   ```

A normal public Threads account is enough — Business/Creator is **not** required.

### Step B — Invite `@reddoorbtown` as Threads Tester

1. App Dashboard → **App Roles** → **Roles**
2. Add `@reddoorbtown` (or the Instagram/Threads identity Meta asks for) as **Threads Tester**
3. Tell the account holder to accept the invite in Threads:
   **Settings → Account → Website permissions → Invites → Accept**

### Step C — Set Fly secrets and deploy

```bash
fly secrets set \
  THREADS_APP_ID=your_app_id \
  THREADS_APP_SECRET=your_app_secret
```

`THREADS_REDIRECT_URI` is already set in `fly.toml` to:
`https://red-door.fly.dev/api/threads/oauth/callback`

Then:

```bash
fly deploy
```

### Step D — Connect the account (one click)

Send this link to whoever can log into `@reddoorbtown`:

```
https://red-door.fly.dev/api/threads/oauth/start
```

They click **Allow**. After that, News loads posts automatically.

### Step E — Verify

```bash
curl https://red-door.fly.dev/api/threads/status
curl https://red-door.fly.dev/api/threads-feed
```

Expected when fully working:

- `status`: `oauthReady: true`, `connected: true`, `dataDirWritable: true`
- `threads-feed`: JSON with `posts` (permalinks)

---

## Message to send `@reddoorbtown`

> To show our Threads posts on the Red Door website, please do two things (no tech setup):
>
> 1. In the Threads app, go to **Settings → Account → Website permissions → Invites** and accept the invite for our website app.
> 2. When I send a link, open it while logged into `@reddoorbtown`, click **Allow**, and tell me when you’re done.
>
> Please don’t share the account password.

---

## Local testing (optional)

```bash
cp .env.example .env
```

Fill in:

```
THREADS_APP_ID=...
THREADS_APP_SECRET=...
THREADS_REDIRECT_URI=http://localhost:5173/api/threads/oauth/callback
```

```bash
docker compose -f docker-compose.dev.yml up --build
```

Connect locally: http://localhost:5173/api/threads/oauth/start

Or skip local OAuth and only connect on Fly.

---

## How it works

| Piece | Role |
|---|---|
| `server.mjs` | Serves the site + API |
| `/api/threads-feed` | Returns recent post permalinks (cached ~5 min) |
| `/api/threads/oauth/start` | Starts Meta OAuth |
| `/data/threads-token.json` | Stored long-lived token (Fly volume) |
| Auto-refresh | Server refreshes token weekly |

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| News shows “Follow on Threads” | OAuth not connected yet → `/api/threads/oauth/start` |
| `oauthReady: false` on `/api/threads/status` | Missing `THREADS_APP_ID` / `THREADS_APP_SECRET` secrets |
| OAuth “invalid redirect_uri” | URI in Meta dashboard must exactly match Fly redirect URI; tester invite must be accepted |
| Posts stop later | Re-run OAuth start once (token expired without refresh) |

### Optional env vars

See `.env.example`:

- `THREADS_POST_LIMIT` (default `5`)
- `THREADS_CACHE_TTL_MS` (default `300000`)
