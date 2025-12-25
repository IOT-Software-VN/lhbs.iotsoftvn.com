# UI/UX Configuration Rules

> **Purpose:** This document defines strict UI/UX rules for AI code generation to ensure consistency across the LHBS monorepo project.

---

## 1. FOLDER STRUCTURE & ORGANIZATION

### Overview
The `libs/` folder at the root (`libs/src/...`) contains all shared components used across apps.

### Directory Structure
```
libs/src/
├── components/          # shadcn UI generated components
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── index.ts
├── hooks/               # Custom React hooks
│   └── index.ts
├── shared-ui/           # Shared UI components
│   ├── layouts/         # Layout components (Header, Footer, Menu)
│   │   ├── StickyHeader.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── components/      # Single shared components
│   │   ├── CTABottomFixed.tsx
│   │   ├── ImageWithFallback.tsx
│   │   └── index.ts
│   └── components/
│       └── hero-section/    # Section-level components (kebab-case folders)
│           ├── hero-carousel.tsx
│           └── index.ts
```

### Export Rules
- **Every folder MUST have an `index.ts`** with named exports:
  ```typescript
  export * from './ComponentName';
  ```
- **Alias to libs:** `@sites/index`

### Component Props Philosophy
**CRITICAL:** All components in `libs/` MUST accept props for content to ensure flexibility across apps.

❌ **BAD (Hard-coded content):**
```typescript
export function HeroSection() {
  return <h1>Welcome to LHBS</h1>
}
```

✅ **GOOD (Props-driven content):**
```typescript
interface HeroSectionProps {
  title: string
  subtitle?: string
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </>
  )
}
```

---

## 2. NAMING CONVENTIONS (STRICT)

### Component Files
- **Format:** PascalCase
- **Examples:** `HeroSection.tsx`, `MainButton.tsx`, `CTABottomFixed.tsx`

### Folder Sections
- **Format:** kebab-case
- **Examples:** 
  - `shared-ui/components/home-hero/`
  - `shared-ui/components/news-section/`
  - `shared-ui/components/testimonial-quote-section/`

### Hook Files
- **Format:** Must start with `use` prefix (camelCase)
- **Examples:** `useTransformData.ts`, `useScrollVisibility.ts`

### Index Export Pattern
```typescript
// ✅ CORRECT
export * from './HeroSection';
export * from './MainButton';

// ❌ WRONG
export { HeroSection } from './hero-section';
export default HeroSection;
```

---

## 3. COLOR PALETTE (PRIMARY COLORS)

### Main Colors
```typescript
const COLORS = {
  PRIMARY_GREEN: '#1e5338',       // Main brand color (titles, buttons)
  SECTION_BG_GREEN: '#00602f',    // Background for sections (use ONLY for section bg)
  ACCENT_YELLOW: '#faba1e',       // Highlights, badges, CTAs
  WHITE: '#fff'                   // Text on dark backgrounds
}
```

### Usage Rules
- **#1e5338, #faba1e, #fff:** Can be used for titles, backgrounds, buttons (flexible)
- **#00602f:** ONLY for section backgrounds (strict rule)

### Color Selection Logic
```typescript
// Section background = white → text color = #1e5338
// Section background = dark → text color = #fff
```

---

## 4. SECTION TITLE STRUCTURE (MANDATORY)

### Complete Title Anatomy
Every section title MUST follow this order:
```
1. Line Decoration (top)
2. Badge/Subtitle (optional)
3. Main Title
```

### 1. Line Decoration (REQUIRED)
**Always placed above the title:**
```tsx
<div className="bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]" />
```

**Responsive Scaling:**
- Mobile: `w-16 h-1 mb-4`
- Desktop: `md:w-20 md:h-1.5 md:mb-6`

### 2. Title Badge (Optional)
**If section has a badge/subtitle above the main title:**
```tsx
<p className="text-[#FABA1E] text-[16px] uppercase tracking-[0.15em] mb-3">
  Badge Text
</p>
```

