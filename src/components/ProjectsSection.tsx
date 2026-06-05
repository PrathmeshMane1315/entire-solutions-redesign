import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, ArrowRight, FolderOpen } from 'lucide-react'

const categories = ['All', 'Laser Cutting', 'Fabrication', 'Welding', 'CNC']

const projects = [
  { title: 'Aerospace Turbine Housing', category: 'CNC', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=500&fit=crop&q=80', description: 'Titanium alloy turbine housing machined to ±0.005mm tolerance for aerospace.', client: 'AeroTech Industries' },
  { title: 'Automotive Chassis Components', category: 'Fabrication', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=500&fit=crop&q=80', description: 'High-strength aluminum chassis parts for electric vehicle platforms.', client: 'EV Motors Corp' },
  { title: 'Industrial Laser Cut Panels', category: 'Laser Cutting', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=500&fit=crop&q=80', description: 'Decorative stainless steel panels with intricate patterns for architecture.', client: 'BuildRight Architecture' },
  { title: 'Pipeline Welding Project', category: 'Welding', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=80', description: 'TIG welding of 304 stainless steel process pipelines.', client: 'ChemFlow Systems' },
  { title: 'Custom Enclosure Fabrication', category: 'Fabrication', image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=500&fit=crop&q=80', description: 'Precision sheet metal enclosures with powder coating.', client: 'TechShield Electronics' },
  { title: 'Medical Device Components', category: 'CNC', image: 'https://images.unsplash.com/photo-1581092918056-0b4eef618912?w=800&h=500&fit=crop&q=80', description: 'Surgical grade stainless steel components with mirror finish.', client: 'MediCore Devices' },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" ref={sectionRef} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-50/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="section-padding mx-auto max-w-7xl relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-50 border border-cyan-200 mb-5" initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, type: "spring" }} whileHover={{ scale: 1.05 }}>
            <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <FolderOpen className="w-4 h-4 text-cyan-600" />
            </motion.div>
            <span className="text-cyan-700 text-sm font-medium">Portfolio</span>
          </motion.div>
          <motion.h2 className="heading-lg text-slate-900" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-100 text-slate-600 border border-slate-200 hover:border-cyan-300 hover:text-cyan-600'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-cyan-500 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.div style={{ y }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 100 }}
                whileHover={{ y: -12, scale: 1.02, rotateY: 5, transition: { type: "spring", stiffness: 300 } }}
                className="group text-center cursor-pointer"
                style={{ perspective: 1000 }}
              >
                {/* OCTAGON image - the image IS the shape */}
                <div className="relative flex justify-center mb-6">
                  <motion.div
                    className="w-72 h-64 img-octagon overflow-hidden shadow-2xl shadow-slate-200/50"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  >
                    <motion.div
                      className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/40 cursor-pointer"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-7 h-7 text-white" />
                    </motion.div>
                  </motion.div>

                  <motion.div className="absolute top-4 left-1/2 -translate-x-1/2" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-cyan-700 text-xs font-semibold rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </motion.div>
                </div>

                <div className="px-4">
                  <p className="text-xs text-cyan-600 font-semibold mb-2 uppercase tracking-wider">{project.client}</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16">
          <motion.button className="btn-outline inline-flex items-center gap-2" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
            View All Projects
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}