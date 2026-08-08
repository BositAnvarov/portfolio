# Abdulbosit Anvarov Portfolio

This repository contains a personal software-engineering portfolio website for Abdulbosit “Bosit” Anvarov. The application itself lives in [`personal_portfolio/`](./personal_portfolio).

The site presents professional experience, selected engineering projects, education, technical skills, and contact details in a responsive single-page experience. It is designed to highlight work in backend development, cloud infrastructure, distributed systems, observability, and machine learning.

## What it includes

- A roadmap-style introduction and professional impact metrics
- Experience, education, skills, and contact sections
- A filterable projects grid with animated project-detail modals
- Resume download and social/contact links
- Responsive navigation, viewport animations, keyboard-accessible controls, and reduced-motion support
- Search and social metadata, including Person JSON-LD

## Technology

- Next.js with the App Router
- React and TypeScript
- Tailwind CSS and custom CSS
- Motion for interface animation
- Lucide React for icons

## Run locally

```bash
cd personal_portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Useful additional commands:

```bash
npm run build      # create a production build
npm run start      # serve the production build
npm run typecheck  # check TypeScript types
```

## Updating content

Most portfolio content—including the profile, work history, projects, skill groups, and education—is centralized in [`personal_portfolio/src/data/portfolio.ts`](./personal_portfolio/src/data/portfolio.ts). Replace the placeholder contact and project URLs there before publishing.

The resume file is stored at `personal_portfolio/public/resume/Abdulbosit-Anvarov-Resume.pdf`. Visual assets for the roadmap and other sections are in `personal_portfolio/public/` and the relevant component directories.

## Deployment

The portfolio can be deployed on Vercel using the default Next.js configuration. Select `personal_portfolio` as the project root when importing this repository.
