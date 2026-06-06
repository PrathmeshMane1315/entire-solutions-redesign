import { motion } from "framer-motion";
import { Zap, Wind, Sun } from "lucide-react";

export function RenewableEnergy() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-[3rem] overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <img 
              src="/src/assets/images/renewable-energy.png" 
              alt="Renewable Energy Infrastructure" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80";
              }}
            />
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-50" />
          </div>

          <div className="relative z-10 p-12 md:p-24 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Future Forward</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Renewable Energy <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Solutions</span>
              </h3>
              <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
                Fabrication solutions for wind power fixtures, battery racks, BESS skids, and renewable energy infrastructure. Building the foundation for a sustainable tomorrow.
              </p>

              <div className="flex gap-6">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg"
                >
                  <Zap className="w-8 h-8" />
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg"
                >
                  <Wind className="w-8 h-8" />
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg"
                >
                  <Sun className="w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
