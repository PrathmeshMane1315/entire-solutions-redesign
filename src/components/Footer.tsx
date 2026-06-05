import { Mail, Phone, MapPin, ArrowUp, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  services: ['CNC Machining', 'Laser Cutting', 'Welding & Fabrication', 'Precision Grinding', 'Sheet Metal Work', 'Design Engineering'],
  company: ['About Us', 'Our Team', 'Careers', 'News & Blog', 'Certifications', 'Partners'],
  support: ['Get a Quote', 'FAQs', 'Shipping Info', 'Quality Policy', 'Privacy Policy', 'Terms of Service'],
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-3xl" />
      </div>

      <div className="section-padding mx-auto max-w-7xl relative pt-24 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">
          <div className="lg:col-span-1">
            <motion.div className="flex items-center gap-2 mb-7" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="w-11 h-11 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Entire <span className="text-cyan-400">Solutions</span></span>
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed mb-7">
              Precision engineering and industrial manufacturing solutions since 1999. Delivering excellence across CNC machining, laser cutting, and fabrication.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.2, y: -3, rotate: 5 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all">
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-7 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-cyan-500 rounded-full" />Services
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <motion.a href="#services" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group" whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 300 }}>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500" />{link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-7 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-cyan-500 rounded-full" />Company
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <motion.a href="#about" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group" whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 300 }}>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500" />{link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-7 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-cyan-500 rounded-full" />Contact
            </h3>
            <ul className="space-y-5">
              {[{ icon: MapPin, text: '1234 Industrial Blvd, Detroit, MI 48201, USA' }, { icon: Phone, text: '+1 (555) 123-4567' }, { icon: Mail, text: 'info@entiresolutions.com' }].map((item, i) => (
                <motion.li key={i} className="flex items-start gap-3" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <item.icon className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-slate-500 text-sm">© 2024 Entire Solutions. All rights reserved. Built with precision.</p>
            <div className="flex items-center gap-7">
              {['Privacy', 'Terms', 'Sitemap'].map((item, i) => (
                <motion.a key={i} href="#" className="text-slate-500 text-sm hover:text-cyan-400 transition-colors" whileHover={{ y: -2 }}>{item}</motion.a>
              ))}
            </div>
            <motion.button onClick={scrollToTop} whileHover={{ scale: 1.15, y: -5 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white transition-colors shadow-lg shadow-cyan-500/30">
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}