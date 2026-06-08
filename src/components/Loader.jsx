import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: onComplete });

      // 1. Loader Bar Animation
      tl.to(barRef.current, {
        width: "100%",
        duration: 2,
        ease: "power2.inOut"
      });

      // 2. Exit Animation
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.2
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      {/* Subtle Purple Glow Background (Reflected in image_ce1de7.jpg) */}
      <div className="absolute w-[400px] h-[400px] bg-purple-100 rounded-full blur-[100px] opacity-40"></div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center">
        {/* Logo */}
        <img 
          src="https://entire-solutions.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75" 
          alt="Logo" 
          className="h-24 w-24 object-contain mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-dark tracking-tight mb-2 uppercase">
          ENTIRE<span className="text-primary">SOLUTIONS</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-500 tracking-[0.3em] text-xs md:text-sm uppercase mb-8">
          Engineering Excellence
        </p>

        {/* Loading Bar */}
        <div className="w-56 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div ref={barRef} className="h-full bg-gradient-to-r from-primary to-purple-500 w-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;