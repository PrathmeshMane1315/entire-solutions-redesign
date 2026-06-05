import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star, MessageSquare } from 'lucide-react'

const testimonials = [
  { name: 'James Mitchell', role: 'Procurement Director', company: 'AeroTech Industries', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80', quote: 'Entire Solutions has been our go-to partner for precision machining for over 5 years. Their quality and reliability are unmatched.', rating: 5 },
  { name: 'Sarah Chen', role: 'Engineering Manager', company: 'EV Motors Corp', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80', quote: 'The turnaround time on our prototype parts was incredible. From CAD to finished component in under 72 hours. Truly exceptional.', rating: 5 },
  { name: 'Michael Rodriguez', role: 'Plant Manager', company: 'ChemFlow Systems', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80', quote: 'Their welding certification and quality documentation made our audit process seamless. Professional team from start to finish.', rating: 5 },
  { name: 'Emily Watson', role: 'Product Designer', company: 'TechShield Electronics', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80', quote: 'The sheet metal enclosures they fabricated for our product line exceeded our expectations. Perfect fit, finish, and delivery.', rating: 5 },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => { setDirection(1); setCurrent((prev) => (prev + 1) % testimonials.length) }, 6000)
    return () => clearInterval(timer)
  }, [])

  const next = () => { setDirection(1); setCurrent((prev) => (prev + 1) % testimonials.length) }
  const prev = () => { setDirection(-1); setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length) }

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 400 : -400, opacity: 0, scale: 0.8, rotateY: direction > 0 ? 45 : -45 }),
    center: { x: 0, opacity: 1, scale: 1, rotateY: 0 },
    exit: (direction: number) => ({ x: direction < 0 ? 400 : -400, opacity: 0, scale: 0.8, rotateY: direction < 0 ? 45 : -45 }),
  }

  return (
    <section ref={sectionRef} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-50 rounded-full blur-3xl" />
      </div>

      <div className="section-padding mx-auto max-w-5xl relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-20">
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-50 border border-cyan-200 mb-5" initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, type: "spring" }} whileHover={{ scale: 1.05 }}>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <MessageSquare className="w-4 h-4 text-cyan-600" />
            </motion.div>
            <span className="text-cyan-700 text-sm font-medium">Testimonials</span>
          </motion.div>
          <motion.h2 className="heading-lg text-slate-900" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl shadow-slate-100/50 border border-slate-100 relative overflow-hidden">
            <motion.div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-50 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} />

            <motion.div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30 z-10" whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Quote className="w-7 h-7 text-white" />
            </motion.div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 25 }}
                className="pt-8"
                style={{ perspective: 1000 }}
              >
                <div className="flex gap-1.5 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0, rotate: -180 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}>
                      <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed mb-10 italic font-light">
                  "{testimonials[current].quote}"
                </p>

                <div className="flex items-center gap-5">
                  {/* PENTAGON avatar */}
                  <motion.div
                    className="w-20 h-20 img-pentagon overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={testimonials[current].image} alt={testimonials[current].name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{testimonials[current].name}</p>
                    <p className="text-sm text-slate-500">{testimonials[current].role}, {testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-100">
              <div className="flex gap-3">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${i === current ? 'bg-cyan-500 w-10' : 'bg-slate-200 hover:bg-cyan-300'}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <motion.button onClick={prev} whileHover={{ scale: 1.15, x: -3 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-600 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button onClick={next} whileHover={{ scale: 1.15, x: 3 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-600 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}