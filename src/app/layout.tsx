import type { Metadata } from 'next'
import { Inter, Figtree } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
})

export const metadata: Metadata = {
  title: 'Alpharithm Investments',
  description: 'Leverage the power of AI to automate, analyze, and optimize your workflows.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${figtree.variable}`}>
      <body suppressHydrationWarning={true} className={figtree.className}>
        {children}
      </body>
    </html>
  )
}
