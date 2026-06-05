import { useRef } from 'react'
import { motion, useScroll, useInView } from 'framer-motion'
import { MessageSquare, PenTool, Factory, ClipboardCheck, Truck } from 'lucide-react'

const steps = [
  { icon: MessageSquare, title: 'Consultation', description: 'We begin with understanding your requirements, specifications, and project scope through detailed technical discussions.' },
  { icon: PenTool, title: 'Design', description: 'Our engineering team creates precise CAD drawings and 3D models, optimizing for manufacturability and cost-efficiency.' },
  { icon: Factory, title: 'Fabrication', description: 'State-of-the-art machinery executes cutting, bending, welding, and finishing with micron-level accuracy.' },
  { icon: ClipboardCheck, title: 'Quality Inspection', description: 'Rigorous multi-stage inspection including dimensional checks, material testing, and surface finish verification.' },
  { icon: Truck, title: 'Delivery', description: 'Secure packaging and on-time logistics ensure your components arrive in perfect condition, ready for integration.' },
]

function TimelineCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.15 }} className="relative flex-shrink-0 w-[320px] md:w-[380px]">
      <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-300 transition-all duration-500 h-full group shadow-sm hover:shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <step.icon className="w-6 h-6 text-gray-700" />
          </div>
          <div className="text-4xl font-bold font-grotesk text-gray-200 group-hover:text-gray-300 transition-colors">{String(index + 1).padStart(2, '0')}</div>
        </div>
        <h3 className="text-xl font-bold font-grotesk text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">{step.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  )
}

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  return (
    <section className="relative py-32 overflow-hidden bg-gray-50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Our Process</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold font-grotesk text-gray-900 mb-6">
            Industrial Process <span className="text-gray-400">Timeline</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-gray-600 max-w-2xl mx-auto">
            From initial consultation to final delivery, our streamlined process ensures precision at every stage.
          </motion.p>
        </div>
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div style={{ scaleX: scrollXProgress }} className="h-full bg-gradient-to-r from-gray-400 to-gray-300 origin-left rounded-full" />
          </div>
        </div>
        <div ref={containerRef} className="overflow-x-auto scrollbar-hide pb-8">
          <div className="flex gap-6 px-6 lg:px-8 max-w-7xl mx-auto" style={{ width: 'max-content' }}>
            {steps.map((step, index) => <TimelineCard key={step.title} step={step} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
