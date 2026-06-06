import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

const shards = [
  { clip: "polygon(0% 0%, 35% 0%, 20% 45%)",       x: -320, y: -220, r: -55  },
  { clip: "polygon(35% 0%, 70% 0%, 45% 40%)",       x:    0, y: -260, r:  12  },
  { clip: "polygon(70% 0%, 100% 0%, 100% 30%, 55% 38%)", x: 320, y: -200, r: 50 },
  { clip: "polygon(0% 0%, 20% 45%, 0% 55%)",        x: -340, y:    0, r: -70 },
  { clip: "polygon(20% 45%, 45% 40%, 30% 60%)",     x: -160, y:  120, r: -30 },
  { clip: "polygon(45% 40%, 55% 38%, 50% 65%)",     x:   10, y:  180, r:   5 },
  { clip: "polygon(55% 38%, 100% 30%, 80% 60%)",    x:  200, y:  140, r:  40 },
  { clip: "polygon(100% 30%, 100% 70%, 80% 60%)",   x:  350, y:   30, r:  65 },
  { clip: "polygon(0% 55%, 30% 60%, 10% 100%)",     x: -300, y:  220, r: -50 },
  { clip: "polygon(30% 60%, 50% 65%, 35% 100%)",    x: -100, y:  260, r: -15 },
  { clip: "polygon(50% 65%, 80% 60%, 65% 100%)",    x:  130, y:  250, r:  25 },
  { clip: "polygon(80% 60%, 100% 70%, 100% 100%, 65% 100%)", x: 330, y: 210, r: 60 },
];

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ShatterReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    // NOTE: NO overflow-hidden on outer wrapper — prevents clipping of
    // floating/negatively-positioned children (e.g. About badge at -bottom-6)
    <div ref={ref} className={`relative ${className}`}>
      {children}

      {/* Shards are clipped only within their own container, not the section */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{ overflow: "clip" }}   // "clip" doesn't create a new scroll container
      >
        {shards.map((shard, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              clipPath: shard.clip,
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(192,132,252,0.22) 50%, rgba(255,255,255,0.35) 100%)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              border: "1px solid rgba(192,132,252,0.3)",
            }}
            initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
            animate={
              isInView
                ? { x: shard.x, y: shard.y, rotate: shard.r, opacity: 0, scale: 1.15 }
                : { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }
            }
            transition={{
              duration: 0.75,
              delay: delay + i * 0.03,
              ease: [0.23, 1, 0.32, 1],
            }}
          />
        ))}

        {/* White flash on shatter */}
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: [0, 0.55, 0] } : { opacity: 0 }}
          transition={{ duration: 0.35, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
