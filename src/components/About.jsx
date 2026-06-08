import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registering ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Animation coming from left
      gsap.from(".about-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Animation starts when top of section hits 75% of viewport
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // Text Animation coming from right
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2, // Ek ke baad ek aayenge
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Moved Image here */}
          <div className="relative h-[400px] lg:h-[600px] w-full about-img">
            <img 
              src="https://media.gettyimages.com/id/1443542440/photo/metalworking-cnc-milling-and-cutting-machine-at-industrial-factory.jpg?s=612x612&w=0&k=20&c=Pflrof2gcOTZlfnVLkkIm4Q_1AyVrwWUrtL3Hh2EhLw=" 
              alt="Entire Solutions Manufacturing" 
              className="w-full h-full object-cover organic-shape shadow-2xl"
            />
            {/* Background Decorative Element */}
            <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-purple-100 organic-shape"></div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <h3 className="about-text text-primary font-bold tracking-wider uppercase text-sm">About Entire Solutions</h3>
            <h2 className="about-text text-3xl md:text-5xl font-extrabold text-dark leading-tight">
             Precision Fabrication Reliable Solutions
            </h2>
            <p className="about-text text-gray-600 text-lg leading-relaxed">
              Established in 2020, Entire Solutions is a premier manufacturing hub specializing in high-tolerance light and heavy fabrication, state-of-the-art fiber laser cutting, precision CNC sheet metal processing, and certified welding operations.
            </p>
            <p className="about-text text-gray-600 text-lg leading-relaxed">
              Driven by advanced machinery and a rigid approach to quality, we serve high-demand B2B sectors including renewable energy, power grids, automotive chains, and infrastructure projects—consistently delivering precisely detailed industrial assets.
            </p>
            
            <div className="about-text pt-6 border-t border-gray-100 mt-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Built On Precision</h4>
                  <p className="text-sm text-gray-500">Every project is executed with strict quality control.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;