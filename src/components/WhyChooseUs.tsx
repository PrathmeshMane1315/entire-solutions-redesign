import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Shield, Clock, Award, Users, Globe } from 'lucide-react'

const metrics = [
  { icon: Zap, value: 2020, label: 'Established', suffix: '' },
  { icon: Shield, value: 500, label: 'Projects Completed', suffix: '+' },
  { icon: Award, value: 98, label: 'Client Satisfaction', suffix: '%' },
  { icon: Clock, value: 24, label: 'Support Available', suffix: '/7' },
  { icon: Users, value: 50, label: 'Expert Engineers', suffix: '+' },
  { icon: Globe, value: 15, label: 'Countries Served', suffix: '+' },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * value)
      setDisplayValue(current)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-bold font-grotesk text-gray-900">
      {displayValue}{suffix}
    </span>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Why Entire Solutions</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold font-grotesk text-gray-900 mb-6">
            Built on <span className="text-gray-400">Excellence</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers that reflect our commitment to quality, precision, and client satisfaction.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div key={metric.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index + 0.3 }} whileHover={{ y: -5, borderColor: 'rgba(0, 0, 0, 0.2)' }} className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-gray-300 transition-all duration-500 group shadow-sm hover:shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors">
                <metric.icon className="w-7 h-7 text-gray-700" />
              </div>
              <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              <p className="text-sm text-gray-500 mt-3 uppercase tracking-wider">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
