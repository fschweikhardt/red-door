import type { Metadata, Viewport } from 'next'
import { Archivo_Black, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const archivoBlack = Archivo_Black({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-sans'
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: 'CRAFT STUDIO | Local Excellence',
  description: 'Premium craftsmanship and creative services for your business',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${archivoBlack.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
