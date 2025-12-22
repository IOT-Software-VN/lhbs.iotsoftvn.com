# Style and Conventions

- **Language & Tooling**:
  - TypeScript with `strict: true` and modern ES2022 module/target settings.
  - JSX runtime: `react-jsx`.
  - Module resolution: `bundler` with `baseUrl: .` and path aliases `@/*` for `app`/`public` and `~/*` for `app/components/ui`.

- **Code Style**:
  - Prettier is configured via `.prettierrc` and enforced by `npm run prettier` / `npm run prettier:fix`.
  - `.editorconfig` present to normalize basic formatting (indent, line endings, etc.).
  - Functional React components (`.tsx`) with hooks; no visible class components.
  - Prefer composition via small, reusable UI components in `app/components/ui` and feature-specific components under `app/components/home-page`.

- **Project Structure**:
  - `app/root.tsx`: Root component/layout.
  - `app/routes.ts`: Route definitions for React Router v7.
  - `app/routes/*`: Route modules (e.g., `home.tsx`, `404.tsx`).
  - `app/components/layouts/*`: Layout-level components (header, footer, full-screen menu, main layout wrapper).
  - `app/components/ui/*`: Shared primitives (buttons, cards, accordions, carousel, forms, error boundary, not-found page, scroll helpers, etc.).
  - `app/components/home-page/*`: Home page feature sections and related hooks/data.
  - `app/lib/utils.ts`: Shared utilities (e.g., className helpers, etc.).
  - `app/types/navigation.ts`: Shared TypeScript types for navigation.

- **Libraries & Patterns**:
  - TailwindCSS utility classes used heavily for styling.
  - `class-variance-authority` and `tailwind-merge` used to manage conditional class names.
  - `lucide-react` and `react-icons` for icons.
  - `@radix-ui/react-accordion` for accessible accordion UI.
  - `embla-carousel-react` for carousels.
  - `motion` for animations and transitions.

- **Routing Conventions**:
  - Follows React Router v7 app structure, with a central `routes.ts` and per-route components under `app/routes`.
  - Custom 404 route in `app/routes/404.tsx` and shared `NotFoundPage` component in `app/components/ui/NotFoundPage.tsx`.

- **General Principles** (inferred from structure & tools):
  - Strong separation between layout, UI primitives, and feature components.
  - Type-safe navigation via shared `navigation` types.
  - Consistent use of Tailwind and shared utility helpers for styling instead of ad-hoc CSS.
