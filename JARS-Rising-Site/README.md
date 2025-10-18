# JARS Rising — Vite + React + Tailwind

A fast, single-page site for JARS Rising. Ready for **manual deploy on Vercel**.

## Quick Start
```bash
# install deps
npm i

# local dev
npm run dev

# build
npm run build
```

The static output will be in `dist/`.

## Deploy to Vercel (Manual Upload)
1. Go to Vercel → New Project → Import → **Manually Deploy**.
2. Drag & drop this folder as a **ZIP**.
3. Framework preset: **Vite** (or “Other” and let it auto-detect).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.
7. Add your custom domain `jarsrising.com` in Project → Settings → Domains.

## Customize
- Replace the Spotify and YouTube embeds in `src/App.jsx`.
- Update shows in the `shows` array.
- Put your EPK PDF and photos in `/public` and update links.
- Update newsletter form endpoint (Formspree/Mailchimp).

## Tailwind
Configured in `tailwind.config.js` and `src/index.css`.
