# 📱 Apps Overview - LHBS Monorepo

> **Tài liệu dành cho:** Frontend Developer  
> **Dự án:** LHBS - Trường Song Ngữ Lạc Hồng  
> **Thực hiện bởi:** ERICSS Developer @ IOT Software  
> **Last Updated:** 13/12/2025

<div align="center">
  <img src="../.github/images/Logo-LHBS.png" alt="LHBS Logo" width="200"/>
  <p><strong>Trường Song Ngữ Lạc Hồng - Since 2011</strong></p>
</div>

---

## 📑 Mục Lục

1. [Tổng Quan Applications](#1-tổng-quan-applications)
2. [Khởi Tạo App Mới](#2-khởi-tạo-app-mới)
3. [Setup Cơ Bản Sau Khi Tạo](#3-setup-cơ-bản-sau-khi-tạo)
4. [Cấu Trúc Thư Mục](#4-cấu-trúc-thư-mục)
5. [Routing với React Router](#5-routing-với-react-router)
6. [Commands Thường Dùng](#6-commands-thường-dùng)

---

## 1. Tổng Quan Applications

### 🎯 Tech Stack

Tất cả applications trong monorepo sử dụng cùng tech stack:

| Công Nghệ | Version | Mục Đích |
|-----------|---------|----------|
| **React** | 19.x | UI Library |
| **React Router** | 7.x | Routing Framework |
| **Vite** | 7.x | Build Tool & Dev Server |
| **TailwindCSS** | 4.x | CSS Framework |
| **TypeScript** | 5.x | Type Safety |
| **Vitest** | 4.x | Unit Testing |
| **Nx** | 22.x | Monorepo Management |

### 🏗️ Rendering Mode

- **Framework Mode**: React Router v7 với file-based routing
- **Rendering**: Client-Side Rendering (CSR) - No SSR
- **Build Output**: Static SPA (Single Page Application)

📖 **Tham khảo:** [React Router v7 Documentation](https://reactrouter.com/home)

### 📦 Danh Sách Applications

| App | Port | Mô Tả |
|-----|------|-------|
| `lhbs.edu.vn` | 4200 | Website chính - Landing page |
| `school.lhbs.edu.vn` | 4201 | School Portal |
| `bienhoa.galaxy.lhbs.edu.vn` | 4202 | Campus Biên Hòa |
| `longkhanh.galaxy.lhbs.edu.vn` | 4203 | Campus Long Khánh |

---

## 2. Khởi Tạo App Mới

### Bước 1: Chạy Generator

```bash
# Command khởi tạo app
nx g @nx/react:app apps/lhbs.edu.vn --routing --use-react-router
```

### Bước 2: Chọn Options

Khi chạy command trên, bạn sẽ được hỏi các options:

```plaintext
? Which unit test runner would you like to use?
  None
  Jest
❯ Vitest

? Which bundler would you like to use?
  webpack
  rspack
❯ vite

? Test runner to use for end to end (E2E) tests
❯ None
  Cypress
  Playwright

? Default stylesheet format
  LESS
  SCSS
  CSS
❯ None
```

### 📋 Options Được Chọn

| Option | Giá Trị |
|--------|---------|
| **Unit Test** | `Vitest` |
| **Bundler** | `Vite` |
| **E2E Test** | `None` |
| **Stylesheet** | `None` |

---

## 3. Setup Cơ Bản Sau Khi Tạo

### A. Setup Import Alias

**File: `apps/[app-name]/vite.config.mts`**

```typescript
import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'app'),
      '~': path.resolve(import.meta.dirname, 'app/components/ui'),
      '@assets': path.resolve(import.meta.dirname, 'assets'),
    },
  },
  plugins: [reactRouter()],
});
```

**File: `apps/[app-name]/tsconfig.app.json`**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["app/*"],
      "~/*": ["app/components/ui/*"],
      "@assets/*": ["./assets/*"]
    }
  }
}
```

### B. Install TailwindCSS v4

📖 **Tham khảo chi tiết:** [TailwindCSS Installation with Vite](https://tailwindcss.com/docs/installation/using-vite)

**Quick Steps:**

```bash
# Install dependencies
npm install tailwindcss @tailwindcss/vite
```

**Update `vite.config.mts`:**

```typescript
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
});
```

**Create `app/app.css`:**

```css
@import "tailwindcss";

@theme {
  /* Custom theme */
  --color-primary: #1a5336;
  --color-accent: #FABA1E;
}
```

**Import trong `app/root.tsx`:**

```tsx
import './app.css';
```

### C. Configure Port

**File: `apps/[app-name]/vite.config.mts`**

```typescript
export default defineConfig({
  server: {
    port: 4200, // lhbs.edu.vn: 4200, school: 4201, etc.
    host: 'localhost',
  },
});
```

### ⚠️ Lưu Ý Quan Trọng  

> **❌ KHÔNG import assets từ thư mục `public/`**
> 
> **✅ CHỈ import assets từ thư mục `assets/`**

**Lý do:**
- Thư mục `assets/` được xử lý bởi Vite, hỗ trợ import alias `@assets`
- Thư mục `public/` chứa static files được serve trực tiếp (không qua bundler)

**Ví dụ đúng:**

```tsx
// ✅ Đúng - Import từ assets/
import logo from '@assets/images/base/logo.png';

// ❌ Sai - Không import từ public/
import logo from '/images/base/logo.png'; // Wrong!
```

**Sử dụng public:**

```tsx
// Public files được truy cập qua URL path
<img src="/images/logo.png" alt="Logo" />
<link rel="icon" href="/favicon.ico" />
```

---

## 4. Cấu Trúc Thư Mục

### Cấu Trúc Chi Tiết

```
apps/lhbs.edu.vn/
├── app/                              # Source code
│   ├── components/                   # React components
│   │   ├── layouts/                  # Layout components
│   │   │   ├── layout.tsx            # Main layout wrapper
│   │   │   ├── StickyHeader.tsx      # Header navigation
│   │   │   ├── Footer.tsx            # Footer
│   │   │   └── FullScreenMenu.tsx    # Mobile menu
│   │   ├── ui/                       # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   └── accordion.tsx
│   │   └── home-page/                # Page-specific components
│   │       ├── hero-carousel.tsx
│   │       ├── hero-video.tsx
│   │       └── section/
│   ├── routes/                       # Route components (File-based routing)
│   │   ├── home.tsx                  # Homepage (/)
│   │   ├── admission/                # /admission/*
│   │   │   ├── page.tsx              # /admission
│   │   │   ├── open-days.tsx         # /admission/open-days
│   │   │   └── tuition-fees.tsx      # /admission/tuition-fees
│   │   ├── high-school/              # /high-school/*
│   │   │   └── page.tsx
│   │   └── 404.tsx                   # Not found page
│   ├── lib/                          # Utilities
│   │   └── utils.ts
│   ├── hooks/                        # Custom React hooks
│   │   └── use-mobile.ts
│   ├── types/                        # TypeScript types
│   │   └── navigation.ts
│   ├── root.tsx                      # Root component (HTML wrapper)
│   ├── routes.ts                     # Route configuration
│   └── app.css                       # Global styles
│
├── assets/                           # Assets imported in code (processed by Vite)
│   └── images/
│       ├── base/
│       │   └── logo-head.png         # Import với @assets alias
│       └── home-page/
│
├── public/                           # Static files (served as-is, no processing)
│   ├── fonts/                        # Font files
│   │   └── SVN-Gotham Regular.otf
│   ├── images/                       # Public images (direct URL access)
│   └── video/
│
├── tests/                            # Test files
│   └── routes/
│       └── _index.spec.tsx
│
├── vite.config.mts                   # Vite configuration
├── tsconfig.app.json                 # TypeScript config
├── project.json                      # Nx project config
└── package.json                      # App dependencies (optional)
```

### Phân Biệt `assets/` vs `public/`

| Khía Cạnh | `assets/` | `public/` |
|-----------|-----------|-----------|
| **Import trong code** | ✅ Có (qua `@assets`) | ❌ Không |
| **Xử lý bởi Vite** | ✅ Có | ❌ Không |
| **Hash filename** | ✅ Có | ❌ Không |
| **Optimize images** | ✅ Có | ❌ Không |
| **Truy cập URL** | ❌ Không trực tiếp | ✅ Có (`/images/...`) |
| **Use case** | Import trong components | Static files (fonts, favicon) |

---

## 5. Routing với React Router

### File-based Routing

React Router v7 sử dụng **file-based routing** - tự động tạo routes dựa trên cấu trúc file trong `app/routes/`.

📖 **Documentation:** [React Router - Routing](https://reactrouter.com/start/framework/routing)

### Quy Tắc Routing

| File Path | URL | Component |
|-----------|-----|-----------|
| `routes/home.tsx` | `/` | Homepage |
| `routes/admission/page.tsx` | `/admission` | Admission index |
| `routes/admission/open-days.tsx` | `/admission/open-days` | Open days |
| `routes/high-school/page.tsx` | `/high-school` | High school |
| `routes/404.tsx` | `*` (catch-all) | Not found |

### Tạo Route Mới

**Bước 1: Tạo file trong `app/routes/`**

```tsx
// app/routes/contact.tsx
import type { Route } from './+types/contact';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Contact Us - LHBS' },
    { name: 'description', content: 'Get in touch with LHBS' },
  ];
}

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Contact information...</p>
    </div>
  );
}
```

**Bước 2: Route tự động available tại `/contact`**

### Nested Routes

```
routes/
├── admission/
│   ├── page.tsx              # /admission (index)
│   ├── open-days.tsx         # /admission/open-days
│   └── tuition-fees.tsx      # /admission/tuition-fees
```

### Layout Routes

**File: `app/routes/admission/layout.tsx`**

```tsx
import { Outlet } from 'react-router';

