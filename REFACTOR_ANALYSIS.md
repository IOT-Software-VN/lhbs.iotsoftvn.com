# Phân tích và Refactor Plan - Naming, Structure, Patterns

## 📋 TỔNG QUAN

Phân tích sâu về naming conventions, structure, patterns và code quality để refactor theo Next.js 16.1.1 best practices.

---

## 🔴 VẤN ĐỀ NAMING CONVENTIONS

### 1. **Inconsistent File Naming**

**Vấn đề:**

- `forms-section.tsx` (có suffix `-section`)
- `archive-reports.tsx` (không có suffix)
- `main-report.tsx` (không có suffix)
- `the-numbers.tsx` (không có suffix)
- `hero-carousel.tsx` (không có suffix)

**Nên:** Tất cả section components nên có suffix `-section.tsx` hoặc không có suffix cho consistency.

**Recommendation:** Loại bỏ suffix `-section` cho tất cả, vì đã ở trong folder `section/`

### 2. **Inconsistent Component Naming**

**Vấn đề:**

- Views: `HomePage`, `DirectorsPage`, `CampusPage` - nhưng files là `home-view.tsx`, `directors-view.tsx`
- Sections: `WelcomeSection`, `EducationLevel` (không có suffix Section)
- Mixed: `HeroCarousel`, `ProgramsSection`, `TheNumbers`

**Nên:**

- Views: Tất cả nên là `*Page` (HomePage, DirectorsPage) - đúng
- Sections: Tất cả nên là `*Section` (EducationLevelSection, TheNumbersSection)
- Standalone components: `HeroCarousel` - OK

### 3. **Duplicate Component Names**

**Vấn đề:**

- `WelcomeSection` được dùng ở 3 modules: campus, directors, vision-mission
- `TestimonialQuoteSection` được dùng ở 3 modules: home, vision-mission, milestone

**Nên:**

- Extract thành shared components trong `components/common/` hoặc
- Rename thành module-specific: `CampusWelcomeSection`, `DirectorsWelcomeSection`

### 4. **Inconsistent Constant Naming**

**Vấn đề:**

- `SCHOOL_LEVELS` (SCREAMING_SNAKE_CASE) - trong home/mock-data.ts
- `newsItems` (camelCase) - inline trong components
- `CORE_VALUES` (SCREAMING_SNAKE_CASE) - trong core-values.tsx
- `breadcrumbItems` (camelCase) - inline trong views

**Nên:**

- Module-level constants: `SCREAMING_SNAKE_CASE`
- Component-level constants: `camelCase`
- Tất cả constants nên extract vào mock-data.ts hoặc constants.ts

### 5. **Poor Variable Naming**

**Vấn đề:**

- `Herobg`, `Herobg1` - không descriptive, không follow conventions
- `getData()` - quá generic

**Nên:**

- `heroBackgroundImages` hoặc `HERO_BACKGROUND_IMAGES`
- `getDirectorsData()` hoặc specific function names

### 6. **Inconsistent Type Naming**

**Vấn đề:**

- `HomeModuleState` (có suffix Module)
- `DirectorsState` (không có suffix)
- `CampusState`, `LearningPathState`, etc.

**Nên:** Tất cả nên là `*State` (loại bỏ Module suffix) HOẶC tất cả nên là `*ModuleState`

**Recommendation:** Loại bỏ `Module` suffix, dùng `HomeState`, `DirectorsState` (ngắn gọn hơn)

---

## 🟡 VẤN ĐỀ STRUCTURE

### 1. **Views Folder Redundancy**

**Vấn đề:**

- Views folder chỉ chứa 1 file mỗi module
- `modules/home/views/home-view.tsx` → chỉ export `HomePage`
- Có thể flatten: `modules/home/home-page.tsx`

**Nên:**

- Option A: Flatten views vào root module: `modules/home/home-page.tsx`
- Option B: Giữ views folder nhưng rename: `home-page.tsx` (bỏ `-view` suffix)

**Recommendation:** Option B - giữ structure nhưng rename files

### 2. **Inconsistent Component Exports**

**Vấn đề:**

- `home/components/index.ts` - exports từ root và section/
- `directors/components/index.ts` - chỉ exports từ section/
- Mixed structure

**Nên:** Tất cả nên consistent - exports từ section/ và root components (nếu có)

### 3. **Mock Data Organization**

**Vấn đề:**

- Mock data ở `components/layout/mock-data.ts`
- Mock data ở `modules/*/mock-data.ts`
- Inline constants trong components

**Nên:**

- Tất cả mock data nên ở `mock-data.ts` trong module/component folder
- Không nên inline constants lớn trong components

### 4. **Empty Types Folder**

**Vấn đề:**

- Types folder có `index.ts` nhưng chỉ export empty interfaces:
  ```ts
  export interface HomeModuleState {}
  ```
- Types không được sử dụng

**Nên:**

- Nếu không dùng: xóa types folder
- Nếu cần: define types thực sự

**Recommendation:** Xóa types folder nếu không dùng, hoặc move types vào mock-data.ts

### 5. **Component Organization**

**Vấn đề:**

- `hero-carousel.tsx` ở root của `components/` folder
- Các components khác ở `section/` folder

**Nên:**

- Nếu là section component: move vào `section/hero-carousel.tsx`
- Nếu là standalone: OK

---

## 🟠 VẤN ĐỀ PATTERNS

### 1. **Duplicate Components**

**Vấn đề:**

- `WelcomeSection` - 3 instances (campus, directors, vision-mission)
- `TestimonialQuoteSection` - 3 instances (home, vision-mission, milestone)

