import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Purple glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-400/20 blur-[80px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-500/15 blur-[100px] animate-pulse" style={{ animationDelay: "0.5s" }} />

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo with layered animations */}
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{
                  background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #7C3AED, #C084FC, #7C3AED) border-box",
                  width: "110%",
                  height: "110%",
                  top: "-5%",
                  left: "-5%",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulsing glow behind logo */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Logo */}
              <motion.img
                src="/logo.png"
                alt="Entire Solutions"
                className="relative w-24 h-24 object-contain"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              />
            </div>

            {/* Company name */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="text-2xl font-extrabold tracking-widest text-slate-900">
                ENTIRE<span className="text-primary">SOLUTIONS</span>
              </span>
              <span className="text-xs font-medium tracking-[0.3em] text-slate-400 uppercase">
                Engineering Excellence
              </span>
            </motion.div>

            {/* Animated loader bar */}
            <motion.div className="w-48 h-[2px] bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut", repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
