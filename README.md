# Portfolio — Mohamed Elkerymy

My personal portfolio: Full-Stack & AI developer, second-year student at YouCode (UM6P), Safi.

One page, in French and English, with a light and a dark theme:

- **Parcours / Experience** — my internship at JNF Production on Wijha.ma, with a sample of my real commits
- **Projets / Projects** — SI-PRD, MeteoRisk, DeliveryETA, EduHub and others, filterable by type
- **Live demo** — the MeteoRisk weather risk score, running in the browser with the same rules as the Python pipeline
- **Compétences / Skills** and **Contact**, with my CV as a PDF

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4. No backend: the site builds to static files.

## Run it locally

You need Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

Other commands:

```bash
npm run build     # type-check and build the static site into dist/
npm run preview   # serve the built site locally
npm run lint
```

## Where things are

```
public/
  Mohamed_Elkerymy_CV.pdf   the CV offered for download
src/
  data/content.ts           all the text (French and English), projects, links
  components/               one file per section of the page
  lib/meteorisk.ts          the risk score, ported from my MeteoRisk pipeline
  i18n/                     language switch (FR / EN)
  index.css                 design tokens (colours, type) and the hero styles
  assets/                   portrait and project screenshots
```

To change a text, a project or a link, edit `src/data/content.ts`: the components only handle layout.

To replace the CV, overwrite `public/Mohamed_Elkerymy_CV.pdf` with the new file.

## Deploying

`npm run build` produces a `dist/` folder that works on any static host (GitHub Pages, Netlify, Vercel).
The Vite `base` is relative, so the site also works from a sub-folder such as `username.github.io/portfolio/`.
