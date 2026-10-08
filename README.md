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
  CNAME, og.jpg             custom domain and the image shown when the link is shared
scripts/
  deploy.mjs                publishes the built site to GitHub Pages
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

The site is published with GitHub Pages at **https://elkerymy.me**, from the `main` branch of
[`jerymy-k/jerymy-k.github.io`](https://github.com/jerymy-k/jerymy-k.github.io).

After pushing your changes to this repository, publish them with:

```bash
npm run deploy
```

The script (`scripts/deploy.mjs`) builds the site, replaces the content of the Pages repository with
`dist/` and pushes one commit. `npm run deploy -- --dry-run` does everything except the push.

The domain needs these DNS records at the registrar:

| Type  | Host | Value              |
| ----- | ---- | ------------------ |
| A     | @    | 185.199.108.153    |
| A     | @    | 185.199.109.153    |
| A     | @    | 185.199.110.153    |
| A     | @    | 185.199.111.153    |
| CNAME | www  | jerymy-k.github.io |
