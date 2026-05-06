import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const luxuryFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-luxury',
})

const modernFont = Inter({
  subsets: ['latin'],
  variable: '--font-modern',
})

export const metadata: Metadata = {
  title: 'MIP - Luxury Perfume Brand',
  description: 'Experience the world\'s most powerful luxury perfume. MIP: Elegance, Passion, Perfection.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'MIP - Luxury Perfume Brand',
    description: 'Experience the world\'s most powerful luxury perfume.',
    url: 'https://miperfume.com',
    siteName: 'MIP',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${luxuryFont.variable} ${modernFont.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="bg-mip-dark text-mip-cream font-modern">
        {children}
      </body>
    </html>
  )
}
