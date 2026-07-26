# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React app source.
- `src/components/` is split by feature area: `Header/`, `Main/`, and `Footer/`.
- Reusable section components live in `src/components/Main/components/`.
- Static files and the HTML shell live in `public/`.
- Media assets are stored alongside the component that uses them, for example `src/components/Main/Images/` and `src/components/Header/Images/`.

## Build, Test, and Development Commands
- `npm start` runs the development server on `http://localhost:3000`.
- `npm run build` creates an optimized production build in `build/`.
- `npm test` launches the CRA test runner in watch mode.
- `npm run deploy` publishes the built site with `gh-pages`; it runs `npm run build` first.

## Coding Style & Naming Conventions
- Follow the existing CRA JavaScript style: ES modules, functional React components, and component-scoped CSS files.
- Use PascalCase for component files and folders, such as `ContactForm.js` and `ContactForm.css`.
- Keep filenames aligned with the exported component name.
- Prefer clear, descriptive asset names such as `profile_pic.jpg` or `aws_practitioner.png`.
- No formatter is configured in the repo, so keep edits consistent with surrounding code.

## Testing Guidelines
- The project includes CRA testing dependencies (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`), but no custom test suite is present yet.
- If you add tests, place them near the component they cover or follow CRA naming like `ComponentName.test.js`.
- Focus on user-visible behavior: rendering, navigation, form interaction, and modal or scroll-triggered states.

## Commit & Pull Request Guidelines
- Git history is short and informal (`wip`, `ready`, `done`), so there is no strict existing commit convention.
- Use concise, imperative commit messages when making changes, for example `Add contact form validation`.
- Pull requests should explain what changed, why it changed, and whether the site build still passes.
- Include screenshots or short screen recordings for visual updates, especially for layout, animation, or responsive changes.

## Agent Notes
- Keep changes minimal and aligned with the current portfolio structure.
- Avoid moving assets unless the component ownership changes with them.
- Update copy and layout carefully; this repository is user-facing and visually sensitive.
