# 📘 Hướng Dẫn Setup Monorepo với Nx - LHBS Project

> **Tài liệu dành cho:** Frontend Developer  
> **Ngày tạo:** 13/12/2025  
> **Tech Stack:** Nx + React Router + Vite + TailwindCSS v4 + Vitest

---

## 📑 Mục Lục

1. [Yêu Cầu Hệ Thống](#1-yêu-cầu-hệ-thống)
2. [Khởi Tạo Workspace](#2-khởi-tạo-workspace)
3. [Setup TailwindCSS v4](#3-setup-tailwindcss-v4)
4. [Setup Path Alias](#4-setup-path-alias)
5. [Tạo Application](#5-tạo-application)
6. [Cấu Trúc Thư Mục](#6-cấu-trúc-thư-mục)
7. [Commands Thường Dùng](#7-commands-thường-dùng)

---

## 1. Yêu Cầu Hệ Thống

### ✅ Prerequisites

```bash
# Node.js >= 18.x (Recommended: 20.x LTS)
node --version

# npm >= 9.x
npm --version

# Git
git --version
```

### 📦 Global Packages (Optional)

```bash
# Cài đặt Nx CLI globally (khuyến nghị)
npm install -g nx
```

---

## 2. Khởi Tạo Workspace

### Bước 1: Tạo Nx Workspace

```bash
npx create-nx-workspace@latest
```

### Bước 2: Trả Lời Interactive Prompts

```plaintext
? Where would you like to create your workspace? 
› LHBS-demo

? Which starter do you want to use?
  TypeScript        (minimal TypeScript monorepo without projects)
  NPM Packages      (monorepo with TypeScript packages ready to publish)
  React             (fullstack monorepo with React and Express)
  Angular           (fullstack monorepo with Angular and Express)
❯ Custom            (more options for frameworks, test runners, etc.)

? Which stack do you want to use?
  None:          Configures a TypeScript/JavaScript monorepo.
❯ React:         Configures a React application with your framework of choice. 
  Vue:           Configures a Vue application with your framework of choice.
  Angular:       Configures a Angular application with modern tooling.
  Node:          Configures a Node API application with your framework of choice.

? What framework would you like to use?
❯ None          I only want react, react-dom or react-router 
  Next.js       [ https://nextjs.org/       ]
  Expo          [ https://expo.io/          ]
  React Native  [ https://reactnative.dev/  ]

? Would you like to use React Router for server-side rendering?
❯ Yes I want to use React Router. (Vite will be selected as the bundler) 
  No

? Which unit test runner would you like to use?
❯ Vitest [ https://vitest.dev/ ] 
  Jest   [ https://jestjs.io/ ]
  None

? Test runner to use for end to end (E2E) tests
  Playwright [ https://playwright.dev/ ]
  Cypress [ https://www.cypress.io/ ]
❯ None

? Default stylesheet format
  CSS
  SASS(.scss)       [ https://sass-lang.com   ]
  LESS              [ https://lesscss.org     ]
❯ tailwind          [ https://tailwindcss.com     ] 
  styled-components [ https://styled-components.com            ]
  emotion           [ https://emotion.sh                       ]
  styled-jsx        [ https://www.npmjs.com/package/styled-jsx ]

? Would you like remote caching to make your build faster?
❯ Yes 
  No - I would not like remote caching
```

### 📋 Cấu Hình Được Chọn

| Tùy Chọn | Giá Trị |
|----------|---------|
| **Workspace name** | `LHBS-demo` |
| **Starter** | `Custom` |
| **Stack** | `React` |
| **Framework** | `None (React Router)` |
| **React Router SSR** | `Yes (Vite bundler)` |
| **Unit Test** | `Vitest` |
| **E2E Test** | `None` |
| **Stylesheet** | `Tailwind` |
| **Remote Caching** | `Yes` |

### Bước 3: Di Chuyển Vào Workspace

```bash
cd LHBS-demo
```

---

## 3. Setup TailwindCSS v4 Cho Apps

### Tham Khảo Documentation

🔗 **[TailwindCSS Installation with Vite](https://tailwindcss.com/docs/installation/using-vite)**

### Quick Start

```bash
# Cài đặt dependencies
npm install tailwindcss @tailwindcss/vite
```

**Update Vite Config:**

```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
})
```

---

## 4. Setup Path Alias

### Vite Config

**File: `apps/[app-name]/vite.config.mts`**

```typescript
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'app'),
      '~': path.resolve(import.meta.dirname, 'app/components/ui'),
      '@assets': path.resolve(import.meta.dirname, 'assets'),
    },
  },
})
```

### TypeScript Config

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

**File: `tsconfig.base.json`** (root)

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./app/*"],
      "~/*": ["./app/components/ui/*"],
      "@assets/*": ["./assets/*"]
    }
  }
}
```

### Sử Dụng

```tsx
import { Button } from '~/button'
import logo from '@assets/images/logo.png'
```

---

## 5. Tạo Application

### Lệnh Tạo App

```bash
# Interactive mode (khuyến nghị)
nx g @nx/react:app

# Hoặc với tham số cụ thể
nx g @nx/react:app [tên-app] \
  --bundler=vite \
  --framework=react-router \
  --unitTestRunner=vitest \
  --e2eTestRunner=none

# Ví dụ
nx g @nx/react:app school.lhbs.edu.vn
```

### Thay Đổi Port

**File: `apps/[app-name]/vite.config.mts`**

```typescript
server: {
  port: 4201,  // App 1: 4200, App 2: 4201, etc.
}
```

---

## 6. Cấu Trúc Thư Mục

```
LHBS-demo/
├── apps/
│   ├── lhbs.edu.vn/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── routes/
│   │   │   ├── lib/
│   │   │   ├── hooks/
│   │   │   └── root.tsx
│   │   ├── assets/
│   │   ├── public/
│   │   ├── vite.config.mts
│   │   └── tsconfig.app.json
│   └── school.lhbs.edu.vn/
├── libs/                 # Shared libraries (optional)
├── node_modules/
├── package.json
├── nx.json
└── tsconfig.base.json
```

---

## 7. Commands Thường Dùng

### Development

```bash
# Chạy dev server
nx dev lhbs.edu.vn
nx dev school.lhbs.edu.vn

# Chạy nhiều apps
nx run-many --target=dev --projects=lhbs.edu.vn,school.lhbs.edu.vn
```

### Build

```bash
# Build 1 app
nx build lhbs.edu.vn

# Build tất cả
nx run-many --target=build --all
```

### Testing

```bash
# Run tests
nx test lhbs.edu.vn

# Run tests với coverage
nx test lhbs.edu.vn --coverage
```

### Linting

```bash
# Lint 1 app
nx lint lhbs.edu.vn

# Lint tất cả
nx run-many --target=lint --all
```

### Nx Graph

```bash
# Xem dependency graph
nx graph
```

### Tạo Components

```bash
# Tạo component
nx g @nx/react:component Button --project=lhbs.edu.vn --directory=app/components/ui
```

### Cache Management

```bash
# Clear Nx cache
nx reset

# Clear và reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Tài Liệu Tham Khảo

- [Nx Documentation](https://nx.dev)
- [React Router v7 Docs](https://reactrouter.com)
- [TailwindCSS v4 Docs](https://tailwindcss.com/docs/v4-beta)
- [Vite Documentation](https://vite.dev)
- [Vitest Documentation](https://vitest.dev)

---

## 🎯 Checklist Setup Monorepo

- [ ] Khởi tạo Nx workspace với Custom starter
- [ ] Setup TailwindCSS v4 với Vite
- [ ] Cấu hình path alias (Vite + TypeScript)
- [ ] Tạo applications theo nhu cầu
- [ ] Test dev server chạy OK
- [ ] Test build production
- [ ] Setup Git repository

---

**Người Tạo:** Frontend Developer  
**Version:** 1.0  
**Last Updated:** 13/12/2025
