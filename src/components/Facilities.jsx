import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const facilitiesData = [
  {
    id: "01",
    title: "Laser Cutting",
    description: "High-precision fiber laser systems achieving micron-level accuracy for complex sheet metal geometries.",
    icon: "⚡"
  },
  {
    id: "02",
    title: "CNC Bending",
    description: "Automated multi-axis CNC bending cells ensuring consistent angles and structural integrity for high-volume production.",
    icon: "📐"
  },
  {
    id: "03",
    title: "Profile Cutting",
    description: "Advanced plasma and oxy-fuel profile cutting for heavy-duty structural components used in demanding industrial environments.",
    icon: "🔥"
  },
  {
    id: "04",
    title: "Welding Systems",
    description: "Certified MIG/TIG welding operations focusing on structural strength, seamless finishes, and rigorous quality standards.",
    icon: "✨"
  },
  {
    id: "05",
    title: "Drilling & Tapping",
    description: "Precision-engineered hole patterns, tapping, and countersinking services for specialized mechanical assemblies.",
    icon: "⚙️"
  },
  {
    id: "06",
    title: "Painting Unit",
    description: "In-house industrial coating facility providing electrostatic powder coating and high-durability finishes for all climates.",
    icon: "🎨"
  }
];

const Facilities = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(".facility-header", 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        }
      );

      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".facilities-grid",
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)"
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="facilities" ref={sectionRef} className="py-20 md:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="facility-header text-center mb-16 max-w-3xl mx-auto opacity-0">
          <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Infrastructure</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
            Our Manufacturing Facilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility, index) => (
            <div 
              key={facility.id}
              ref={(el) => (cardsRef.current[index] = el)}
              /* Changed Shape Classes Here */
              className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 group hover:-translate-y-2 relative overflow-hidden opacity-0 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px]"
            >
              {/* Decorative background shape updated to match the new corners */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-transparent rounded-bl-[50px] -z-10 transition-all duration-500 group-hover:scale-150"></div>
              
              {/* Bottom accent line for industrial feel */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-purple-50 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[5px] rounded-bl-[5px] flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  {facility.icon}
                </div>
                <span className="text-4xl font-black text-gray-100 group-hover:text-primary/20 transition-colors duration-300">
                  {facility.id}
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-dark mb-4">{facility.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Facilities;