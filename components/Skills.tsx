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
  { name: 'React', icon: Cpu, color: 'text-blue-400' },
  { name: 'TypeScript', icon: Terminal, color: 'text-blue-500' },
  { name: 'Node.js', icon: Server, color: 'text-green-400' },
  { name: 'Python', icon: Monitor, color: 'text-yellow-400' },
  { name: 'Docker', icon: Layers, color: 'text-blue-500' },
  { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
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
            className="text-4xl md:text-5xl font-tusker font-bold mb-6"
          >
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive toolkit of technologies and methodologies I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-xl glass-effect hover:neon-glow transition-all duration-300"
              >
                <tech.icon className={`w-12 h-12 mx-auto mb-3 ${tech.color}`} />
                <div className="text-gray-300 font-medium">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 + categoryIndex * 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.2 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-neon-blue font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 1.4 + categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 1.5,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">
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
                <span className="text-gray-300 font-medium text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 