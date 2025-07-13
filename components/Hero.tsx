'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ChevronDown, Download, Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const { clientX, clientY } = e
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()
      
      const x = (clientX - left) / width
      const y = (clientY - top) / height
      
      containerRef.current.style.setProperty('--mouse-x', `${x}`)
      containerRef.current.style.setProperty('--mouse-y', `${y}`)
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated Background - Transparent */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* Floating Elements - Fireflies */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
              scale: [0.5, 1.2, 0.8, 0.5],
              opacity: [0.3, 0.8, 0.4, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1],
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
              backgroundColor: `hsl(${45 + Math.random() * 30}, 100%, ${70 + Math.random() * 20}%)`,
              boxShadow: `0 0 ${6 + Math.random() * 8}px hsl(${45 + Math.random() * 30}, 100%, ${70 + Math.random() * 20}%)`,
            }}
          />
        ))}
      </div>

      {/* Main Content - Centered (Empty for now) */}
      <div ref={containerRef} className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image - Uncomment jika Anda ingin menambahkan foto profil */}
          {/* 
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-8"
          >
            <Image 
              src="/images/profile/avatar.jpg" 
              alt="Your Name" 
              width={200} 
              height={200} 
              className="rounded-full border-4 border-neon-blue mx-auto shadow-2xl"
              priority
            />
          </motion.div>
          */}
        </motion.div>
      </div>

      {/* Bottom Left Content - Greeting, Name, Subtitle, and Social Links */}
      <div className="absolute bottom-8 left-8 z-20 max-w-md">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >


          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-8xl md:text-9xl lg:text-[10rem] font-tusker font-normal transition-all duration-300"
            style={{ color: 'rgb(255,238,218)' }}
            // Tambahkan animasi glow acak
            whileHover={{}}
          >
            <motion.span
              initial={{ textShadow: '0 0 30px rgba(255,238,218,0.7), 0 0 60px rgba(255,238,218,0.3)' }}
              animate={{
                textShadow: [
                  '0 0 30px rgba(255,238,218,0.7), 0 0 60px rgba(255,238,218,0.3)',
                  '0 0 60px rgba(255,238,218,1), 0 0 120px rgba(255,238,218,0.7)',
                  '0 0 20px rgba(255,238,218,0.4), 0 0 40px rgba(255,238,218,0.2)',
                  '0 0 50px rgba(255,238,218,0.9), 0 0 100px rgba(255,238,218,0.5)',
                  '0 0 30px rgba(255,238,218,0.7), 0 0 60px rgba(255,238,218,0.3)'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + Math.random() * 2,
                repeatType: 'mirror',
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1]
              }}
            >
              HELLO ! , I'M A <br />
              SOFTWARE & AI
            </motion.span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-8xl md:text-9xl lg:text-[10rem] font-tusker font-normal mb-10 transition-all duration-300"
            style={{ color: 'rgb(255,238,218)' }}
          >
            <motion.span
              initial={{ textShadow: '0 0 30px rgba(255,238,218,0.7), 0 0 60px rgba(255,238,218,0.3)' }}
              animate={{
                textShadow: [
                  '0 0 30px rgba(255,238,218,0.7), 0 0 60px rgba(255,238,218,0.3)',
                  '0 0 60px rgba(255,238,218,1), 0 0 120px rgba(255,238,218,0.7)',
                  '0 0 20px rgba(255,238,218,0.4), 0 0 40px rgba(255,238,218,0.2)',
                  '0 0 50px rgba(255,238,218,0.9), 0 0 100px rgba(255,238,218,0.5)',
                  '0 0 30px rgba(255,238,218,0.7), 0 0 60px rgba(255,238,218,0.3)'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + Math.random() * 2,
                repeatType: 'mirror',
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1]
              }}
            >
              <TypeAnimation
                sequence={['ENGINEER', 2000, 'DEVELOPER', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: 'rgb(255,238,218)' }}
              />
            </motion.span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center space-x-4"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'rgb(255,238,218)',
                  boxShadow: '0 0 0 rgba(255, 238, 218, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 238, 218, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 238, 218, 0)';
                }}
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8" style={{ color: '#0f172a' }} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Right Content - Description and CTA Buttons */}
      <div className="absolute bottom-8 right-8 z-20 max-w-3xl w-96 md:w-auto">
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed text-right transition-all duration-300"
          style={{ color: 'rgb(255,238,218)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.textShadow = '0 0 20px rgba(255, 238, 218, 0.8)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textShadow = 'none';
          }}
        >
          PASSIONATE SOFTWARE & AI ENGINEER SPECIALIZING IN MACHINE LEARNING AND DEEP LEARNING, FOCUSED ON CREATING EFFICIENT, IMPACTFUL AI SOLUTIONS. I AM ALSO DEEPLY INTERESTED IN IOT, EXPLORING HOW INTERCONNECTED DEVICES CAN ENHANCE THE WAY WE LIVE AND WORK
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-end justify-end gap-5"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 text-lg font-semibold rounded-full flex items-center space-x-3 transition-all duration-300"
            style={{
              backgroundColor: 'rgb(255,238,218)',
              color: '#0f172a'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 238, 218, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Download className="w-6 h-6" />
            <span>DOWNLOAD CV</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-10 py-5 border-2 text-lg font-semibold rounded-full transition-all duration-300 flex items-center space-x-3"
            style={{
              borderColor: 'rgb(255,238,218)',
              color: 'rgb(255,238,218)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(255,238,218)';
              e.currentTarget.style.color = '#0f172a';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 238, 218, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'rgb(255,238,218)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>CONTACT ME</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.button
          onClick={scrollToContact}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 rounded-full glass-effect hover:neon-glow transition-all duration-300 border border-rgb(255,238,218)/30"
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <ChevronDown className="w-7 h-7" style={{ color: 'rgb(255,238,218)' }} />
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-full blur-3xl" />
    </section>
  )
} 