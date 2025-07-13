'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Code, Palette, Globe } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory, payment processing, and admin dashboard.',
    image: '/images/projects/ecommerce.jpg', // Ganti dengan foto project Anda
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'An intelligent chat application powered by OpenAI, featuring real-time messaging and AI-powered responses.',
    image: '/images/projects/ai-chat.jpg', // Ganti dengan foto project Anda
    category: 'ai',
    technologies: ['React', 'Node.js', 'OpenAI API', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A futuristic portfolio website with 3D animations, interactive elements, and modern design principles.',
    image: '/images/projects/portfolio.jpg', // Ganti dengan foto project Anda
    category: 'design',
    technologies: ['Three.js', 'React', 'Framer Motion', 'GSAP'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
    image: '/images/projects/task-manager.jpg', // Ganti dengan foto project Anda
    category: 'web',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Vuetify'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with real-time data, interactive maps, and detailed forecasts.',
    image: '/images/projects/weather.jpg', // Ganti dengan foto project Anda
    category: 'web',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'NFT Marketplace',
    description: 'A decentralized NFT marketplace built on Ethereum, featuring minting, trading, and wallet integration.',
    image: '/images/projects/nft-marketplace.jpg', // Ganti dengan foto project Anda
    category: 'blockchain',
    technologies: ['Solidity', 'React', 'Web3.js', 'IPFS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

const categories = [
  { id: 'all', name: 'All Projects', icon: Globe },
  { id: 'web', name: 'Web Apps', icon: Code },
  { id: 'ai', name: 'AI/ML', icon: Palette },
  { id: 'design', name: 'Design', icon: Palette },
  { id: 'blockchain', name: 'Blockchain', icon: Code },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-full blur-3xl" />

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
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my latest work, demonstrating creativity, technical skills, and problem-solving abilities
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  : 'glass-effect text-gray-300 hover:text-neon-blue hover:neon-glow'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl glass-effect hover:neon-glow transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-xs font-bold text-white">
                      Featured
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full glass-effect hover:neon-glow transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-neon-blue" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full glass-effect hover:neon-glow transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-neon-blue" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-700 text-neon-blue text-xs rounded-full font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-1 text-neon-blue hover:text-white transition-colors duration-300 text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-1 text-neon-blue hover:text-white transition-colors duration-300 text-sm"
                      >
                        <Code className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-neon-blue text-neon-blue font-semibold rounded-full hover:bg-neon-blue hover:text-white transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 