import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Contact2 } from 'lucide-react'

const contactInfo = [
  { icon: Phone, title: 'Phone', details: ['+1 (555) 123-4567', '+1 (555) 987-6543'] },
  { icon: Mail, title: 'Email', details: ['info@entiresolutions.com', 'quotes@entiresolutions.com'] },
  { icon: MapPin, title: 'Address', details: ['1234 Industrial Blvd', 'Detroit, MI 48201, USA'] },
  { icon: Clock, title: 'Working Hours', details: ['Mon - Fri: 7:00 AM - 6:00 PM', 'Sat: 8:00 AM - 2:00 PM'] },
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-50/40 to-transparent" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-100/15 rounded-full blur-3xl" />
      </div>

      <div className="section-padding mx-auto max-w-7xl relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto mb-20">
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-50 border border-cyan-200 mb-5" initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, type: "spring" }} whileHover={{ scale: 1.05 }}>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Contact2 className="w-4 h-4 text-cyan-600" />
            </motion.div>
            <span className="text-cyan-700 text-sm font-medium">Contact Us</span>
          </motion.div>
          <motion.h2 className="heading-lg text-slate-900" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
            Get Your <span className="text-gradient">Free Quote</span>
          </motion.h2>
          <motion.p className="text-slate-500 text-lg mt-4" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
            Ready to start your next project? Contact us today and our team will get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div style={{ y }} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -10, scale: 1.05, rotate: 2, transition: { type: "spring", stiffness: 300 } }}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-cyan-100/20 hover:border-cyan-200 transition-colors cursor-pointer group"
                >
                  <motion.div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-cyan-100 transition-colors" whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                    <info.icon className="w-7 h-7 text-cyan-600" />
                  </motion.div>
                  <h3 className="font-semibold text-slate-900 mb-3 text-lg">{info.title}</h3>
                  {info.details.map((detail, j) => (
                    <p key={j} className="text-sm text-slate-500">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* TRAPEZOID map image - fixed */}
            <motion.div
              className="img-trapezoid h-64 overflow-hidden shadow-2xl shadow-slate-200/50"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop&q=80" alt="Factory Location" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
            <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-xl shadow-slate-100/50 relative overflow-hidden">
              <motion.div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-50 rounded-full blur-2xl" animate={{ scale: [1, 1.3, 1], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} />

              {submitted ? (
                <motion.div className="text-center py-16" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
                  <motion.div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: 2 }}>
                    <CheckCircle className="w-10 h-10 text-cyan-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-500">We will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input type="text" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-900 text-sm" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input type="email" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-900 text-sm" placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-900 text-sm" placeholder="Your Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                      <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-900 text-sm" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                        <option value="">Select a service</option>
                        <option value="cnc">CNC Machining</option>
                        <option value="laser">Laser Cutting</option>
                        <option value="welding">Welding & Fabrication</option>
                        <option value="grinding">Precision Grinding</option>
                        <option value="sheet">Sheet Metal Work</option>
                        <option value="design">Design & Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                    <textarea rows={4} required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-slate-900 text-sm resize-none" placeholder="Tell us about your project requirements..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>

                  <motion.button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-base" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <motion.div animate={{ x: [0, 5, 0], rotate: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      <Send className="w-5 h-5" />
                    </motion.div>
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}