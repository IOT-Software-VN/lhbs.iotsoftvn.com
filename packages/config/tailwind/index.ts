import type { Config } from 'tailwindcss'

export const baseConfig: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        'brand-green': '#1e5338',
        'brand-gold': '#faba1e',
        'brand-green-dark': '#00602f'
      },
      fontFamily: {
        sans: ['var(--font-svn-gotham)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  }
}

export default baseConfig
