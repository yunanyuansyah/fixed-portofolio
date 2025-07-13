'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Code, Globe, Users, Zap, Target } from 'lucide-react'

const stats = [
  { icon: Code, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Globe, value: '100%', label: 'Client Satisfaction' },
]

const timeline = [
  {
    year: '2023',
    title: 'Senior Developer',
    company: 'Tech Company',
    description: 'Leading development teams and architecting scalable solutions.',
  },
  {
    year: '2021',
    title: 'Full Stack Developer',
    company: 'Startup',
    description: 'Built and maintained multiple web applications using modern technologies.',
  },
  {
    year: '2019',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Created responsive and interactive user interfaces.',
  },
  {
    year: '2018',
    title: 'Started Journey',
    company: 'Self Taught',
    description: 'Began learning web development and design fundamentals.',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-full blur-3xl" />

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
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A passionate creative developer with a love for innovation and cutting-edge technology
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                I'm a creative developer who thrives on turning complex problems into simple, beautiful, and intuitive solutions. 
                With over 5 years of experience in web development, I've had the privilege of working on diverse projects 
                that have shaped my approach to creating digital experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                My passion lies in pushing the boundaries of what's possible on the web, combining cutting-edge technologies 
                with thoughtful design to create immersive experiences that leave lasting impressions.
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                {[
                  { icon: Zap, text: 'Fast Performance' },
                  { icon: Target, text: 'Goal Oriented' },
                  { icon: Code, text: 'Clean Code' },
                  { icon: Users, text: 'Team Player' },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg glass-effect"
                  >
                    <feature.icon className="w-5 h-5 text-neon-blue" />
                    <span className="text-gray-300 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center p-6 rounded-xl glass-effect hover:neon-glow transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-neon-blue mx-auto mb-3" />
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold gradient-text mb-6">Experience Timeline</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.8 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg glass-effect hover:neon-glow transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-neon-blue font-medium mb-2">{item.company}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 