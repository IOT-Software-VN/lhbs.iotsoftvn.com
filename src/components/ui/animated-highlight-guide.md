# Animated Highlight Usage Guide

This project includes a reusable animated highlight effect that slides in from left to right. You can use it in two ways:

## Method 1: React Component (Recommended)

```tsx
import { AnimatedHighlight } from '../components/ui/animated-highlight';

// Basic usage
<AnimatedHighlight>
  Your highlighted text
</AnimatedHighlight>

// With custom options
<AnimatedHighlight 
  delay={0.6}           // Delay before animation starts (seconds)
  duration={1.2}        // Animation duration (seconds)
  backgroundColor="#FABA1E"  // Background color
  className="text-[#1a5336]" // Additional CSS classes
>
  Lac Hong Bilingual School
</AnimatedHighlight>
```

## Method 2: CSS Classes (For direct HTML/Tailwind usage)

```html
<!-- Basic usage -->
<span class="highlight-container">
  <span class="highlight-bg"></span>
  <span class="highlight-text">Your highlighted text</span>
</span>

<!-- With speed variants -->
<span class="highlight-container">
  <span class="highlight-bg fast"></span> <!-- 0.8s animation, 0.3s delay -->
  <span class="highlight-text">Fast animation</span>
</span>

<span class="highlight-container">
  <span class="highlight-bg slow"></span> <!-- 1.6s animation, 0.9s delay -->
  <span class="highlight-text">Slow animation</span>
</span>
```

## Features

- **Smooth Animation**: Uses CSS keyframes with easing for natural motion
- **Responsive**: Adapts padding for mobile and desktop
- **Customizable**: Control delay, duration, and background color
- **Reusable**: Use across multiple components
- **Performance**: Uses CSS animations for smooth performance

## Animation Details

- **Direction**: Left to right (transform-origin: left)
- **Easing**: Custom cubic-bezier for smooth motion
- **Default**: 1.2s duration with 0.6s delay
- **Responsive**: Different padding on mobile vs desktop

## Examples in Project

1. **Hero Section**: Main title "Lac Hong Bilingual School"
2. **HomePage**: "Solid education" text with custom timing
3. **Any other component**: Import and use the AnimatedHighlight component

The animation automatically triggers when the component mounts and creates a smooth, professional highlight effect.