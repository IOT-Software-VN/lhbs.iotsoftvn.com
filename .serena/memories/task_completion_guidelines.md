# Task Completion Guidelines

When implementing or modifying features in this project:

- **During development**:
  - Run `npm run dev` to verify the app loads and behaves correctly in the browser.
  - Use the React Router dev server URL (typically `http://localhost:9000`).

- **Type safety**:
  - Run `npm run typecheck` to ensure TypeScript types and React Router typegen are valid.
  - Fix any TypeScript or route-type errors before considering a task complete.

- **Formatting & Style**:
  - Run `npm run prettier:fix` on files you’ve modified to ensure formatting matches project conventions.
  - Optionally run `npm run prettier` in CI or before commits to confirm formatting is clean.

- **Build verification**:
  - Run `npm run build` to ensure the production build succeeds without errors.
  - Optionally run `npm start` (or `npm run start:crs` for Vite preview) to smoke-test the built app.

- **Git / Workflow** (general recommendations):
  - Keep commits focused on a single logical change.
  - Do not commit secrets or environment-specific configuration (e.g., `.env` files).
  - Use conventional commit-style messages (e.g., `feat: add home hero carousel`, `fix: correct mobile menu layout`).
