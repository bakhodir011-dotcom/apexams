# Deploying ap.innovativecentre.org

This is a static-content Next.js 15 site — **no database, no environment
variables, no object storage**. Every "Register" CTA links to the centre's
Telegram (`https://t.me/Apforuzbekistan`).

## Quick facts

- **Framework:** Next.js 15 (App Router), React 19, Tailwind v4, TypeScript
- **Node:** >= 24
- **Build:** `npm run build`
- **Start:** `npm run start` (binds `${PORT:-3200}`)
- **Dev:** `npm run dev` (port 3200)
- **Domain:** `ap.innovativecentre.org`

## Recommended: Render (same as exam.innovativecentre.org)

1. Push this repo to GitHub.
2. In Render, **New → Web Service**, connect the repo.
3. Settings:
   - **Environment:** Node
   - **Build command:** `npm install && npm run build`
   - **Start command:** `npm run start`
   - **Instance:** Starter is plenty (static output, low memory)
   - **Environment variables:** set `PORT=10000` (Render's default) — the start
     script reads `${PORT}`. No other variables are needed.
4. Deploy. Render gives you an `onrender.com` URL — verify it loads
   `/uz`, `/ru`, `/en` and a subject page.
5. **Custom domain:** in Render → Settings → Custom Domains, add
   `ap.innovativecentre.org`. Then at your DNS provider add a **CNAME**
   record: `ap` → the Render target host Render shows you. Wait for the
   certificate to be issued.

Updates: `git push` → Render auto-redeploys.

## Alternative: fully static export

Because there is no server logic, this site can also be exported to static
HTML and hosted on any static host (Netlify, Cloudflare Pages, GitHub Pages,
S3, etc.):

1. Add to `next.config.ts`: `output: "export"`.
2. `npm run build` → static files land in `out/`.
3. Upload `out/` to the host and point the `ap` CNAME at it.

(The default Render setup above does not require this.)

## Notes

- `npm audit` reports a transitive `postcss`-via-`next` advisory; the only fix
  is upgrading to `next@16` (a breaking major). We stay on the `next@15.5.x`
  line, matching the sister project cambridgeexams.
- Exam dates in `src/lib/examDates.ts` reflect the **May 2027** College Board
  administration. Update that file when the next cycle's schedule is published.
