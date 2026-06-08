import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasonsList = [
  { id: "01", title: "Sharp Laser Cutting", desc: "Advanced fiber laser technology for micron-level accuracy and smooth edges." },
  { id: "02", title: "Heavy-Duty Fabrication", desc: "Robust structural engineering built to withstand extreme industrial loads." },
  { id: "03", title: "Modern Infrastructure", desc: "State-of-the-art machinery paired with expert artisan precision." },
  { id: "04", title: "Cost-Efficient Solutions", desc: "Optimized production workflows to maximize value without compromising quality." },
  { id: "05", title: "Trusted Partner", desc: "Proven excellence in renewable energy and industrial sectors." }
];

const industries = [
  "Renewable Energy", "Electrical & Power", "Automotive & Engineering", "Industrial Equipment", "Infrastructure"
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const leftCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Dramatic Header Reveal
      gsap.fromTo(".why-header",
        { y: 80, opacity: 0, scale: 0.9 },
        { scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }, y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" }
      );

      // 2. 3D Swing Animation for Left Cards
      gsap.fromTo(leftCardsRef.current,
        { x: -100, opacity: 0, rotationX: -30, transformOrigin: "left center" },
        { 
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }, 
          x: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.15, ease: "back.out(1.4)" 
        }
      );

      // 3. Cinematic Clip-Path Reveal for Featured Image Card
      gsap.fromTo(".featured-card",
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", y: 50 },
        { 
          scrollTrigger: { trigger: ".featured-card", start: "top 75%" }, 
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", y: 0, duration: 1.5, ease: "power4.inOut" 
        }
      );

      // 4. Inner Image Scale Parallax (Starts big, scales down as it reveals)
      gsap.fromTo(".featured-img",
        { scale: 1.4 },
        { 
          scrollTrigger: { trigger: ".featured-card", start: "top 75%" }, 
          scale: 1, duration: 2, ease: "power3.out" 
        }
      );

      // 5. Bouncy Pop-up for Industry Tags
      gsap.fromTo(".industry-tag",
        { scale: 0, opacity: 0, y: 20 },
        { 
          scrollTrigger: { trigger: ".industries-box", start: "top 85%" }, 
          scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(2)" 
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="why-header mb-16 max-w-2xl">
          <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Excellence Delivered</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
            Why Choose Entire Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - 3D Container Perspective applied here */}
          <div className="lg:col-span-7 space-y-4" style={{ perspective: "1000px" }}>
            {reasonsList.map((reason, index) => (
              <div 
                key={reason.id} 
                ref={(el) => (leftCardsRef.current[index] = el)}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 flex items-start gap-6 group"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                  {reason.id}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dark mb-2">{reason.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-8">
            
            {/* Featured Project - Clip Path Reveal */}
            <div className="featured-card relative h-[400px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[10px] rounded-bl-[10px] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" 
                alt="Wind Power Engineering" 
                className="featured-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-primary/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full w-max mb-4">
                  Featured Project
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Wind Power Blade Repair Fixtures</h3>
                <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                  Custom-engineered fixtures designed for wind turbine maintenance and renewable energy applications.
                </p>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-xs uppercase">System Ref</span>
                    <span className="text-white text-sm font-mono">SYS.REF_092</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs uppercase">Grade</span>
                    <span className="text-purple-300 text-sm font-semibold">Heavy Industrial</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Box */}
            <div className="industries-box bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-dark mb-4">Industries We Serve</h3>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry, index) => (
                  <span 
                    key={index} 
                    className="industry-tag px-4 py-2 bg-slate-50 text-gray-700 border border-gray-200 rounded-full text-sm font-medium hover:bg-purple-50 hover:text-primary hover:border-purple-200 transition-colors cursor-default"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <div className="industry-tag mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                <p className="text-sm text-primary font-medium">
                  <span className="font-bold">⚡ Renewable Energy Solutions:</span> Fabrication solutions for wind power fixtures, battery racks, and BESS skids.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;