### 3. Main Title
**Font Configuration:**
- **Font Size:** 48px default for desktop (responsive scaling required)
- **Font Weight:** `font-black` (thickest)
- **Casing:** `uppercase`
- **Letter Spacing:** `tracking-tight`
- **Shadow:** `drop-shadow-2xl`

**Color Logic:**
```tsx
// White background section
<h2 className="text-[#1e5338] ...">

// Dark background section (#00602f)
<h2 className="text-white ...">
```

**Full Example:**
```tsx
<div className="flex flex-col items-center text-center">
  {/* Line */}
  <div className="bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]" />
  
  {/* Badge (optional) */}
  <p className="text-[#FABA1E] text-[16px] uppercase tracking-[0.15em] mb-3">
    Our Programs
  </p>
  
  {/* Main Title */}
  <h2 className="font-black uppercase tracking-tight drop-shadow-2xl text-[32px] leading-tight md:text-[48px] md:leading-tight lg:text-[60px] lg:leading-none 2xl:text-[72px] text-[#1e5338]">
    Educational Excellence
  </h2>
</div>
```

### Title Alignment Options
- **`items-center text-center`** (default for mobile)
- **`items-start text-start`** (desktop alternative, based on requirements)

---

## 5. RESPONSIVE DESIGN RULES (STRICT)

### Typography Scaling
**Main Title (H1/H2):**
```tsx
className="
  text-[32px] leading-tight
  md:text-[48px] md:leading-tight
  lg:text-[60px] lg:leading-none
  2xl:text-[72px]
"
```

**Alignment Strategy:**
- **Mobile (default):** `text-center` for balance
- **Desktop (conditional):** `md:text-start` if required

### Container & Layout
**Container Wrapper (MANDATORY):**
```tsx
<div className="container mx-auto px-4 md:px-8">
  {/* Content */}
</div>
```

**Grid Systems:**
```tsx
// Card Lists
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 4-column desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

### Section Padding
```tsx
className="py-12 md:py-24"
```
- **Mobile:** `py-12`
- **Desktop:** `py-24`

### Full Viewport Height Sections
**For hero-style or featured sections that should fill the screen:**
```tsx
className="w-full min-h-dvh bg-[color] relative snap-start overflow-hidden flex flex-col"
```

**Key Properties:**
- `min-h-dvh` - Minimum dynamic viewport height (allows content overflow on small screens, fixed on large screens)
- `snap-start` - Auto-scroll snap point for smooth navigation
- `overflow-hidden` - Prevent horizontal overflow
- `flex flex-col` - Vertical layout control

**Alternative for strict desktop-only full height:**
```tsx
className="w-full min-h-screen md:h-dvh bg-[color] relative snap-start overflow-hidden flex flex-col"
```
- Mobile: `min-h-screen` - Allows content to expand
- Desktop: `md:h-dvh` - Fixed viewport height

**Usage:** Apply to sections that should be full-screen experiences (hero sections, featured content, full-page messages)

### Line Decoration Responsive
```tsx
className="w-16 h-1 mb-4 md:w-20 md:h-1.5 md:mb-6"
```

---

## 6. BUTTON DESIGN RULES

### Shape (STRICT)
**All buttons MUST use `rounded-full`:**
```tsx
<button className="rounded-full ...">
```

### Size Variants
```tsx
// Small
className="px-6 py-2 text-sm rounded-full"

// Medium (default)
className="px-8 py-3 text-base rounded-full"

// Large
className="px-10 py-4 text-lg rounded-full"
```

### Color Variants
```tsx
// Primary Yellow
className="bg-[#FABA1E] hover:bg-[#e5a812] text-[#1e5338] rounded-full"

// Primary Green
className="bg-[#1e5338] hover:bg-[#163d2a] text-white rounded-full"

