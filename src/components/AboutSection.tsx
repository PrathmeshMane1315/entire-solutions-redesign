import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Target, Lightbulb, Heart, Zap, TrendingUp, Shield, Award } from 'lucide-react'

const values = [
  { icon: Target, title: 'Precision First', description: 'Every micron matters. We maintain tolerances that exceed industry standards.' },
  { icon: Lightbulb, title: 'Innovation Driven', description: 'Constantly pushing boundaries with the latest CNC, laser, and automation tech.' },
  { icon: Heart, title: 'Client Focused', description: 'Your success is our mission. We partner with you from prototype to production.' },
  { icon: Zap, title: 'Rapid Delivery', description: '24/7 operations and optimized workflows ensure your deadlines are always met.' },
]

const stats = [
  { icon: TrendingUp, value: '500+', label: 'Projects Completed' },
  { icon: Shield, value: '99.8%', label: 'Quality Rate' },
  { icon: Award, value: 'ISO', label: 'Certified' },
  { icon: Target, value: '±0.001', label: 'mm Tolerance' },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-50/40 to-transparent" />

      <div className="section-padding mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - PARALLELOGRAM images - FIXED: more bottom padding for stats badge */}
          <motion.div style={{ y }} className="relative pb-24">
            <motion.div
              initial={{ opacity: 0, rotateY: -90 }}
              animate={isVisible ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-2 gap-5"
            >
              <div className="space-y-5">
                <motion.div
                  className="img-parallelogram h-56 overflow-hidden shadow-2xl shadow-slate-200/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop&q=80" alt="CNC Machining" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  className="img-parallelogram h-56 overflow-hidden shadow-2xl shadow-slate-200/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=350&fit=crop&q=80" alt="Laser Welding" className="w-full h-full object-cover" />
                </motion.div>
              </div>
              <div className="pt-10 space-y-5">
                <motion.div
                  className="img-parallelogram h-56 overflow-hidden shadow-2xl shadow-slate-200/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=350&fit=crop&q=80" alt="CNC Machine" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  className="img-parallelogram h-56 overflow-hidden shadow-2xl shadow-slate-200/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=350&fit=crop&q=80" alt="Factory Floor" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Stats Badge - FIXED: moved lower with more space */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-8 py-5 shadow-2xl shadow-cyan-100/30 border border-cyan-100 z-20"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className="flex gap-8">
                {stats.map((stat, i) => (
                  <motion.div key={i} className="text-center" whileHover={{ scale: 1.2, y: -3 }} transition={{ type: "spring" }}>
                    <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}>
                      <stat.icon className="w-5 h-5 text-cyan-500 mx-auto mb-1" />
                    </motion.div>
                    <span className="text-xl font-bold text-slate-900">{stat.value}</span>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              <motion.span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider inline-block" initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
                About Entire Solutions
              </motion.span>
              <motion.h2 className="heading-lg text-slate-900 mt-3" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
                Precision Fabrication.<br /><span className="text-gradient">Reliable Solutions.</span>
              </motion.h2>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="text-slate-600 text-lg leading-relaxed">
              Established in 2020, Entire Solutions is a premier manufacturing hub specializing in high-tolerance light and heavy fabrication, state-of-the-art fiber laser cutting, precision CNC sheet metal processing, and certified welding operations.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="text-slate-600 text-lg leading-relaxed">
              Driven by advanced machinery and a rigid approach to quality, we serve high-demand B2B sectors including renewable energy, power grids, automotive chains, and infrastructure projects—consistently delivering precisely detailed industrial assets.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotateX: 90, y: 30 }}
                  animate={isVisible ? { opacity: 1, rotateX: 0, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.12, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.03, rotateY: 5, transition: { type: "spring", stiffness: 400 } }}
                  className="p-5 rounded-xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-cyan-100/30 hover:border-cyan-200 transition-colors cursor-pointer group"
                  style={{ perspective: 1000 }}
                >
                  <motion.div whileHover={{ rotate: 15, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                    <value.icon className="w-8 h-8 text-cyan-500 mb-3 group-hover:text-cyan-600 transition-colors" />
                  </motion.div>
                  <h3 className="font-semibold text-slate-900 mb-1">{value.title}</h3>
                  <p className="text-sm text-slate-500">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}