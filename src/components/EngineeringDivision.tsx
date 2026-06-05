import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'

const divisions = [
  { title: 'Laser Cutting', description: 'High-precision fiber laser systems achieving micron-level accuracy for complex sheet metal geometries.', image: 'https://images.unsplash.com/photo-1581092918056-0b4eef618912?w=600&h=400&fit=crop&q=80' },
  { title: 'CNC Bending', description: 'Automated multi-axis CNC bending cells ensuring consistent angles and structural integrity for high-volume production.', image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop&q=80' },
  { title: 'Profile Cutting', description: 'Advanced plasma and oxy-fuel profile cutting for heavy-duty structural components used in demanding industrial environments.', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop&q=80' },
  { title: 'Welding Systems', description: 'Certified MIG/TIG welding operations focusing on structural strength, seamless finishes, and rigorous quality standards.', image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop&q=80' },
  { title: 'Drilling & Tap', description: 'Precision-engineered hole patterns, tapping, and countersinking services for specialized mechanical assemblies.', image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop&q=80' },
  { title: 'Painting Unit', description: 'In-house industrial coating facility providing electrostatic powder coating and high-durability finishes for all climates.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&q=80' },
]

export default function EngineeringDivision() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-50/40 rounded-full blur-3xl" />
      </div>

      <div className="section-padding mx-auto max-w-7xl relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-20">
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-50 border border-cyan-200 mb-5" initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, type: "spring" }} whileHover={{ scale: 1.05 }}>
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Zap className="w-4 h-4 text-cyan-600" />
            </motion.div>
            <span className="text-cyan-700 text-sm font-medium">Engineering Division</span>
          </motion.div>
          <motion.h2 className="heading-lg text-slate-900" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
            Our <span className="text-gradient">Capabilities</span>
          </motion.h2>
        </motion.div>

        <motion.div style={{ y }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, y: 60 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 120, damping: 12 }}
              whileHover={{ y: -15, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-2xl hover:shadow-cyan-100/20 hover:border-cyan-200 transition-colors cursor-pointer"
            >
              {/* HEXAGON image container */}
              <div className="relative h-56 overflow-hidden flex items-center justify-center bg-slate-100">
                <motion.div
                  className="w-64 h-56 shape-hexagon overflow-hidden"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isVisible ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                >
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-cyan-700 text-sm font-semibold rounded-full shadow-lg">
                    {item.title}
                  </span>
                </motion.div>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
                <motion.div
                  className="mt-4 flex items-center gap-2 text-cyan-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Learn more <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}><ArrowRight className="w-4 h-4" /></motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}