// Outline
className="border-2 border-[#FABA1E] text-[#FABA1E] hover:bg-[#FABA1E] hover:text-[#1e5338] rounded-full"
```

---

## 7. CLEAN CODE PRINCIPLES

### 1. No Hard-Coded Repetition
❌ **BAD:**
```tsx
<div className="bg-[#FABA1E] w-16 h-1 ..." />
<div className="bg-[#FABA1E] w-16 h-1 ..." />
<div className="bg-[#FABA1E] w-16 h-1 ..." />
```

✅ **GOOD:**
```tsx
const LINE_DECORATION = "bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]"

<div className={LINE_DECORATION} />
```

### 2. Use Tailwind Config for Colors
**In `tailwind.config.js`:**
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'lhbs-green': '#1e5338',
        'lhbs-green-dark': '#00602f',
        'lhbs-yellow': '#faba1e',
      }
    }
  }
}
```

**Then use:**
```tsx
<h2 className="text-lhbs-green ...">
```

### 3. Extract Repeated Patterns
```tsx
// constants/ui-classes.ts
export const TITLE_CLASSES = "font-black uppercase tracking-tight drop-shadow-2xl"
export const SECTION_PADDING = "py-12 md:py-24"
export const CONTAINER = "container mx-auto px-4 md:px-8"
```

---

## 8. ICONOGRAPHY RULES

### Icon Library (STRICT)
**ONLY use icons from `lucide-react`:**
```tsx
import { ChevronUp, Menu, X, Facebook } from 'lucide-react'
```

❌ **FORBIDDEN:**
- react-icons
- heroicons
- Font Awesome
- Custom SVG imports (except brand logos like Zalo, Messenger)

### Icon Sizing
```tsx
// Small
<Icon className="w-4 h-4" />

// Medium (default)
<Icon className="w-6 h-6" />

// Large
<Icon className="w-8 h-8" />
```

---

## 9. COMPONENT STRUCTURE TEMPLATE

### Standard Component File Structure
```tsx
// ============================================================================
// IMPORTS
// ============================================================================
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// ============================================================================
// TYPES & CONSTANTS
// ============================================================================
interface ComponentProps {
  title: string
  subtitle?: string
}

const DEFAULT_PROPS = {
  subtitle: ''
} as const

const TITLE_CLASSES = "font-black uppercase tracking-tight drop-shadow-2xl"

// ============================================================================
// COMPONENT
// ============================================================================
export function Component({ title, subtitle = DEFAULT_PROPS.subtitle }: ComponentProps) {
  const [isOpen, setIsOpen] = useState(false)

  // ========================================
  // HANDLERS
  // ========================================
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // ========================================
  // EFFECTS
  // ========================================
  useEffect(() => {
    // ...
  }, [])

  // ========================================
  // RENDER
  // ========================================
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
      {/* Line Decoration */}
      <div className="bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]" />
      
      {/* Title */}
      <h2 className={`${TITLE_CLASSES} text-[32px] md:text-[48px] lg:text-[60px] 2xl:text-[72px]`}>
        {title}
      </h2>
    </div>
  )
}
```

---

## 10. CHECKLIST FOR AI CODE GENERATION

Before generating any UI component, verify:

