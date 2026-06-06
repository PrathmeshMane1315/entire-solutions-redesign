import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springX = useSpring(trailX, { stiffness: 80, damping: 20 });
  const springY = useSpring(trailY, { stiffness: 80, damping: 20 });

  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const onEnter = () => {
      isHovering.current = true;
      dotRef.current?.classList.add("scale-[3]", "bg-primary/30");
      ringRef.current?.classList.add("scale-150", "border-primary/60");
    };
    const onLeave = () => {
      isHovering.current = false;
      dotRef.current?.classList.remove("scale-[3]", "bg-primary/30");
      ringRef.current?.classList.remove("scale-150", "border-primary/60");
    };

    document.addEventListener("mousemove", move);

    const interactives = document.querySelectorAll("a, button, [data-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary z-[99999] pointer-events-none mix-blend-multiply transition-transform duration-150"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />
      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary/40 z-[99998] pointer-events-none transition-transform duration-300"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
      {/* Glow trail */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full bg-primary/8 blur-2xl z-[99997] pointer-events-none"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
