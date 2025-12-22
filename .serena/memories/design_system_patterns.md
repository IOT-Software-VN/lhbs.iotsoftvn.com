# Design System Patterns - LHBS Website

## Color Palette
- **Primary Green**: `#1E5338` / `#1a5338` / `#00602F` / `#14432b` (dark green shades)
- **Accent Yellow**: `#FABA1E` (golden yellow - primary CTA color)
- **White**: `#ffffff` / `white`
- **Black/Dark**: `#050505` / `#000000` / `black`
- **Gray tones**: `gray-50`, `gray-100`, `gray-200` for subtle backgrounds
- **Text colors**: 
  - Primary: `text-[#1E5338]` (dark green)
  - Secondary: `text-white` / `text-white/90` / `text-white/80`
  - Accent: `text-[#FABA1E]` (yellow)

## Typography
- **Font Family**: SVN-Gotham (custom font loaded in app.css)
- **Font Weights**: 
  - Light: 300
  - Regular: 400
  - Book: 500
  - Bold: 700
  - Black: 900
- **Heading Styles**:
  - H1: `text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-tight`
  - H2: `text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight`
  - H3: `text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide`
  - Subtitle: `text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.2em]`
- **Body Text**: `text-sm md:text-base lg:text-lg font-medium leading-relaxed`

## Layout Patterns

### Section Structure
- Full viewport height: `h-dvh` (dynamic viewport height)
- Snap scrolling: `snap-start` for each section
- Max width container: `max-w-[1920px] mx-auto`
- Padding: `px-4 md:px-12 lg:px-16` (responsive horizontal padding)
- Background colors: Usually `bg-white`, `bg-[#050505]`, `bg-[#00602F]`, or custom gradients

### Decorative Elements
- **Yellow accent line**: `bg-[#FABA1E] w-12 h-1 md:w-16 md:h-1.5 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]`
- **Vertical accent line**: `bg-[#FABA1E] w-2 h-20 rounded-full` (for vertical layouts)
- **Dot bullets**: `w-2 h-2 rounded-full bg-[#FABA1E] shadow-[0_0_8px_rgba(250,186,30,0.6)]`

## Button Styles

### Primary CTA Button
```tsx
className='px-6 py-3 md:px-8 md:py-3.5 bg-[#FABA1E] text-[#1E5338] font-bold text-xs md:text-sm uppercase tracking-widest rounded-sm hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
```

### Secondary Button (Dark)
```tsx
className='px-6 py-2.5 bg-[#1E5338] text-white font-bold uppercase tracking-wide text-xs rounded-full hover:bg-[#FABA1E] hover:text-[#1E5338] transition-all shadow-lg'
```

## Animation Patterns

### Motion/Framer Motion Usage
- Import: `import { motion, useInView, AnimatePresence } from 'motion/react'`
- Common animations:
  - Fade in: `initial={{ opacity: 0 }} animate={{ opacity: 1 }}`
  - Slide up: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
  - Slide from side: `initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}`
- Viewport triggers: `const isInView = useInView(ref, { once: true, amount: 0.3 })`
- Stagger delays: `transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}`

## Image Patterns
- Object fit: `object-cover object-center` or `object-cover object-top`
- Hover effects: `group-hover:scale-110 transition-transform duration-700`
- Overlays: `bg-gradient-to-t from-black/90 via-black/20 to-transparent`
- Loading: `loading='lazy'` for below-fold images, `loading='eager'` for hero images

## Grid & Layout Patterns
- **2-column**: `grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8`
- **3-column**: `grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8`
- **Responsive spacing**: `gap-4 md:gap-6 lg:gap-8`

## Section Header Pattern
```tsx
<div className='flex flex-col items-start mb-8 md:mb-12'>
  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
    <div className='bg-[#FABA1E] w-12 h-1 md:w-16 md:h-1.5 mb-3 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
    <h2 className='text-xs md:text-sm lg:text-base font-bold text-[#FABA1E] uppercase tracking-[0.2em] leading-none drop-shadow-md mb-2'>
      Subtitle Text
    </h2>
  </motion.div>
  <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className='text-3xl md:text-4xl lg:text-5xl font-black text-[#1E5338] uppercase tracking-tight drop-shadow-2xl'>
    Main Title
  </motion.h2>
</div>
```

## Card/Box Patterns
- Border: `border border-gray-200` or `border-l-4 border-[#FABA1E]`
- Hover: `hover:border-[#FABA1E] hover:bg-white hover:shadow-lg transition-all`
- Background: `bg-gray-50/30` or `bg-white`

## Scrollable Containers
- Custom scrollbar: `no-scrollbar` class (defined in CSS)
- Overflow: `overflow-y-auto no-scrollbar` for scrollable content
- Max height: `max-h-[85vh]` for constrained scrolling

## Responsive Breakpoints
- Mobile: default (no prefix)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large: `xl:` (1280px+)
- Extra Large: `2xl:` (1536px+)

## Common Utilities
- `drop-shadow-md`, `drop-shadow-lg`, `drop-shadow-2xl` for text shadows
- `uppercase tracking-widest` for button text
- `leading-relaxed` for body text
- `rounded-sm` for subtle rounded corners (not fully rounded)
- `rounded-full` for pills/circles