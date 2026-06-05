import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setIsLoaded(true), 100) }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Video Background */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        poster="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
      >
        <source src="https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90 z-[1]" />

      {/* Animated Glow Orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 120, 0], y: [0, -60, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
            animate={{ y: [0, -40, 0], opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 section-padding mx-auto max-w-5xl w-full text-center py-32">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
          >
            <motion.div animate={{ rotate: [0, 180, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-cyan-400 text-sm font-medium tracking-wide">Industrial Engineering Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="heading-xl text-white"
          >
            <motion.span initial={{ opacity: 0, x: -30 }} animate={isLoaded ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="block">
              Strong Builds
            </motion.span>
            <motion.span initial={{ opacity: 0, x: 30 }} animate={isLoaded ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.8 }} className="block text-gradient">
              Start With Sharp Cuts
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Premium light and heavy engineering fabrication solutions tailored comprehensively for high-performance industrial and commercial environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a href="#services" className="btn-primary flex items-center gap-2" whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }}>
              Explore Services
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
            <motion.a href="#projects" className="btn-outline flex items-center gap-2" whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Play className="w-5 h-5" />
              View Projects
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={isLoaded ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 1.5 }} className="pt-16">
            <motion.a href="#about" className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <span className="text-sm uppercase tracking-[0.3em]">Scroll</span>
              <ChevronDown className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 to-transparent z-10" />
    </section>
  )
}