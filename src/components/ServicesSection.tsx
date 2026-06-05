import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Scissors, Layers, Paintbrush, Box, Wrench, Flame, Sparkles, ArrowUpRight } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Laser Cutting', description: 'High-precision fiber laser cutting for complex sheet metal patterns with clean edges.', image: 'https://www.stylecnc.com/uploads/allimg/200612/1-2006121231280-L.jpg', color: 'from-cyan-400 to-cyan-600' },
  { icon: Layers, title: 'Heavy Fabrication', description: 'Robust light & heavy structural steel fabrication built to sustain demanding industrial loads.', image: 'https://www.kairaviinfrastructure.com/assets/img/kipl/keyword/heavy-steel-fabrication-work.png', color: 'from-blue-400 to-blue-600' },
  { icon: Paintbrush, title: 'Powder Coating', description: 'Durable protective finishing layer offering high resistance against weathering and corrosion.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEJdfQB17YIgi0AH9Kf3RtrqmhIx8h04lJQ&s', color: 'from-teal-400 to-teal-600' },
  { icon: Box, title: 'Electrical Panel Boxes', description: 'Custom-engineered electrical enclosures, junction boxes, and distribution panels.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQov4uGAOMYlfkqxck6wIJdvOxJwcLKbUBQ&s', color: 'from-sky-400 to-sky-600' },
  { icon: Wrench, title: 'Sheet Metal Bending', description: 'Accurate industrial bending and CNC press brake forming for flawless assembly geometry.', image: 'https://www.komaspec.com/media/prwhkkp4/sheet-metal-bending.jpg', color: 'from-cyan-500 to-blue-500' },
  { icon: Flame, title: 'Welding & Assembly', description: 'Expert drilling, tapping, and professional-grade TIG/MIG production welding runs.', image: 'https://shengenfab.com/wp-content/uploads/2024/05/welder-assembler-768x430.webp', color: 'from-blue-500 to-cyan-500' },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-28 bg-slate-50 relative">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-50/30 rounded-full blur-3xl" />
      </div>

      <div className="section-padding mx-auto max-w-7xl relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-20">
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-50 border border-cyan-200 mb-5" initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, type: "spring" }} whileHover={{ scale: 1.05 }}>
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4 text-cyan-600" />
            </motion.div>
            <span className="text-cyan-700 text-sm font-medium">Our Services</span>
          </motion.div>
          <motion.h2 className="heading-lg text-slate-900" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
            Precision Systems & <span className="text-gradient">Custom Engineering</span>
          </motion.h2>
        </motion.div>

        <motion.div style={{ y }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 40 }}
              animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, type: "spring", stiffness: 80, damping: 15 }}
              whileHover={{ y: -15, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="group text-center cursor-pointer"
            >
              {/* HEPTAGON image - the image IS the shape */}
              <div className="relative flex justify-center mb-6">
                <motion.div
                  className="w-72 h-64 img-heptagon overflow-hidden shadow-2xl shadow-slate-200/50"
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isVisible ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                <motion.div
                  className="absolute top-4 right-1/4 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2, rotate: 45 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </div>

              <div className="px-4">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}