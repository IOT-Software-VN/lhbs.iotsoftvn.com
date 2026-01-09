# LHBS Design System Rules

## 🎨 Color Palette (CMYK Based)

### Màu Chính (Primary - 40% each)

- **Primary Green**: `#1a9900` (C90 M40 Y100 K0) - Màu xanh chủ đạo
- **White**: `#ffffff` (C0 M0 Y0 K0) - Nền trắng, text on dark

### Màu Hỗ Trợ (Support - 5% each)

- **Dark Green**: `#006b00` (C100 M40 Y100 K30) - Shadows, accents
- **Gold**: `#e6a100` (C0 M30 Y100 K10) - Highlights, CTAs
- **Bright Green**: `#00ff00` (C100 M0 Y100 K0) - Neon accents

### Màu Nhấn (Accent - 5%)

- **Orange Gold**: `#ffb300` (C0 M30 Y100 K0) - Buttons, links
- **Gray**: `#999999` (C0 M0 Y0 K40) - Text muted, borders

## 📐 Usage Ratios

```
5%  Primary Green     (#1a9900)  - Headers, key elements
40% White             (#ffffff)  - Backgrounds, large areas
5%  Dark Green        (#006b00)  - Shadows, depth
5%  Gold              (#e6a100)  - Important CTAs
40% Bright Green      (#00ff00)  - Featured sections (use sparingly)
5%  Orange Gold       (#ffb300)  - Hover states, accents
```

## 🎯 Application Rules

### Primary Usage (80%)

- **Backgrounds**: White (#ffffff) dominates
- **Main UI**: Primary Green (#1a9900) for nav, footer, key sections
- **Text**: Dark text on white, white on green

### Support & Accent (20%)

- **CTAs**: Orange Gold (#ffb300) for buttons, Gold (#e6a100) for important actions
- **Depth**: Dark Green (#006b00) for shadows, overlays
- **Highlights**: Bright Green (#00ff00) for special features (use cautiously - very bright)
- **Muted**: Gray (#999999) for secondary text, disabled states

## 🔤 Typography

- **Font Family**: SVN Gotham (custom)
- **Weights**: 300 (Light), 400 (Regular), 500 (Book), 700 (Bold), 900 (Black)
- **Line Height**: 1.5-1.75 for body, 1.2 for headings

### Title Pattern (3-Part Structure)

```tsx
{
  /* 1. Line Accent - position: start/center/end */
}
;<div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />

{
  /* 2. Subtitle */
}
;<p className='text-brand-gold text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.2em] mb-2'>
  Subtitle text
</p>

{
  /* 3. Title - color based on background */
}
;<h2
  className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black uppercase tracking-tight drop-shadow-2xl
  text-white {/* on green bg */} 
  text-brand-green {/* on white bg */}'
>
  Main Title
</h2>
```

**Rules:**

- **Line**: Always `brand-gold`, responsive size, glow shadow
- **Subtitle**: Always `brand-gold`, uppercase, wide tracking
- **Title**: `white` on green bg, `brand-green` on white bg

## 📏 Spacing & Layout

- **Base Unit**: 4px (0.25rem)
- **Container**: max-width 1920px, padding 4-24px responsive
- **Gaps**: 12px (gap-3), 24px (gap-6), 48px (gap-12)

## 🎭 Component Patterns

- **Buttons**: Rounded-full, hover scale-105
- **Cards**: Rounded-lg, shadow-lg on hover
- **Transitions**: duration-300 ease-out
- **Images**: object-contain for logos, object-cover for photos

## ⚡ Performance

- Use Next.js Image optimization
- Lazy load below-fold content
- Minimize animation to 60fps

---

_Khi code, luôn ưu tiên 2 màu chính (Green + White) chiếm 80%, dùng màu hỗ trợ/nhấn tiết kiệm (20%) để tạo điểm nhấn._
