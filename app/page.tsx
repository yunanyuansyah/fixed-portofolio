'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Cursor from '@/components/Cursor'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate brightness and saturation based on scroll position
  const maxScroll = 1000 // Adjust this value to control when the effect reaches maximum
  const scrollProgress = Math.min(scrollY / maxScroll, 1)
  
  // Brightness: start at 100%, go down to 40% (not black)
  const brightness = 100 - (scrollProgress * 60)
  // Saturation: start at 100%, go down to 30%
  const saturation = 100 - (scrollProgress * 70)

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background with scroll effect */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url("/images/bg-third.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: `brightness(${brightness}%) saturate(${saturation}%)`,
          transition: 'filter 0.1s ease-out'
        }}
      />
      <Cursor />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
} 