# fadhilla.ai

A static-first SvelteKit prototype for a backend-platform engineer's personal site.

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10+

## Run locally

```sh
npm install
npm run dev
```

Open the local URL Vite prints (normally `http://localhost:5173`). The homepage is the root route.

## Validate

```sh
npm run check
npm run lint
npm run build
```

`npm run build` produces a static site in `build/`; use `npm run preview` to inspect that production output locally.

## Edit content

All homepage copy, CV-derived résumé facts, selected-work narratives, practice groups, education entries, and external links are kept in `src/lib/content/profile.ts`. Review content for confidentiality before publishing: do not include customer names, internal project names, or precise internal metrics.

## Deploy to GitHub Pages

The workflow in `.github/workflows/pages.yml` validates pull requests and deploys successful builds from `main`.

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push the workflow to `main`, then follow its run in the **Actions** tab.
4. Open the deployment URL shown by the `deploy` job. For this repository, the URL is `https://fadhilla-hentino.github.io/`.

The workflow reads GitHub Pages' reported base path, so a future custom domain can use `/` without a source-code change. Pull requests validate a root-path build but never deploy.