export default function AdmissionLayout() {
  return (
    <div className="admission-layout">
      <nav>{/* Admission navigation */}</nav>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}
```

### Navigation

```tsx
import { Link } from 'react-router';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/admission">Admission</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

### Route Configuration

**File: `app/routes.ts`**

```typescript
import { type RouteConfig } from '@react-router/dev/routes';

export default [
  {
    path: '/',
    file: 'routes/home.tsx',
  },
  {
    path: '/admission',
    file: 'routes/admission/page.tsx',
  },
  // Routes auto-discovered from files
] satisfies RouteConfig;
```

---

## 6. Commands Thường Dùng

### Development

```bash
# Chạy dev server cho 1 app
nx dev lhbs.edu.vn
nx dev school.lhbs.edu.vn

# Chạy với custom port
nx dev lhbs.edu.vn --port 3000

# Chạy nhiều apps cùng lúc
nx run-many --target=dev --projects=lhbs.edu.vn,school.lhbs.edu.vn

# Chạy tất cả apps
nx run-many --target=dev --all
```

### Build

```bash
# Build 1 app
nx build lhbs.edu.vn

# Build production
nx build lhbs.edu.vn --configuration=production

# Build tất cả apps
nx run-many --target=build --all

# Build affected (chỉ apps bị thay đổi)
nx affected --target=build
```

### Testing

```bash
# Run tests cho 1 app
nx test lhbs.edu.vn

# Run tests với watch mode
nx test lhbs.edu.vn --watch

# Run tests với coverage
nx test lhbs.edu.vn --coverage

# Run tests cho tất cả
nx run-many --target=test --all

# Run affected tests
nx affected --target=test
```

### Linting

```bash
# Lint 1 app
nx lint lhbs.edu.vn

# Lint và auto-fix
nx lint lhbs.edu.vn --fix

# Lint tất cả
nx run-many --target=lint --all
```

### Preview Production Build

```bash
# Preview build locally
nx preview lhbs.edu.vn
```

### Generate Components

```bash
# Tạo component trong app
nx g @nx/react:component Button \
  --project=lhbs.edu.vn \
  --directory=app/components/ui

# Tạo component với tests
nx g @nx/react:component Card \
  --project=lhbs.edu.vn \
  --directory=app/components/ui \
  --withTests
```

### Project Info

```bash
# Xem thông tin project
nx show project lhbs.edu.vn

# Xem dependency graph
nx graph

# Xem affected apps
nx affected:graph
```

### Cache Management

```bash
# Clear Nx cache
nx reset

# Clear Vite cache
rm -rf apps/lhbs.edu.vn/node_modules/.vite
```

### Type Checking

```bash
# Type check 1 app
nx typecheck lhbs.edu.vn

# Type check tất cả
nx run-many --target=typecheck --all
```

---

## 📚 Resources

### Documentation

- [React Router v7](https://reactrouter.com)
- [Vite](https://vite.dev)
- [TailwindCSS v4](https://tailwindcss.com/docs/v4-beta)
- [Nx](https://nx.dev)
- [Vitest](https://vitest.dev)

### Useful Links

- [React Router - Routing](https://reactrouter.com/start/framework/routing)
- [React Router - Data Loading](https://reactrouter.com/start/framework/data-loading)
- [React Router - Actions](https://reactrouter.com/start/framework/actions)
- [Vite - Asset Handling](https://vite.dev/guide/assets)

---

## 🎯 Checklist Tạo App Mới

- [ ] Chạy `nx g @nx/react:app` với đúng options
- [ ] Setup import alias trong `vite.config.mts`
- [ ] Setup import alias trong `tsconfig.app.json`
- [ ] Install TailwindCSS v4
- [ ] Configure dev server port
- [ ] Tạo folder `assets/` cho images
- [ ] Test dev server chạy OK
- [ ] Test build production
- [ ] Commit changes

---

**Thực hiện bởi:** ERICSS Developer  
**Công ty:** IOT Software  
**Dự án:** LHBS - Trường Song Ngữ Lạc Hồng  
**Version:** 1.0  
**Last Updated:** 13/12/2025
