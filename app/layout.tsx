import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { sunnyEvening, tuskerGrotesk, neueMontreal } from './fonts'
import Footer from '../components/Footer'
import LoadingScreen from '../components/LoadingScreen'
import { useState, useEffect } from 'react'
import AppShell from '../components/AppShell'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sunnyEvening.variable} ${tuskerGrotesk.variable} ${neueMontreal.variable} font-body bg-dark-900 relative min-h-screen`}>
        <AppShell>
          {children}
        </AppShell>
        <Toaster position="top-right" />
      </body>
    </html>
  )
} 