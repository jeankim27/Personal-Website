# jean.kim

Personal site. React + Vite, deployed on Netlify.

## Run locally

```bash
npm install
npm run dev
```

## The only rule

**All content lives in `src/data/*.json`.** Components read those files and
render them. To add a project, a publication, a book, or a job, edit the JSON.
Do not edit the components for content changes.

## Adding a project

1. Make a folder: `public/media/projects/<id>/`
2. Drop images in it
3. Append an object to `src/data/projects.json` with a matching `id`
4. `git push` — Netlify rebuilds automatically

Any gallery item with no `src` renders a generated placeholder, so you can add
a project before the photos are cleared for release.

## Images

Everything under `public/` is served with its filename intact, which is why
media lives there rather than `src/assets/`. Paths in JSON are absolute from
the site root: `/media/projects/glenn/nb-01.jpg`.

### Still to add

- `public/JEAN_KIM_CV.pdf` — included, replace when you update it
- `public/media/origins/cassini.jpg` — ~2400px wide, crops to 21:9. NASA/JPL-Caltech, public domain, credit required
- `public/og-image.jpg` — 1200x630, shows in link previews
- `public/media/projects/*/` — notebook scans, once cleared
- `public/media/hobbies/knitting/`, `.../photography/`

## Guestbook

`src/components/Guestbook.jsx` exists but is **not mounted** in `App.jsx`.
Uncomment it once the FastAPI backend is live on Render and `VITE_API_URL`
is set in Netlify's environment variables.

## Deploy

Netlify: import the repo, build `npm run build`, publish `dist`.
Confirm the `*.netlify.app` URL works before pointing jean.kim at it.
