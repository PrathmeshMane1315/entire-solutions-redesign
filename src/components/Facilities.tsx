import { motion } from "framer-motion";
import { Wrench, Component, Box, Flame, ArrowDownToDot, Paintbrush } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

const facilities = [
  {
    icon: Flame,
    title: "Laser Cutting",
    description: "High-precision fiber laser systems achieving micron-level accuracy for complex sheet metal geometries."
  },
  {
    icon: ArrowDownToDot,
    title: "CNC Bending",
    description: "Automated multi-axis CNC bending cells ensuring consistent angles and structural integrity for high-volume production."
  },
  {
    icon: Component,
    title: "Profile Cutting",
    description: "Advanced plasma and oxy-fuel profile cutting for heavy-duty structural components used in demanding industrial environments."
  },
  {
    icon: Wrench,
    title: "Welding Systems",
    description: "Certified MIG/TIG welding operations focusing on structural strength, seamless finishes, and rigorous quality standards."
  },
  {
    icon: Box,
    title: "Drilling & Tapping",
    description: "Precision-engineered hole patterns, tapping, and countersinking services for specialized mechanical assemblies."
  },
  {
    icon: Paintbrush,
    title: "Painting Unit",
    description: "In-house industrial coating facility providing electrostatic powder coating and high-durability finishes for all climates."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Infrastructure</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              World-Class Manufacturing Facilities
            </h3>
            <p className="text-lg text-slate-600">
              Our state-of-the-art infrastructure is equipped to handle complex fabrication requirements with uncompromising precision and speed.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {facilities.map((facility, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <TiltCard className="h-full rounded-2xl">
                <div className="h-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300 rounded-2xl overflow-hidden relative p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-colors duration-500 rounded-2xl" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-t-2xl" />

                  <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                    <facility.icon className="w-7 h-7 text-slate-700 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300 mb-3">
                    {facility.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
