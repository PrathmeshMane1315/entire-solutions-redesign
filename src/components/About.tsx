import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Counter = ({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;

        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );

        const easeProgress = 1 - Math.pow(1 - progress, 4);

        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
    >
      {count}
      {suffix}
    </span>
  );
};

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              About Us
            </h2>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Precision Fabrication{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Reliable Solutions
              </span>
            </h3>

            <p className="text-base lg:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Established in 2020, Entire Solutions is a premier manufacturing
              hub specializing in high-tolerance light and heavy fabrication,
              state-of-the-art fiber laser cutting, precision CNC sheet metal
              processing, and certified welding operations.
              <br />
              <br />
              Driven by advanced machinery and a rigid approach to quality, we
              serve high-demand B2B sectors including renewable energy, power
              grids, automotive chains, and infrastructure projects—
              consistently delivering precisely detailed industrial assets.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col gap-2">
                <Counter end={500} suffix="+" />
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Projects Completed
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <Counter end={150} suffix="+" />
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Industrial Clients
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <Counter end={10} suffix=",000 MT" />
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Mfg Capacity
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <Counter end={12} suffix="+" />
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Years Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full flex justify-center items-center"
          >
            <img
              src="public/Laser Cutting.png"
              alt="Laser Cutting Machine"
              className="w-full max-w-[800px] object-contain drop-shadow-2xl"
            />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[220px]"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-xl">#1</span>
              </div>

              <p className="font-semibold text-slate-900 text-sm">
                Top Rated Fabrication Partner in Pune
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}