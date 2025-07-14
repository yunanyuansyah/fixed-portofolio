'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Fireflies from './Fireflies'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Fireflies Background */}
      <Fireflies />
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-tusker font-normal mx-auto mb-6 sm:mb-8"
            style={{ color: 'rgb(255,238,218)' }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-2xl max-w-4xl mx-auto mb-2"
            style={{ color: 'rgb(255,238,218)' }}
          >
            Passionate developer bridging the gap between electrical engineering and modern web technologies
          </motion.p>
          <div className="w-32 sm:w-48 lg:w-64 h-1 bg-gradient-to-r from-transparent via-[rgb(255,238,218)] to-transparent mx-auto mt-6 sm:mt-8 animate-pulse"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column - My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-5xl font-tusker mb-6" style={{ color: 'rgb(255,238,218)' }}>
              My Journey
            </h3>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'rgb(255,238,218)' }}>
              <p>
                As an Electrical Engineering student at Universitas Negeri Yogyakarta, I've discovered my true passion lies at the intersection of Artificial Intelligence and Hardware & Software Engineering. My journey began with a deep curiosity about how intelligent systems can bridge the gap between the digital and physical worlds.
              </p>
              <p>
                I specialize in developing AI-powered solutions and creating innovative hardware-software integrations that not only solve complex problems but also create meaningful positive impact. My background in electrical engineering gives me a unique perspective on system design, control systems, and automation that I apply to both AI and full-stack development projects.
              </p>
              <p>
                What drives me most is the belief that technology should serve humanity. Whether it's building AI models for computer vision, developing automation systems, or creating full-stack applications, I'm committed to solutions that make a real difference in people's lives and contribute to a better future.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 238, 218, 0.3)",
              transition: { duration: 0.3 }
            }}
            className="rounded-2xl p-8 glass-effect backdrop-blur-md bg-white/10 shadow-lg cursor-pointer transform transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
          >
            <h4 className="text-2xl font-neue font-bold mb-6" style={{ color: 'rgb(255,238,218)' }}>
              Quick Facts
            </h4>
            <ul className="space-y-4 text-lg" style={{ color: 'rgb(255,238,218)' }}>
              <li className="flex items-center gap-3 group">
                <span className="inline-block w-3 h-3 rounded-full bg-[rgb(255,238,218)] mr-2 group-hover:scale-125 transition-transform duration-200" />
                <span className="font-normal group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Electrical Engineering Student</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="inline-block w-3 h-3 rounded-full bg-[rgb(255,238,218)] mr-2 group-hover:scale-125 transition-transform duration-200" />
                <span className="font-normal group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Hardware & Software Engineer</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="inline-block w-3 h-3 rounded-full bg-[rgb(255,238,218)] mr-2 group-hover:scale-125 transition-transform duration-200" />
                <span className="font-normal group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Artificial Intelligence Engineer</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="inline-block w-3 h-3 rounded-full bg-[rgb(255,238,218)] mr-2 group-hover:scale-125 transition-transform duration-200" />
                <span className="font-normal group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Control & Automation Systems Engineer</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Education & Experience Section */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="rounded-2xl"
          >
            <h3 className="text-5xl font-tusker mb-6" style={{ color: 'rgb(255,238,218)' }}>
              Education
            </h3>
            <div className="space-y-4 text-lg " style={{ color: 'rgb(255,238,218)' }}>
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 238, 218, 0.3)",
                  transition: { duration: 0.3 }
                }}
                className="rounded-xl p-8 glass-effect backdrop-blur-md border shadow-lg cursor-pointer transform transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
              >
                <div className="font-bold text-xl mb-1 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Electrical Engineering</div>
                <div className="font-medium mb-1 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Universitas Negeri Yogyakarta</div>
                <div className="mb-2 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">2022 - Present</div>
                <div className="font-medium group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Learning on Control System, Automation Systems and Artificial Intelligence applications.</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="rounded-2xl"
          >
            <h3 className="text-5xl font-tusker mb-6" style={{ color: 'rgb(255,238,218)' }}>
              Experience
            </h3>
            <div className="space-y-4 text-lg" style={{ color: 'rgb(255,238,218)' }}>
              {/* Freelance Web Developer */}
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 238, 218, 0.3)",
                  transition: { duration: 0.3 }
                }}
                className="rounded-xl p-8 glass-effect backdrop-blur-md shadow-lg cursor-pointer transform transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
              >
                <div className="font-bold text-xl mb-1 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Freelance Web Developer</div>
                <div className="font-medium mb-1 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Self-Employed</div>
                <div className="mb-2 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">2023 - Present</div>
                <div className="font-medium group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Building responsive web applications using modern technologies like React, Next.js, and Node.js.</div>
              </motion.div>
              {/* AI Projects */}
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 238, 218, 0.3)",
                  transition: { duration: 0.3 }
                }}
                className="rounded-xl p-8 glass-effect backdrop-blur-md  shadow-lg cursor-pointer transform transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
              >
                <div className="font-bold text-xl mb-1 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Artificial Intelligence Projects</div>
                <div className="font-medium mb-1 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Personal Projects</div>
                <div className="mb-2 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">2022 - Present</div>
                <div className="font-medium group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Developing AI models for computer vision and natural language processing applications.</div>
              </motion.div>
              {/* Hardware & Software Engineer */}
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 238, 218, 0.3)",
                  transition: { duration: 0.3 }
                }}
                className="rounded-xl p-8 glass-effect backdrop-blur-md shadow-lg cursor-pointer transform transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
              >
                <div className="font-bold text-xl mb-1 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Hardware & Software Engineer</div>
                <div className="font-medium mb-1 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Personal Projects</div>
                <div className="mb-2 group-hover:text-[rgb(255,255,255)] transition-colors duration-200">2022 - Present</div>
                <div className="font-medium group-hover:text-[rgb(255,255,255)] transition-colors duration-200">Building hardware and software solutions for various projects.</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* My Values Section */}
        <div className="mt-24">
          <h2 className="text-center text-6xl font-tusker mb-12" style={{ color: 'rgb(255,238,218)' }}>
            My Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Innovation */}
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 238, 218, 0.3)",
                transition: { duration: 0.3 }
              }}
              className="rounded-xl p-8 glass-effect backdrop-blur-md bg-white/10 shadow-lg text-center flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[rgb(255,238,218)] mb-6 group-hover:scale-110 transition-transform duration-200">
                <span className="text-4xl">💡</span>
              </div>
              <div className="font-bold text-2xl mb-2 group-hover:text-[rgb(255,255,255)] transition-colors duration-200" style={{ color: 'rgb(255,238,218)' }}>Innovation</div>
              <div className="text-lg font-medium group-hover:text-[rgb(255,255,255)] transition-colors duration-200" style={{ color: 'rgb(255,238,218)' }}>
                Always exploring new technologies and approaches to solve complex problems creatively.
              </div>
            </motion.div>
            {/* Excellence */}
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 238, 218, 0.3)",
                transition: { duration: 0.3 }
              }}
              className="rounded-xl p-8 glass-effect backdrop-blur-md bg-white/10 shadow-lg text-center flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[rgb(255,238,218)] mb-6 group-hover:scale-110 transition-transform duration-200">
                <span className="text-4xl">🎯</span>
              </div>
              <div className="font-bold text-2xl mb-2 group-hover:text-[rgb(255,255,255)] transition-colors duration-200" style={{ color: 'rgb(255,238,218)' }}>Excellence</div>
              <div className="text-lg font-medium group-hover:text-[rgb(255,255,255)] transition-colors duration-200" style={{ color: 'rgb(255,238,218)' }}>
                Committed to delivering high-quality, well-tested, and maintainable code in every project.
              </div>
            </motion.div>
            {/* Growth */}
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 238, 218, 0.3)",
                transition: { duration: 0.3 }
              }}
              className="rounded-xl p-8 glass-effect backdrop-blur-md bg-white/10 shadow-lg text-center flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[rgb(255,238,218)] mb-6 group-hover:scale-110 transition-transform duration-200">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="font-bold text-2xl mb-2 group-hover:text-[rgb(255,255,255)] transition-colors duration-200" style={{ color: 'rgb(255,238,218)' }}>Growth</div>
              <div className="text-lg font-medium group-hover:text-[rgb(255,255,255)] transition-colors duration-200" style={{ color: 'rgb(255,238,218)' }}>
                Continuously learning and improving skills to stay ahead in the rapidly evolving tech landscape.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 