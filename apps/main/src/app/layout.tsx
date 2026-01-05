import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../lib/polyfills'
import './globals.css'
import { MainLayout } from '@lhbs/ui'

const svnGotham = localFont({
  src: [
    { path: '../fonts/SVN-Gotham Light.otf', weight: '300', style: 'normal' },
    { path: '../fonts/SVN-Gotham Light Italic.otf', weight: '300', style: 'italic' },
    { path: '../fonts/SVN-Gotham Regular.otf', weight: '400', style: 'normal' },
    { path: '../fonts/SVN-Gotham Italic.otf', weight: '400', style: 'italic' },
    { path: '../fonts/SVN-Gotham Book.otf', weight: '500', style: 'normal' },
    { path: '../fonts/SVN-Gotham Book Italic.otf', weight: '500', style: 'italic' },
    { path: '../fonts/SVN-Gotham Bold.otf', weight: '700', style: 'normal' },
    { path: '../fonts/SVN-Gotham Bold Italic.otf', weight: '700', style: 'italic' },
    { path: '../fonts/SVN-Gotham Black.otf', weight: '900', style: 'normal' },
    { path: '../fonts/SVN-Gotham Black Italic.otf', weight: '900', style: 'italic' }
  ],
  variable: '--font-svn-gotham',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'LHBS - Trường Song Ngữ Lạc Hồng',
    template: '%s | LHBS'
  },
  description: 'Trường Song Ngữ Lạc Hồng - LHBS',
  icons: {
    icon: [
      { url: 'https://lhbs.edu.vn/wp-content/uploads/2021/05/cropped-ky-niem-10-nam-lhbs-32x32.png', sizes: '32x32' },
      {
        url: 'https://lhbs.edu.vn/wp-content/uploads/2021/05/cropped-ky-niem-10-nam-lhbs-192x192.png',
        sizes: '192x192'
      }
    ],
    apple: 'https://lhbs.edu.vn/wp-content/uploads/2021/05/cropped-ky-niem-10-nam-lhbs-180x180.png'
  },
  openGraph: {
    images: ['https://lhbs.edu.vn/wp-content/uploads/2023/10/BL8Q7643-600x400.jpg'],
    siteName: 'Trường song ngữ Lạc Hồng'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='vi' className={`scroll-smooth snap-y snap-mandatory ${svnGotham.variable}`}>
      <body className='font-sans antialiased'>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
