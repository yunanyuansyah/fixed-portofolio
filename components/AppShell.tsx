'use client'

import { useState } from 'react'
import LoadingScreen from './LoadingScreen'
import Footer from './Footer'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  return (
    <div className="relative min-h-screen flex flex-col">
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          {children}
          <Footer />
        </>
      )}
    </div>
  )
} 