import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { sunnyEvening, tuskerGrotesk, neueMontreal } from './fonts'

export const metadata: Metadata = {
  title: 'My Portfolio - Creative Developer',
  description: 'A futuristic portfolio showcasing creative development, design, and innovation',
  keywords: ['portfolio', 'developer', 'designer', 'creative', 'futuristic', 'next.js'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'My Portfolio - Creative Developer',
    description: 'A futuristic portfolio showcasing creative development, design, and innovation',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Portfolio - Creative Developer',
    description: 'A futuristic portfolio showcasing creative development, design, and innovation',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sunnyEvening.variable} ${tuskerGrotesk.variable} ${neueMontreal.variable} scroll-smooth`}>
      <body className={`${neueMontreal.className} antialiased`}>
        <div className="particles">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#fff',
              border: '1px solid rgba(0, 212, 255, 0.3)',
            },
          }}
        />
      </body>
    </html>
  )
} 