**Nên:** Extract thành shared components hoặc rename để module-specific

**Recommendation:**

- Nếu logic giống nhau: Extract thành `components/common/welcome-section.tsx`
- Nếu logic khác: Rename thành `*ModuleWelcomeSection`

### 2. **Inline Breadcrumb Items**

**Vấn đề:**

- Breadcrumb items được define inline trong views:
  ```ts
  const breadcrumbItems: BreadcrumbItem[] = [...]
  ```
- Duplicate ở page.tsx và view.tsx

**Nên:** Extract vào constants hoặc config file

### 3. **Empty Props Destructuring**

**Vấn đề:**

```tsx
export function WelcomeSection({}: WelcomeSectionProps) {
```

- Empty destructuring không cần thiết

**Nên:**

- Nếu không dùng props: `export function WelcomeSection()`
- Nếu props optional: `export function WelcomeSection(_props?: WelcomeSectionProps)`

### 4. **Inconsistent Export Patterns**

**Vấn đề:**

- Module index: `export * from './views/home-view'`
- Components index: Mixed `export *` patterns
- Some direct exports, some re-exports

**Nên:** Consistent export patterns - tất cả dùng `export * from` hoặc named exports

### 5. **Magic Strings/Numbers**

**Vấn đề:**

- Hardcoded paths, URLs trong components
- Magic numbers (5000, 10000, etc.)

**Nên:** Extract thành constants

---

## 🟢 CODE QUALITY ISSUES

### 1. **Unused Types**

**Vấn đề:**

```ts
export interface HomeModuleState {}
```

- Empty interfaces không được sử dụng

**Nên:** Xóa hoặc implement thực sự

### 2. **Inconsistent Import Order**

**Vấn đề:**

- Mixed import orders (external, internal, types)
- Không consistent

**Nên:**

1. External packages
2. Internal absolute imports (@/)
3. Relative imports
4. Types (type imports)
5. Styles

### 3. **Missing Type Exports**

**Vấn đề:**

- Types được define inline trong components
- Không được export từ index files

**Nên:** Export types từ index files nếu cần reuse

### 4. **Component Props Patterns**

**Vấn đề:**

- Mixed patterns: `{ children }: { children: React.ReactNode }` vs `Props` interface
- Inconsistent

**Nên:** Luôn dùng Props interface

---

## 📊 REFACTOR PRIORITIES

### 🔴 High Priority (Critical)

1. **Rename files**: Remove `-view` suffix, standardize `-section` suffix
2. **Extract duplicate components**: WelcomeSection, TestimonialQuoteSection
3. **Standardize component naming**: All sections should end with `Section`
4. **Extract constants**: Move inline constants to mock-data.ts
5. **Fix empty props destructuring**

### 🟡 Medium Priority (Important)

6. **Consolidate types**: Remove empty type files or implement
7. **Standardize exports**: Consistent export patterns
8. **Extract breadcrumb items**: Move to constants
9. **Fix variable naming**: Herobg, getData, etc.
10. **Standardize constant naming**: SCREAMING_SNAKE_CASE vs camelCase

### 🟢 Low Priority (Nice to have)

11. **Flatten views folder** (optional)
12. **Organize imports**: Consistent import order
13. **Extract magic numbers**: Constants for timeouts, etc.
14. **Document patterns**: Add comments for complex patterns

---

## 🎯 RECOMMENDED STRUCTURE

```
src/
├── app/                          # Next.js app directory
│   ├── [routes]/
│   │   └── page.tsx              # Route pages
│   ├── layout.tsx
│   └── fonts/                    # Fonts (OK)
│
├── components/
│   ├── common/                   # Shared components
│   │   ├── welcome-section.tsx   # Extracted from modules
│   │   ├── testimonial-quote-section.tsx
│   │   ├── sub-page-hero.tsx
│   │   └── pdf-viewer/
│   ├── layout/                   # Layout components
│   └── ui/                       # UI primitives
│
└── modules/
    ├── home/
    │   ├── home-page.tsx         # Renamed from views/home-view.tsx
    │   ├── components/
    │   │   ├── section/
    │   │   │   ├── education-level-section.tsx  # Added Section suffix
    │   │   │   ├── programs-section.tsx
    │   │   │   └── ...
    │   │   ├── hero-carousel.tsx
    │   │   └── index.ts
    │   ├── constants.ts          # Renamed from mock-data.ts
    │   └── index.ts
    └── [other-modules]/
```

---

## ✅ NAMING CONVENTIONS (Final)

### Files

- Pages: `*-page.tsx` (home-page.tsx, directors-page.tsx)
- Sections: `*-section.tsx` (welcome-section.tsx, education-level-section.tsx)
- Components: `kebab-case.tsx` (hero-carousel.tsx, pdf-viewer.tsx)
- Constants: `constants.ts` (thay vì mock-data.ts)
- Types: `types.ts` (nếu cần, hoặc inline trong files)

### Components

- Pages: `*Page` (HomePage, DirectorsPage)
- Sections: `*Section` (WelcomeSection, EducationLevelSection)
- Components: `PascalCase` (HeroCarousel, PdfViewer)

### Constants

- Module-level: `SCREAMING_SNAKE_CASE` (SCHOOL_LEVELS, CORE_VALUES)
- Component-level: `camelCase` (heroBackgroundImages)
- Extracted to: `constants.ts` files

### Types/Interfaces

- Interfaces: `PascalCase` (HomeState, DirectorsState)
- Props: `*Props` (HomePageProps, WelcomeSectionProps)
- Types: `PascalCase` (BreadcrumbItem, NavParent)
