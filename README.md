# Career Craftly

Marketing site for [Career Craftly](https://www.careercraftly.org/) — Career Craftly LLP, a Flux Mind Studios company. The copy, services, contact details, and case studies come from the current website and the studio portfolio. The layout is a monochrome editorial studio site: black, white, and gray, with the mark rendered in white. A Stoic layer — control, the four virtues, and a few public-domain lines from Marcus Aurelius, Epictetus, and Seneca — sits under the business copy. It does not replace it.

## Stack

- Next.js 15 (App Router) with static export
- TypeScript
- Tailwind CSS 4
- shadcn/ui primitives (button, input, textarea, label, sheet)

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43217](http://127.0.0.1:43217). `npm run dev` already binds to that port.

## Build

```bash
npm run build
```

Static files are written to `out/`. Preview them with any static server:

```bash
npx serve out -p 43217
```

## Deploy

The site is a static export (`output: "export"` in `next.config.ts`), so it can be hosted on any static host.

- **Vercel:** import the repo. The framework preset is Next.js. Static export is picked up from `next.config.ts`.
- **Netlify / Cloudflare Pages:** build command `npm run build`, publish directory `out`.
- **GitHub Pages or any file host:** upload the contents of `out/`.

The contact form posts to the same FormSubmit endpoint the current site uses (`anant@careercraftly.org`). Phone, email, and Calendly links are the live contact details.

## Pages

- `/` Home
- `/services` Programs and services
- `/work` Case study index
- `/work/[slug]` Individual case studies
- `/contact` Contact form and direct contact details
