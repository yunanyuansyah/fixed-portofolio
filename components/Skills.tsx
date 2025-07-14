'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Server,
  Cloud,
  Terminal,
  Monitor,
  Layers
} from 'lucide-react'
import Fireflies from './Fireflies';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React/Next.js', level: 95, color: 'from-blue-400 to-cyan-400' },
      { name: 'TypeScript', level: 90, color: 'from-blue-500 to-blue-600' },
      { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-blue-500' },
      { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-500' },
    ]
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 88, color: 'from-green-400 to-green-600' },
      { name: 'Python', level: 85, color: 'from-yellow-400 to-orange-500' },
      { name: 'PostgreSQL', level: 82, color: 'from-blue-400 to-indigo-600' },
      { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700' },
    ]
  },
  {
    title: 'Design & UX',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 90, color: 'from-purple-400 to-pink-500' },
      { name: 'Adobe XD', level: 85, color: 'from-pink-400 to-purple-500' },
      { name: 'UI/UX Design', level: 88, color: 'from-indigo-400 to-purple-500' },
      { name: 'Prototyping', level: 85, color: 'from-violet-400 to-purple-500' },
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: Zap,
    skills: [
      { name: 'Docker', level: 85, color: 'from-blue-500 to-blue-700' },
      { name: 'AWS', level: 80, color: 'from-orange-400 to-yellow-500' },
      { name: 'Git/GitHub', level: 92, color: 'from-gray-600 to-gray-800' },
      { name: 'CI/CD', level: 78, color: 'from-green-400 to-blue-500' },
    ]
  }
]

const techStack = [
  { name: 'Python', icon: Monitor, color: 'from-yellow-400 to-orange-500', description: 'General purpose', tags: ['Python', 'Flask', 'Django', 'Scripting'] },
  { name: 'TypeScript', icon: Terminal, color: 'from-blue-500 to-blue-600', description: 'Typed JavaScript', tags: ['TypeScript', 'TSX', 'Types', 'Generics'] },
  { name: 'C/C++', icon: Layers, color: 'from-blue-500 to-blue-700', description: 'Programming language', tags: ['C', 'C++', 'Embedded Systems', 'Arduino', 'Raspberry Pi'] },
  { name: 'Kotlin', icon: Layers, color: 'from-blue-500 to-blue-700', description: 'Programming language', tags: ['Kotlin', 'Android', 'Kotlin Multiplatform', 'Kotlin Native'] },
  { name: 'TensorFlow', icon: Layers, color: 'from-blue-500 to-blue-700', description: 'Machine learning framework', tags: ['TensorFlow', 'Keras', 'PyTorch', 'ML', 'AI'] },
  { name: 'Node.js', icon: Server, color: 'from-green-400 to-green-600', description: 'Backend development', tags: ['Node.js', 'Express', 'NPM', 'REST API'] },
  { name: 'Docker', icon: Layers, color: 'from-blue-500 to-blue-700', description: 'Containerization', tags: ['Docker', 'Compose', 'Images', 'CI/CD'] },
  { name: 'AWS', icon: Cloud, color: 'from-orange-400 to-yellow-500', description: 'Cloud platform', tags: ['AWS', 'EC2', 'S3', 'Lambda'] },
  { name: 'Database', icon: Database, color: 'from-blue-400 to-indigo-600', description: 'Database management', tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL'] },
  { name: 'Arduino & Raspberry', icon: Layers, color: 'from-blue-500 to-blue-700', description: 'Hardware development', tags: ['Arduino', 'ESP32', 'ESP8266', 'Raspberry Pi', 'Microcontrollers'] },
  { name: 'UI/UX Design', icon: Layers, color: 'from-blue-500 to-blue-700', description: 'UI/UX Design', tags: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping'] },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Fireflies Animation */}
      <Fireflies />
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl" />

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
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'rgb(255,238,218)' }}
          >
            A comprehensive toolkit of technologies and methodologies I use to bring ideas to life
          </motion.p>
          <div className="w-32 sm:w-48 lg:w-64 h-1 bg-gradient-to-r from-transparent via-[rgb(255,238,218)] to-transparent mx-auto mt-6 sm:mt-8 animate-pulse"></div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold font-neue text-[rgb(255,238,218)] text-center mb-8">
            Tech Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.15, delay: 0 }}
                whileHover={{ scale: 1.02, y: -2, boxShadow: '0 8px 32px rgba(0,0,0,0.35), 0 0 20px 0 rgba(255,238,218,0.7)', transition: { duration: 0.15, delay: 0 } }}
                className="flex flex-col items-start p-4 rounded-2xl border border-white/20 glass-effect backdrop-blur-md shadow-lg relative min-h-[180px] max-w-sm w-full mx-auto"
              >
                <div className="flex items-center mb-4 w-full">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center mr-4 shadow-md`}>
                    <tech.icon className="w-7 h-7" style={{ color: '#fff' }} />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-white leading-tight">{tech.name}</div>
                    <div className="text-base text-gray-300 opacity-80 -mt-1">{tech.description}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  {tech.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 rounded-full border border-[rgb(255,238,218)]/30 text-sm text-[rgb(255,238,218)] bg-[rgb(255,238,218)]/10 hover:bg-[rgb(255,238,218)]/20 transition-all duration-300 backdrop-blur-sm shadow-sm"
                      style={{ fontWeight: 500 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold font-neue text-[rgb(255,238,218)] text-center mb-8">
            Additional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Responsive Design',
              'Performance Optimization',
              'SEO Best Practices',
              'Accessibility (WCAG)',
              'Cross-browser Testing',
              'API Integration',
              'State Management',
              'Testing & Debugging',
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2 + index * 0.05 }}
                className="p-4 rounded-lg glass-effect text-center hover:neon-glow transition-all duration-300"
              >
                <span className="font-medium text-sm" style={{ color: 'rgb(255,238,218)' }}>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 