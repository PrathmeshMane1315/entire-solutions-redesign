import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-40 md:pb-24 min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video Wrapper */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://www.pexels.com/download/video/30455960/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay - Isse text readable ho jayega */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        <div className="max-w-4xl" ref={textRef}>
          
          <h2 className="hero-text text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            {/* White to Light Purple Gradient */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
              Strong Builds Start With
            </span> <br />
            {/* Primary Purple Gradient */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Sharp Cuts
            </span>
          </h2>
          
          {/* Lightened Subtext for dark background visibility */}
          <p className="hero-text text-xl text-gray-200 font-medium max-w-2xl mx-auto mb-8">
            Premium light and heavy engineering fabrication solutions tailored comprehensively for high-performance industrial and commercial environments.
          </p>
          
          {/* Centered Buttons */}
          <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition-all shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1">
              Explore Services
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-semibold border-2 border-white rounded-full hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;