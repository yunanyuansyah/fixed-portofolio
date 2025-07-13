'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Briefcase, Heart, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-6 mt-24" style={{ backgroundColor: '#000' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container-custom"
      >
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-10">
          {/* Profile */}
          <div>
            <div className="text-2xl font-sunny font-bold mb-3" style={{ color: 'rgb(255,238,218)' }}>
              YUNAN YUANSYAH
            </div>
            <div className="font-medium mb-2" style={{ color: 'rgb(255,238,218)' }}>
              Full-Stack Web Developer & Machine Learning Enthusiast
            </div>
            <div className="text-sm opacity-80" style={{ color: 'rgb(255,238,218)' }}>
              Bridging the gap between electrical engineering and modern web technologies
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <div className="text-xl font-bold mb-3" style={{ color: 'rgb(255,238,218)' }}>
              Quick Links
            </div>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline" style={{ color: 'rgb(255,238,218)' }}>Home</a></li>
              <li><a href="#about" className="hover:underline" style={{ color: 'rgb(255,238,218)' }}>About</a></li>
              <li><a href="#projects" className="hover:underline" style={{ color: 'rgb(255,238,218)' }}>Projects</a></li>
              <li><a href="#contact" className="hover:underline" style={{ color: 'rgb(255,238,218)' }}>Contact</a></li>
            </ul>
          </div>
          {/* Connect */}
          <div>
            <div className="text-xl font-bold mb-3" style={{ color: 'rgb(255,238,218)' }}>
              Connect
            </div>
            <div className="flex space-x-4 mb-2">
              <a href="mailto:hello@yourname.com" className="p-3 rounded-full" style={{ backgroundColor: 'rgb(255,238,218)' }}><Mail className="w-6 h-6" style={{ color: '#0f172a' }} /></a>
              <a href="#" className="p-3 rounded-full" style={{ backgroundColor: 'rgb(255,238,218)' }}><Briefcase className="w-6 h-6" style={{ color: '#0f172a' }} /></a>
              <a href="#" className="p-3 rounded-full" style={{ backgroundColor: 'rgb(255,238,218)' }}><Heart className="w-6 h-6" style={{ color: '#0f172a' }} /></a>
              <a href="#" className="p-3 rounded-full" style={{ backgroundColor: 'rgb(255,238,218)' }}><Globe className="w-6 h-6" style={{ color: '#0f172a' }} /></a>
            </div>
            <div className="text-sm opacity-80" style={{ color: 'rgb(255,238,218)' }}>
              Available for freelance opportunities
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-white/20 my-6" />
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: 'rgb(255,238,218)' }}>
          <div>&copy; {new Date().getFullYear()} Yunan Yuansyah. All rights reserved.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
} 