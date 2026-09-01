# ליאן גייר — הדרכת הורים בגישת אדלר

A static, single-page marketing site (Hebrew, RTL) built with React + TypeScript + Vite.
There is no server or backend — the build output is plain static files.

## Development

```sh
npm install
npm run dev      # dev server with HMR
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build locally
npm run lint
```

## Structure

```
index.html                 document shell (lang="he", dir="rtl", Assistant webfont)
src/main.tsx               entry point; mounts App inside the error boundary
src/App.tsx                page composition (navbar, sections, footer)
src/components/<name>/     one folder per component, with its own CSS module
src/styles/                reset.css, global.css, theme.css (design tokens)
src/constants.ts           phone / email / WhatsApp link
src/assets/                images imported by components so Vite fingerprints them
public/                    files copied verbatim (favicon, .nojekyll)
```

The `~` alias maps to `src/` — configured in both `vite.config.ts` and `tsconfig.app.json`.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and publishes `dist/` on every push to `main`.
To enable it once: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

`vite.config.ts` sets `base: './'`, so the built site works both at
`<user>.github.io` and under a `/<repo>/` project subpath — no config change needed.
