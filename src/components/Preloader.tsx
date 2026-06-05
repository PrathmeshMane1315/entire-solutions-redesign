import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const progressRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      progressRef.current += Math.random() * 15 + 5
      if (progressRef.current >= 100) {
        progressRef.current = 100
        clearInterval(interval)
        setTimeout(() => {
          setIsExiting(true)
          setTimeout(onComplete, 800)
        }, 500)
      }
      setProgress(Math.min(progressRef.current, 100))
    }, 200)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
        >
          <div className="relative mb-12">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="w-32 h-32 rounded-full border-2 border-gray-100 border-t-gray-900 border-r-gray-900" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="absolute inset-4 rounded-full border-2 border-gray-50 border-b-gray-400 border-l-gray-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <Zap className="w-8 h-8 text-gray-900" />
              </motion.div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center mb-8">
            <h1 className="text-3xl font-bold font-grotesk tracking-tight text-gray-900">
              Entire <span className="text-gray-400">Solutions</span>
            </h1>
            <p className="text-sm text-gray-400 mt-2 tracking-widest uppercase">Precision Engineering</p>
          </motion.div>

          <div className="w-64 h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-gray-900 to-gray-400 rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
          </div>

          <motion.p className="mt-4 text-2xl font-grotesk font-bold text-gray-900" key={progress} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
            {Math.round(progress)}%
          </motion.p>
          <p className="mt-2 text-xs text-gray-400 tracking-widest uppercase">Loading Experience</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
