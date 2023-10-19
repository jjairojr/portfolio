import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/header'
import { ActiveSectionProvider } from './hooks/useActiveSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jairas | Portfolio',
  description: 'Developer Portfolio of Jairas',
  openGraph: {
    type: 'website',
    url: 'https://jairas.dev',
    title: 'Jairas | Portfolio',
    description: 'Developer Portfolio of Jairas',
    images: '/public/og.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 `}>
        <ActiveSectionProvider>
          <Header />
          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  )
}
