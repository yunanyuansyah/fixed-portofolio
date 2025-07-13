'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react'
import toast from 'react-hot-toast'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@yourname.com',
    href: 'mailto:hello@yourname.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
]

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 4L20 20M20 4L4 20" />
      </svg>
    ), href: '#', label: 'X' },
  { icon: MessageSquare, href: '#', label: 'Discord' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Show success message
    toast.success('Message sent successfully! I\'ll get back to you soon.')
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-tusker font-bold mb-6"
          >
            <span className="gradient-text">Get In Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'rgb(255,238,218)' }}
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="p-8 rounded-2xl glass-effect">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <label htmlFor="name" className="block font-medium mb-2" style={{ color: 'rgb(255,238,218)' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                      style={{ color: 'rgb(255,238,218)' }}
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 }}
                  >
                    <label htmlFor="email" className="block font-medium mb-2" style={{ color: 'rgb(255,238,218)' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                      style={{ color: 'rgb(255,238,218)' }}
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                >
                  <label htmlFor="subject" className="block font-medium mb-2" style={{ color: 'rgb(255,238,218)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                    style={{ color: 'rgb(255,238,218)' }}
                    placeholder="Project inquiry"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 }}
                >
                  <label htmlFor="message" className="block font-medium mb-2" style={{ color: 'rgb(255,238,218)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 resize-none"
                    style={{ color: 'rgb(255,238,218)' }}
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 }}
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple font-semibold rounded-lg hover:neon-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  style={{ color: 'rgb(255,238,218)' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg glass-effect hover:neon-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6" style={{ color: 'rgb(255,238,218)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: 'rgb(255,238,218)' }}>{info.title}</h4>
                    <p style={{ color: 'rgb(255,238,218)' }}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Follow Me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 p-4 rounded-lg transition-all duration-300"
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
                  >
                    <social.icon className="w-6 h-6" style={{ color: '#0f172a' }} />
                    <span className="font-medium" style={{ color: '#0f172a' }}>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.8 }}
              className="p-6 rounded-xl glass-effect"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Available for new projects</span>
              </div>
              <p className="text-sm" style={{ color: 'rgb(255,238,218)' }}>
                I'm currently accepting new projects and collaborations. 
                Let's discuss how we can work together to bring your vision to life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 