- [ ] Component is in correct folder (`shared-ui/components/` or `shared-ui/layouts/`)
- [ ] File name uses PascalCase (e.g., `NewsSection.tsx`)
- [ ] Folder section uses kebab-case (e.g., `news-section/`)
- [ ] Props interface defined for content flexibility
- [ ] Colors use defined palette (#1e5338, #00602f, #faba1e, #fff)
- [ ] Title structure follows: Line → Badge (optional) → Main Title
- [ ] Title uses responsive classes: `text-[32px] md:text-[48px] lg:text-[60px] 2xl:text-[72px]`
- [ ] Buttons use `rounded-full`
- [ ] Container wrapper: `container mx-auto px-4 md:px-8`
- [ ] Section padding: `py-12 md:py-24`
- [ ] Icons from `lucide-react` only
- [ ] No hard-coded values (use constants)
- [ ] Component exported in `index.ts`

---

## 11. EXAMPLE IMPLEMENTATIONS

### Example: Simple Section Component
```tsx
// libs/src/shared-ui/components/about-section/AboutSection.tsx

import { Target } from 'lucide-react'

interface AboutSectionProps {
  badge?: string
  title: string
  description: string
  bgColor?: 'white' | 'green'
}

const LINE_DECORATION = "bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]"
const TITLE_CLASSES = "font-black uppercase tracking-tight drop-shadow-2xl"

export function AboutSection({ 
  badge, 
  title, 
  description, 
  bgColor = 'white' 
}: AboutSectionProps) {
  const textColor = bgColor === 'white' ? 'text-[#1e5338]' : 'text-white'
  const sectionBg = bgColor === 'white' ? 'bg-white' : 'bg-[#00602f]'

  return (
    <section className={`${sectionBg} py-12 md:py-24`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Line */}
          <div className={LINE_DECORATION} />
          
          {/* Badge */}
          {badge && (
            <p className="text-[#FABA1E] text-[16px] uppercase tracking-[0.15em] mb-3">
              {badge}
            </p>
          )}
          
          {/* Title */}
          <h2 className={`
            ${TITLE_CLASSES} ${textColor}
            text-[32px] leading-tight
            md:text-[48px] md:leading-tight
            lg:text-[60px] lg:leading-none
            2xl:text-[72px]
          `}>
            {title}
          </h2>
          
          {/* Description */}
          <p className="mt-6 text-lg max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
```

### Example: Card Grid Section
```tsx
// libs/src/shared-ui/components/features-section/FeaturesSection.tsx

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesSectionProps {
  badge?: string
  title: string
  features: Feature[]
}

const LINE_DECORATION = "bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]"
const TITLE_CLASSES = "font-black uppercase tracking-tight drop-shadow-2xl"

export function FeaturesSection({ badge, title, features }: FeaturesSectionProps) {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className={LINE_DECORATION} />
          {badge && (
            <p className="text-[#FABA1E] text-[16px] uppercase tracking-[0.15em] mb-3">
              {badge}
            </p>
          )}
          <h2 className={`
            ${TITLE_CLASSES} text-[#1e5338]
            text-[32px] md:text-[48px] lg:text-[60px] 2xl:text-[72px]
          `}>
            {title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 text-[#FABA1E]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 12. COMMON MISTAKES TO AVOID

### ❌ Mistake #1: Hard-coding content in libs
```tsx
// BAD
export function Hero() {
  return <h1>Welcome to LHBS</h1>
}
```

### ❌ Mistake #2: Wrong button shape
```tsx
// BAD
<button className="rounded-lg ...">

// GOOD
<button className="rounded-full ...">
```

### ❌ Mistake #3: Missing responsive title scaling
```tsx
// BAD
<h2 className="text-6xl">

// GOOD
<h2 className="text-[32px] md:text-[48px] lg:text-[60px] 2xl:text-[72px]">
```

### ❌ Mistake #4: Missing container wrapper
```tsx
// BAD
<section>
  <h2>Title</h2>
</section>

// GOOD
<section>
  <div className="container mx-auto px-4 md:px-8">
    <h2>Title</h2>
  </div>
</section>
```

### ❌ Mistake #5: Using wrong icon library
```tsx
// BAD
import { FaFacebook } from 'react-icons/fa'

// GOOD
import { Facebook } from 'lucide-react'
```

---

## SUMMARY

This configuration ensures:
- **Consistency:** All components follow the same structure
- **Flexibility:** Props-driven design allows customization per app
- **Maintainability:** Clean code with constants and proper naming
- **Responsiveness:** Mobile-first approach with proper scaling
- **Brand Identity:** Consistent colors, typography, and design patterns

**When in doubt, refer to existing components in `libs/src/shared-ui/components/` for examples.**
