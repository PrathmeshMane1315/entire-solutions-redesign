import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const reasons = [
  { num: "01", title: "Sharp Laser Cutting", desc: "Advanced fiber laser technology for micron-level accuracy and smooth edges." },
  { num: "02", title: "Heavy-Duty Fabrication", desc: "Robust structural engineering built to withstand extreme industrial loads." },
  { num: "03", title: "Modern Infrastructure", desc: "State-of-the-art machinery paired with expert artisan precision." },
  { num: "04", title: "Cost-Efficient Solutions", desc: "Optimized production workflows to maximize value without compromising quality." },
  { num: "05", title: "Trusted Partner", desc: "Proven excellence in renewable energy and industrial sectors." }
];

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">The Entire Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Why Choose Us</h3>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Progress Line Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary to-accent md:-translate-x-1/2 rounded-full"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-24">
            {reasons.map((reason, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Node */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-slate-900 border-4 border-primary rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
                  
                  {/* Content */}
                  <div className={`pl-20 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <span className="text-primary font-mono text-xl mb-2 block">{reason.num}</span>
                    <h4 className="text-2xl font-bold mb-3">{reason.title}</h4>
                    <p className="text-slate-400 text-lg leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
