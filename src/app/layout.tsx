import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Code74 | Enterprise Technology Solutions',
  description:
    'Premium software development, ERP systems, and digital transformation services for businesses worldwide.',
  keywords: [
    'enterprise software',
    'ERP solutions',
    'web development',
    'mobile apps',
    'business automation',
    'digital transformation',
  ],

  icons: {
    icon: [
      { url: './final74.png', sizes: '32x32', type: 'image/png' },
      { url: './final74.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: './final74.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'icon',
        url: './final74.png',
        sizes: '512x512',
      },
    ],
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Code74 | Enterprise Technology Solutions',
    description: 'Transform your business with premium software solutions.',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Code74 Logo',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
