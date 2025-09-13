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
    value: 'yunanyuansyah@gmail.com',
    href: 'mailto:yunanyuansyah@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+62 857-4099-2957',
    href: 'tel:+6285740992957',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Yogyakarta, Indonesia',
    href: '#',
  },
]

const socialLinks = [
  { icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10" {...props}>
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/>
      </svg>
    ), href: 'https://github.com/yunanyuansyah', label: 'GitHub' },
  { icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" {...props}>
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.25h-3v-5.5c0-1.378-.028-3.152-1.922-3.152-1.922 0-2.218 1.5-2.218 3.045v5.607h-3v-10h2.885v1.367h.041c.402-.762 1.384-1.563 2.848-1.563 3.045 0 3.607 2.005 3.607 4.614v5.582z"/>
      </svg>
    ), href: '#', label: 'LinkedIn' },
  { icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ), href: '#', label: 'X' },
  { icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" {...props}>
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    ), href: 'https://www.instagram.com/berayunn/', label: 'Instagram' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xovlapey', {
        method: 'POST',
        body: formDataToSend,
        headers: { 'Accept': 'application/json' },
      });
      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (err) {
      toast.error('Failed to send message. Please try again.');
    }
    setIsSubmitting(false);
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
            className="text-6xl md:text-7xl lg:text-8xl font-tusker font-normal mx-auto mb-6 sm:mb-8"
            style={{ color: 'rgb(255,238,218)' }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-2xl max-w-4xl mx-auto mb-2"
            style={{ color: 'rgb(255,238,218)' }}
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together
          </motion.p>
          <div className="w-32 sm:w-48 lg:w-64 h-1 bg-gradient-to-r from-transparent via-[rgb(255,238,218)] to-transparent mx-auto mt-6 sm:mt-8 animate-pulse"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'rgb(255,238,218)' }}>
                Contact Information
              </h3>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-[rgb(255,238,218)] flex items-center justify-center">
                      <info.icon className="w-7 h-7" style={{ color: '#22223b' }} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-base" style={{ color: 'rgb(255,238,218)' }}>{info.title}</span>
                      <span className="text-base" style={{ color: 'rgb(255,238,218)' }}>{info.value}</span>
                    </div>
                  </motion.a>
                ))}
                {/* Availability (hardcoded, not in contactInfo) */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-transparent flex items-center justify-center">
                    {/* Availability icon (use MessageSquare or custom) */}
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-base text-green-400" >Availability</span>
                    <span className="text-base" style={{ color: 'rgb(255,238,218)' }}>I'm currently accepting new projects and collaborations. 
                    Let's discuss how we can work together to bring your vision to life.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold  mb-6">
                Follow Me
              </h3>
              <div className="flex flex-row gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-[rgb(255,238,218)] flex items-center justify-center transition-all duration-300"
                  >
                    <social.icon className="w-8 h-8" style={{ color: '#0f172a' }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px 8px rgba(255,238,218,0.4)' }}
          >
            <div className="p-8 rounded-2xl glass-effect border border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_8px_rgba(255,238,218,0.4)]">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'rgb(255,238,218)' }}>
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <label htmlFor="firstName" className="block font-medium mb-2" style={{ color: 'rgb(255,238,218)' }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[rgb(255,238,218)] focus:ring-2 focus:ring-[rgb(255,238,218)]/30 transition-all duration-300 text-[rgb(255,238,218)]"
                      placeholder="Your first name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 }}
                  >
                    <label htmlFor="lastName" className="block font-medium mb-2" style={{ color: 'rgb(255,238,218)' }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[rgb(255,238,218)] focus:ring-2 focus:ring-[rgb(255,238,218)]/30 transition-all duration-300 text-[rgb(255,238,218)]"
                      placeholder="Your last name"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
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
                    className="w-full px-4 py-3 bg-black/40 border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[rgb(255,238,218)] focus:ring-2 focus:ring-[rgb(255,238,218)]/30 transition-all duration-300 text-[rgb(255,238,218)]"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 }}
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
                    className="w-full px-4 py-3 bg-black/40 border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[rgb(255,238,218)] focus:ring-2 focus:ring-[rgb(255,238,218)]/30 transition-all duration-300 text-[rgb(255,238,218)]"
                    placeholder="What's this about?"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 }}
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
                    className="w-full px-4 py-3 bg-black/40 border border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[rgb(255,238,218)] focus:ring-2 focus:ring-[rgb(255,238,218)]/30 transition-all duration-300 text-[rgb(255,238,218)] resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.3 }}
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-[rgb(255,238,218)] text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_24px_8px_rgba(255,238,218,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
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
        </div>
      </div>
    </section>
  )
} 