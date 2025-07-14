'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Code, Palette, Globe } from 'lucide-react'
import Image from 'next/image'
import Fireflies from './Fireflies';

const projects = [
  {
    id: 1,
    title: 'Marketplace Platform',
    description: 'A modern e-commerce platform built EJS, featuring real-time inventory, payment processing, and admin dashboard.',
    image: '/images/projects/ecommerce.png',
    category: 'Web Development',
    technologies: ['EJS', 'Express', 'Tailwind CSS', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Smart Face Recognition Door Lock System',
    description: 'A face recognition door lock system built with Raspberry Pi and a Webcam',
    image: '/images/projects/face-recognition.jpg',
    category: 'Hardware',
    technologies: ['Raspberry Pi', 'Webcam', 'Python', 'OpenCV' ,'Face Recognition', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A futuristic portfolio website with 3D animations, interactive elements, and modern design principles.',
    image: '/images/projects/portfolio.jpg',
    category: 'Design',
    technologies: ['Three.js', 'React', 'Framer Motion', 'GSAP'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'AI Chat Application',
    description: 'An intelligent chat application powered by OpenAI, featuring real-time messaging and AI-powered responses.',
    image: '/images/projects/ai-chat.jpg',
    category: 'AI/ML',
    technologies: ['React', 'Node.js', 'OpenAI API', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
]

const categories = [
  { id: 'all', name: 'All Projects', icon: Globe },
  { id: 'Web Development', name: 'Web Apps', icon: Code },
  { id: 'AI/ML', name: 'AI/ML', icon: Code },
  { id: 'Design', name: 'Design', icon: Palette },
  { id: 'Hardware', name: 'Hardware', icon: Code },
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
      {/* Fireflies Animation */}
      <Fireflies />
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
            className="text-6xl md:text-7xl font-tusker font-normal mx-auto mb-6 sm:mb-8"
            style={{ color: 'rgb(255,238,218)' }}
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'rgb(255,238,218)' }}
          >
            A showcase of my latest work, demonstrating creativity, technical skills, and problem-solving abilities
          </motion.p>
          <div className="w-32 sm:w-48 lg:w-64 h-1 bg-gradient-to-r from-transparent via-[rgb(255,238,218)] to-transparent mx-auto mt-6 sm:mt-8 animate-pulse"></div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
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
              className={`font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-sm text-lg
                ${activeCategory === category.id
                  ? 'bg-[#FFEDDA] text-black'
                  : 'border border-[#FFEDDA] text-[#FFEDDA] bg-transparent hover:bg-[#FFEDDA] hover:text-black'}
              `}
              style={{ fontFamily: 'inherit' }}
            >
              {category.name}
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: '0 0 32px 8px rgba(255,238,218,0.5)' }}
                className="group flex flex-col bg-white/5 rounded-2xl glass-effect border border-white/20 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-[0_0_32px_8px_rgba(255,238,218,0.5)]"
              >
                {/* Project Image + Category Badge */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-custom-cream border border-dark-700 rounded-full text-xs font-bold shadow-md" style={{ color: 'rgb(0,0,0)' }}>
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'rgb(255,238,218)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgb(205,188,168)' }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-[rgb(255,238,218)]/30 text-[rgb(255,238,218)] bg-[rgb(255,238,218)]/10 hover:bg-[rgb(255,238,218)]/20 text-xs rounded-full font-neue transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgb(255,238,218)]/40 group-hover:text-dark-900"
                        style={{ color: 'rgb(255,238,218)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View on GitHub Button */}
                  <div className="mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-dark-800 border-2 border-dark-600 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-dark-700 hover:scale-[1.03] shadow-md"
                      style={{ color: 'rgb(0,0,0)', background: 'rgb(255,238,218)' }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                        </svg>
                        View on GitHub
                      </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats & Call to Action Section */}
        <section className="my-[400px] flex flex-col items-center w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl md:text-7xl font-tusker font-normal text-center mb-12 sm:mb-16" style={{ color: '#FFEDDA' }}>
            Project Statistics
          </h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-20">
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-tusker font-normal" style={{ color: '#FFEDDA' }}>20+</span>
              <span className="mt-4 text-lg md:text-base opacity-80 text-center  " style={{ color: '#FFEDDA' }}>Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-tusker font-normal" style={{ color: '#FFEDDA' }}>15+</span>
              <span className="mt-4 text-lg md:text-base opacity-80 text-center" style={{ color: '#FFEDDA' }}>Technologies Used</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-tusker font-normal" style={{ color: '#FFEDDA' }}>3+</span>
              <span className="mt-4 text-lg md:text-base opacity-80 text-center" style={{ color: '#FFEDDA' }}>Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-tusker font-normal" style={{ color: '#FFEDDA' }}>100%</span>
              <span className="mt-4 text-lg md:text-base opacity-80 text-center" style={{ color: '#FFEDDA' }}>Client Satisfaction</span>
            </div>
          </div>
          <h3 className="text-5xl md:text-6xl font-tusker font-normal text-center mb-8" style={{ color: '#FFEDDA' }}>
            Ready to Start a Project?
          </h3>
          <p className="text-xl md:text-xl text-center mb-10" style={{ color: '#FFEDDA' }}>
            Let's work together to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <a href="#contact" className="inline-block px-10 py-5 rounded-full bg-[#FFEDDA] text-black font-bold text-xl shadow-md transition-all duration-300 hover:bg-white/90">
            Get In Touch
          </a>
        </section>
      </div>
    </section>
  )
} 