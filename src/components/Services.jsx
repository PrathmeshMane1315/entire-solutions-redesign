import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: "01",
    title: "Laser Cutting",
    description: "High-precision fiber laser cutting for complex sheet metal patterns with clean edges and superior accuracy.",
    // Placeholder Image Link
    image: "https://images.pexels.com/photos/17180807/pexels-photo-17180807.jpeg"
  },
  {
    id: "02",
    title: "Heavy Fabrication",
    description: "Custom heavy-duty fabrication solutions with industrial-grade powder coating and finishing.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Electrical Panel Boxes",
    description: "Custom-engineered electrical enclosures, junction boxes, and distribution panels designed for reliability and safety.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Sheet Metal Bending",
    description: "Precision CNC sheet metal bending combined with professional welding and assembly services.",
    image: "https://www.lyah-machining.com/wp-content/uploads/2024/12/Sheet-Metal-Bending-Defects-and-Solutions.jpg"
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header Animation
      gsap.fromTo(".services-header",
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

      // Animate each service block as it enters the viewport
      serviceRefs.current.forEach((el, index) => {
        const isEven = index % 2 === 0;

        gsap.fromTo(el,
          {
            x: isEven ? -50 : 50,
            opacity: 0
          },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
            },
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="services-header text-center mb-20 max-w-3xl mx-auto opacity-0">
          <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Precision Systems & Custom Engineering</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services List - Zig Zag Layout */}
        <div className="space-y-24">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                ref={(el) => (serviceRefs.current[index] = el)}
                className={`flex flex-col opacity-0 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >

                {/* Image Container */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="h-[300px] md:h-[400px] w-full relative group overflow-hidden rounded-tl-[60px] rounded-br-[60px] rounded-tr-[10px] rounded-bl-[10px] shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  {/* Decorative Background Shape */}
                  <div className={`absolute -z-10 w-full h-full bg-purple-50 top-6 ${isEven ? '-left-6' : '-right-6'} rounded-tl-[60px] rounded-br-[60px] rounded-tr-[10px] rounded-bl-[10px]`}></div>
                </div>

                {/* Text Content Container */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <span className="text-6xl font-black text-purple-400 block mb-4 tracking-tighter">
                    {service.id}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-dark">{service.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-6">
                    <button className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group">
                      Learn More
                      <span className="transform transition-transform group-hover:translate-x-2">→</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-32 text-center bg-light p-12 rounded-[40px] border border-purple-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 relative z-10">Built On Precision. Driven By Quality.</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg relative z-10">
            Every project is executed with strict quality control, advanced manufacturing processes, and commitment to engineering excellence.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;