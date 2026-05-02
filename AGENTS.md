# Repository Guidelines

## Project Structure & Module Organization

This repository is an Astro website using TypeScript, React islands, Tailwind CSS v4, and shadcn/Radix UI primitives.

- `src/pages/`: Route files (`index.astro`, `pricing.astro`, etc.).
- `src/components/`: Reusable UI in Astro and React (`ui/`, `home/`, `product/`).
- `src/layouts/`: Shared page/layout wrappers.
- `src/lib/`: Fetching, API clients, validation, and utility helpers.
- `src/styles/`: Global stylesheets.
- `src/types/`: Shared TypeScript types.
- `public/`: Static assets (logos, images, favicon).
- `dist/`: Production output (generated).

## Build, Test, and Development Commands

Use Node `>=22.12.0` and `pnpm`.

- `pnpm dev`: Start local dev server (`http://localhost:4321`).
- `pnpm build`: Build production assets/server into `dist/`.
- `pnpm preview`: Run a local preview of the built app.
- `pnpm start`: Run the built server entry (`dist/server/entry.mjs`).

## Coding Style & Naming Conventions

- Use TypeScript/ES modules and keep imports explicit.
- Prefer 2-space indentation in `.ts`, `.tsx`, and `.astro` files.
- Component and layout filenames use `PascalCase` (e.g., `FeatureCard.astro`).
- Utility modules use lowercase or descriptive names (e.g., `validation.ts`, `fetch.ts`).
- Keep route filenames concise and lowercase (e.g., `terms.astro`).
- Reuse shared UI from `src/components/ui/` before adding new primitives.

## Typography Rules

- Global body font size must stay at `1.125rem` (18px) to keep the baseline readable with Google Sans.
- Never use `text-xs` or `text-base`.
- Prefer `text-lg` as the minimum baseline text utility when a utility class is needed.
- If using upstream/original shadcn components (instead of our custom wrappers) and they include internal `text-base`, pass a class override with `text-lg` to keep typography consistent.

## Testing Guidelines

There is no dedicated automated test suite configured yet in `package.json`.

- For now, validate changes with `pnpm build` and `pnpm preview`.
- For UI changes, verify affected pages and responsive behavior manually.
- If adding tests, co-locate them near source files and document the command in `package.json`.

## Commit & Pull Request Guidelines

- Recent history favors short, imperative commit messages (for example: `Add hero section`, `Adjust link hover`, `Update types`)
- Keep commits focused and atomic.
- Link related issues and call out breaking changes explicitly.
- Never commit on behalf of the user. Creating commits is exclusively the user's responsibility.
- If the user asks for help with commits, provide only: (1) a list of files and (2) suggested commit message(s) following the user's commit style.
- If changes span multiple tasks, group files by task and propose one possible commit per group.
- Commit help must always be presented as a list of possible commits with the files that should go into each one.

## Security & Configuration Tips

- Keep secrets in `.env`; never commit credentials.
- Respect `.npmrc` policies (`save-exact`, `block-exotic-subdeps`, `trust-policy=no-downgrade`) when adding dependencies.
