# Suggested Commands

All commands are intended to be run from the project root (`/Users/tedydev/Workspace/Codespaces/GitHub/lhbs.iotsoftvn.com`).

- **Install dependencies**:
  - `npm install`

- **Development server** (React Router dev server with Vite under the hood):
  - `npm run dev`
  - Default URL: `http://localhost:9000`

- **Type checking & route type generation**:
  - `npm run typecheck`
  - This runs `react-router typegen` and then `tsc` with `noEmit`.

- **Build for production**:
  - `npm run build`
  - Uses `react-router build` and outputs to `build/client` and `build/server`.

- **Run production server**:
  - `npm start`
  - Runs `react-router-serve ./build/server/index.js`.

- **Preview built client bundle via Vite**:
  - `npm run start:crs`
  - Runs `vite preview`.

- **Formatting with Prettier (check only)**:
  - `npm run prettier`

- **Formatting with Prettier (auto-fix)**:
  - `npm run prettier:fix`

- **Docker build & run** (from README example):
  - `docker build -t lhbs-demo .`
  - `docker run -p 3000:3000 lhbs-demo`