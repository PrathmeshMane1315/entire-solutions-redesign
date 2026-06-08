import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const barRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Prevent scroll during loading
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          onComplete();
        }
      });

      // 1. Loader Bar Animation
      tl.to(barRef.current, {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut"
      });

      // 2. Fade out content first
      tl.to(contentRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in"
      }, "-=0.2");

      // 3. Exit Animation
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });

      // 4. Hide loader completely
      tl.set(loaderRef.current, {
        display: 'none'
      });

    }, loaderRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple-100 rounded-full blur-[100px] opacity-40" />

      {/* Content */}
      <div ref={contentRef} className="z-10 flex flex-col items-center px-4">
        {/* Logo - Using reliable CDN */}
        <img 
          src="https://entire-solutions.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75" 
          alt="Entire Solutions"
          className="h-20 w-20 md:h-24 md:w-24 object-contain mb-6"
          loading="eager"
        />

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-2 uppercase text-center">
          ENTIRE<span className="text-purple-600">SOLUTIONS</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-500 tracking-[0.3em] text-xs md:text-sm uppercase mb-8">
          Engineering Excellence
        </p>

        {/* Loading Bar */}
        <div className="w-48 md:w-56 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            ref={barRef} 
            className="h-full bg-gradient-to-r from-purple-600 to-purple-500 w-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;