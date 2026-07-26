# Abdulbosit Anvarov — Portfolio

Premium, accessible portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide React.

## Local development

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Customization

- All profile, experience, project, education, and skill content lives in `src/data/portfolio.ts`.
- Add a project by adding a typed object to the `projects` array; the filter and modal pick it up automatically.
- Change accent styling in the CSS variables at the top of `src/app/globals.css`.
- Add the actual resume PDF at `public/resume/Abdulbosit-Anvarov-Resume.pdf`.
- Replace the social/email placeholders in `src/data/portfolio.ts`.
- Replace project visual placeholders in `ProjectsSection.tsx` when project imagery is available. The current visuals are CSS-only, local, and intentionally lightweight.

## Architecture notes

Static page composition and content remain server-rendered. Client components are limited to the sticky navigation, Motion viewport reveals, magnetic CTA, impact reveal, and filterable project grid/modal. The modal handles Escape-to-close, click-outside close, focus on open, and scroll locking. Reduced motion is respected in both CSS and the Motion interactions.

## Deploying on Vercel

Import this repository into [Vercel](https://vercel.com/) and deploy with the default Next.js settings. Vercel will run the production build automatically. A custom domain can be configured in the project settings.

The resume directory contains a placeholder `.gitkeep`; replace it with the PDF before publishing job applications.
