import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Zap, Wind, Settings, Factory, Building } from "lucide-react";

export function FeaturedProject() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Featured Case Study</h2>
         <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Wind Power Blade Repair Fixtures
          </h3>
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <Badge className="w-fit mb-6 bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-4 py-1 text-sm border-none">
                Renewable Energy Sector
              </Badge>
             <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                Custom-engineered fixtures designed for wind turbine maintenance and renewable energy applications.
              </h4>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We delivered high-precision fabrication for massive blade repair structures, requiring micron-level accuracy and extreme load-bearing capabilities.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <Wind className="text-primary w-5 h-5" /> Renewable Energy
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <Zap className="text-primary w-5 h-5" /> Electrical & Power Industry
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <Settings className="text-primary w-5 h-5" /> Automotive & Engineering
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <Factory className="text-primary w-5 h-5" /> Industrial Equipment
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <Building className="text-primary w-5 h-5" /> Construction & Infrastructure
                </div>
              </div>
            </div>

          <div className="relative min-h-[320px] sm:min-h-[450px] lg:min-h-full overflow-hidden">
              <img 
                src="/src/assets/images/wind-turbine.png" 
                alt="Wind Turbine Manufacturing" 
               className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "public/Wind Power Blade Repair Fixtures.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-transparent to-transparent lg:block hidden" />
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/20 max-w-[220px] sm:max-w-xs"
              >
                <div className="text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm font-semibold text-slate-800">Dimensional Accuracy</div>
                <div className="text-xs text-slate-500 mt-1">Verified via CMM inspection</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
