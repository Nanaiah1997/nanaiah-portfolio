# Nanaiah M G — Portfolio

Personal portfolio for Nanaiah M G, frontend software engineer. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Scripts

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm start
```

## Contact form

The form posts to `/api/contact`.

- With `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` set, messages are sent through [Resend](https://resend.com).
- Otherwise the API delivers through [FormSubmit](https://formsubmit.co) to nanaiahmg4@gmail.com. The first message triggers a confirmation email to that inbox. Confirm it once so later messages arrive.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the production origin before deploying. That value is used for canonical, Open Graph, sitemap, and robots URLs.

## Deploy

Import this directory into Vercel. The framework preset is Next.js. Set `NEXT_PUBLIC_SITE_URL` in the project environment. The resume PDF is served from `public/resume/`.
