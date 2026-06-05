import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FileText, PenTool, Cog, CheckCircle, Truck, Workflow } from 'lucide-react'

const steps = [
  { icon: FileText, number: '01', title: 'Consultation', description: 'We discuss your requirements, specifications, and project goals in detail.' },
  { icon: PenTool, number: '02', title: 'Design & Engineering', description: 'Our engineers create CAD models and optimize designs for manufacturing.' },
  { icon: Cog, number: '03', title: 'Manufacturing', description: 'Precision production using state-of-the-art CNC, laser, and welding equipment.' },
  { icon: CheckCircle, number: '04', title: 'Quality Control', description: 'Rigorous inspection with CMM, optical measurement, and NDT testing.' },
  { icon: Truck, number: '05', title: 'Delivery', description: 'Careful packaging and on-time delivery with full documentation.' },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [20, -20])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-50/30 rounded-full blur-3xl" />
      </div>

      <div className="section-padding mx-auto max-w-7xl relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-20">
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-50 border border-cyan-200 mb-5" initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, type: "spring" }} whileHover={{ scale: 1.05 }}>
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
              <Workflow className="w-4 h-4 text-cyan-600" />
            </motion.div>
            <span className="text-cyan-700 text-sm font-medium">Our Process</span>
          </motion.div>
          <motion.h2 className="heading-lg text-slate-900" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
            How We <span className="text-gradient">Work</span>
          </motion.h2>
        </motion.div>

        <motion.div style={{ y }} className="relative">
          <div className="hidden lg:block absolute top-28 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-200 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80, scale: 0.5 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100, damping: 10 }}
                whileHover={{ y: -15, scale: 1.08, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                className="relative text-center cursor-pointer group"
              >
                <div className="relative inline-flex mb-8">
                  {/* DIAMOND shape container */}
                  <motion.div
                    className="w-28 h-28 shape-diamond bg-white flex items-center justify-center border-2 border-cyan-100 relative z-10 shadow-xl shadow-cyan-100/30 group-hover:border-cyan-300 transition-colors"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.div whileHover={{ rotate: -45, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                      <step.icon className="w-10 h-10 text-cyan-500" />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-cyan-500/30"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.3, rotate: 20 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                <motion.h3
                  className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-slate-500 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}