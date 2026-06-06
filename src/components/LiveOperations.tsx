import { motion } from "framer-motion";
import { Activity, Globe, ShieldCheck, Terminal } from "lucide-react";

export function LiveOperations() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-3">
                <Terminal className="text-primary w-6 h-6" />
                <h3 className="text-xl font-mono text-white tracking-wider">LIVE_OPERATIONS_DASHBOARD</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-500 font-mono text-sm">SYSTEM_ONLINE</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                <div className="text-slate-400 font-mono text-xs mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> System Reference
                </div>
                <div className="text-white font-mono text-lg">SYS.REF_092</div>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                <div className="text-slate-400 font-mono text-xs mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> System Grade
                </div>
                <div className="text-white font-mono text-lg">Heavy Industrial</div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                <div className="text-slate-400 font-mono text-xs mb-2 flex items-center gap-2">
                  <SettingsIcon className="w-4 h-4" /> Execution Mode
                </div>
                <div className="text-white font-mono text-lg text-primary">Precision Engineered</div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                <div className="text-slate-400 font-mono text-xs mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Partners
                </div>
                <div className="text-white font-mono text-lg">Strategic Networks</div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between text-xs text-slate-500 font-mono">
              <span>LAT: 18.6258° N</span>
              <span>LON: 73.8567° E</span>
              <span>SECURE_CONNECTION: ESTABLISHED</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
