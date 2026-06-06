import { motion } from "framer-motion";
import { Scissors, Hammer, Cpu, Layers } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

const services = [
  {
    icon: Scissors,
    title: "Laser Cutting",
    description: "High-precision fiber laser cutting for complex sheet metal patterns with clean edges and superior accuracy."
  },
  {
    icon: Hammer,
    title: "Heavy Fabrication",
    description: "Custom heavy-duty fabrication solutions with industrial-grade powder coating and finishing."
  },
  {
    icon: Cpu,
    title: "Electrical Panel Boxes",
    description: "Custom-engineered electrical enclosures, junction boxes, and distribution panels designed for reliability and safety."
  },
  {
    icon: Layers,
    title: "Sheet Metal Bending",
    description: "Precision CNC sheet metal bending combined with professional welding and assembly services."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
              Precision Systems & Custom Engineering
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block text-right"
          >
            {/* <p className="text-2xl font-serif italic text-slate-400">
              "Built On Precision. Driven By Quality."
            </p> */}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <TiltCard className="h-full rounded-[2rem]">
                <div className="relative bg-slate-50 rounded-[2rem] p-8 md:p-10 border border-slate-100 group-hover:border-primary/30 transition-all duration-500 overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-primary/20 group-hover:shadow-lg transition-all duration-500">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>

                    <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                    <p className="text-lg text-slate-600 mb-8">{service.description}</p>

                    <div className="mt-auto flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-none">
                      <span>Learn more</span>
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
