import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, FileText, MessageCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contactBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(".contact-info-animate",
        { x: -50, opacity: 0 },
        { scrollTrigger: { trigger: ".contact-section", start: "top 75%" }, x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(".form-input-animate",
        { y: 30, opacity: 0 },
        { scrollTrigger: { trigger: ".contact-section", start: "top 70%" }, y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.5)" }
      );

      gsap.fromTo(".footer-col",
        { y: 50, opacity: 0 },
        { scrollTrigger: { trigger: ".main-footer", start: "top 80%" }, y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if(!contactBoxRef.current) return;
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 40; 
    const yPos = (clientY / window.innerHeight - 0.5) * 40;

    gsap.to('.orb-1', { x: xPos, y: yPos, duration: 1.5, ease: "power2.out" });
    gsap.to('.orb-2', { x: -xPos, y: -yPos, duration: 1.5, ease: "power2.out" });
  };

  return (
    <div ref={footerRef}>
      
      {/* Contact Section - LEFT ALIGNED (Untouched as requested) */}
      <section 
        id="contact" 
        className="contact-section py-16 md:py-32 bg-slate-50 relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Get In Touch</h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-dark leading-tight">
              Let's Build Something <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Great Together</span>
            </h2>
          </div>

          <div 
            ref={contactBoxRef}
            className="bg-white rounded-[30px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100"
          >
            
            {/* Left Side: Dark Contact Info Panel (Original Left Alignment) */}
            <div className="lg:w-2/5 bg-dark p-8 md:p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="orb-1 absolute -top-20 -right-20 w-64 h-64 md:w-80 md:h-80 bg-primary/30 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="orb-2 absolute -bottom-20 -left-20 w-64 h-64 md:w-80 md:h-80 bg-secondary/20 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="contact-info-animate text-2xl md:text-3xl font-bold mb-6">Contact Information</h3>
                <p className="contact-info-animate text-gray-400 mb-10 text-sm md:text-base">Fill up the form and our Team will get back to you within 24 hours.</p>

                <div className="space-y-8">
                  <div className="contact-info-animate flex items-start gap-4 group">
                    <MapPin className="text-secondary group-hover:text-white transition-colors mt-1 shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-base md:text-lg">Our Location</h4>
                      <p className="text-gray-400 text-sm leading-relaxed mt-1">Plot No. 03, Sr. No. 101, Wadmukhwadi Road, Tapkir Nagar, Khadi Machine Road, Bhosari - 412105</p>
                    </div>
                  </div>

                  <div className="contact-info-animate flex items-start gap-4 group">
                    <Phone className="text-secondary group-hover:text-white transition-colors mt-1 shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-base md:text-lg">Contact Numbers</h4>
                      <p className="text-gray-400 text-sm mt-1">+91 7020493239</p>
                      <p className="text-gray-400 text-sm mt-1">+91 9222089025</p>
                    </div>
                  </div>

                  <div className="contact-info-animate flex items-start gap-4 group">
                    <Mail className="text-secondary group-hover:text-white transition-colors mt-1 shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-base md:text-lg">Email Address</h4>
                      <p className="text-gray-400 text-sm mt-1 break-all">entiresolutions20@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-info-animate relative z-10 mt-12 p-5 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4">
                <FileText className="text-secondary shrink-0" size={28} />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">GST Number</p>
                  <p className="font-mono text-sm md:text-lg font-semibold tracking-wide text-white">27AAIFE3965C1ZG</p>
                </div>
              </div>
            </div>

            {/* Right Side: Animated Minimalist Form */}
            <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 bg-white">
              <h3 className="form-input-animate text-2xl md:text-3xl font-bold text-dark mb-8 md:mb-10">Send us a message</h3>
              
              <form className="space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="form-input-animate relative group">
                    <input type="text" id="name" className="w-full bg-transparent border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary transition-colors peer text-dark placeholder-transparent" placeholder="Full Name" />
                    <label htmlFor="name" className="absolute left-0 -top-5 text-sm font-bold text-gray-400 peer-focus:text-primary transition-colors">Full Name</label>
                  </div>
                  
                  <div className="form-input-animate relative group">
                    <input type="tel" id="phone" className="w-full bg-transparent border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary transition-colors peer text-dark placeholder-transparent" placeholder="Phone Number" />
                    <label htmlFor="phone" className="absolute left-0 -top-5 text-sm font-bold text-gray-400 peer-focus:text-primary transition-colors">Phone Number</label>
                  </div>
                </div>

                <div className="form-input-animate relative group">
                  <input type="email" id="email" className="w-full bg-transparent border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary transition-colors peer text-dark placeholder-transparent" placeholder="Email Address" />
                  <label htmlFor="email" className="absolute left-0 -top-5 text-sm font-bold text-gray-400 peer-focus:text-primary transition-colors">Email Address</label>
                </div>

                <div className="form-input-animate relative group">
                  <textarea id="message" rows="3" className="w-full bg-transparent border-b-2 border-gray-200 py-2 focus:outline-none focus:border-primary transition-colors peer text-dark placeholder-transparent resize-none" placeholder="Message Requirement"></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-5 text-sm font-bold text-gray-400 peer-focus:text-primary transition-colors">Message Requirement</label>
                </div>

                <div className="form-input-animate pt-4">
                  <button type="button" className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-dark text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors group">
                    Submit Request 
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- MEGA FOOTER - CENTERED ON MOBILE ONLY --- */}
      <footer className="main-footer bg-[#0f0c29] pt-16 md:pt-20 pb-8 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12 md:mb-16">
            
            {/* Col 1: Brand Info */}
            <div className="footer-col space-y-5 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-300">
                ENTIRE SOLUTIONS
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed md:pr-4">
                Premium light and heavy engineering fabrication solutions tailored comprehensively for high-performance industrial and commercial environments.
              </p>
              
              <div className="flex justify-center md:justify-start gap-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="footer-col text-center md:text-left">
              <h4 className="text-lg font-bold mb-5 border-b border-white/10 pb-3 inline-block">Quick Links</h4>
              <ul className="space-y-3 w-full">
                {['Home', 'About Us', 'Our Services', 'Facilities', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-2 text-sm group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Industries */}
            <div className="footer-col text-center md:text-left">
              <h4 className="text-lg font-bold mb-5 border-b border-white/10 pb-3 inline-block">Industries We Serve</h4>
              <ul className="space-y-3 w-full">
                {['Renewable Energy', 'Electrical & Power', 'Automotive Engineering', 'Industrial Equipment', 'Infrastructure'].map((ind) => (
                  <li key={ind} className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-2">
                    <span className="text-secondary">✦</span> {ind}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Reach Us */}
            <div className="footer-col text-center md:text-left">
              <h4 className="text-lg font-bold mb-5 border-b border-white/10 pb-3 inline-block">Reach Us</h4>
              <div className="space-y-6 md:space-y-4">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2 md:gap-3">
                  <Phone size={20} className="text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 md:mb-0">Direct Line</p>
                    <a href="tel:+917020493239" className="text-gray-300 hover:text-white text-sm font-semibold">+91 7020493239</a>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2 md:gap-3">
                  <Mail size={20} className="text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 md:mb-0">Email Us</p>
                    <a href="mailto:entiresolutions20@gmail.com" className="text-gray-300 hover:text-white text-sm font-semibold break-all">entiresolutions20@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="footer-col pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-xs md:text-sm">
              © 2026 ENTIRE SOLUTIONS. ALL RIGHTS RESERVED.
            </p>
            <p className="text-gray-500 text-xs md:text-sm flex items-center gap-2">
              Developed by <span className="text-white font-semibold">Qiro Tech Innovation Pvt. Ltd.</span>
            </p>
          </div>

        </div>
      </footer>

      <a 
        href="https://wa.me/917020493239" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform z-50 flex items-center justify-center group"
      >
        <MessageCircle size={28} className="md:w-8 md:h-8" />
      </a>

    </div>
  );
};

export default Footer;