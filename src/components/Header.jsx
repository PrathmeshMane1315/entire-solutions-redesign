import React, { useEffect, useState, useCallback } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleMenu = useCallback(() => setIsOpen(p => !p), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Updated All Sections Links Here
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#why-us' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center gap-3">
                <img 
                  src="https://entire-solutions.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75" 
                  alt="Logo" 
                  className="h-10 md:h-12 object-contain"
                />
              </a>
            </div>

            {/* Desktop Menu - PURANA CODE WAISE HI */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm lg:text-base font-semibold transition-colors duration-300 ${
                    isScrolled
                      ? 'text-dark hover:text-primary'
                      : 'text-gray-100 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button - NEW PREMIUM DESIGN */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`relative w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gray-100 text-gray-800' 
                    : isScrolled 
                      ? 'text-gray-700 hover:bg-gray-100' 
                      : 'text-white hover:bg-white/20'
                }`}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <span className={`absolute left-0 w-5 h-[2px] rounded-full transition-all duration-300 ease-out ${
                    isOpen ? 'top-[9px] rotate-45 bg-gray-800' : 'top-1 bg-current'
                  }`} />
                  <span className={`absolute left-0 top-[9px] w-5 h-[2px] rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-0' : 'opacity-100 bg-current'
                  }`} />
                  <span className={`absolute left-0 w-5 h-[2px] rounded-full transition-all duration-300 ease-out ${
                    isOpen ? 'top-[9px] -rotate-45 bg-gray-800' : 'top-[17px] bg-current'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE FULL-SCREEN OVERLAY - NEW DESIGN ===== */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        {/* Slide Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[340px] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <img 
                src="https://entire-solutions.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75" 
                alt="Logo" 
                className="h-8 w-auto object-contain"
              />
            </div>
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="px-4 py-6 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-all duration-300"
                style={{
                  animation: isOpen ? `slideIn 0.4s ease-out ${index * 0.05}s both` : 'none'
                }}
              >
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-300" />
                  {link.name}
                </span>
                <ChevronRight size={18} className="text-gray-400" />
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-center w-full py-3.5 bg-purple-600 text-white rounded-xl font-bold text-[15px] shadow-lg shadow-purple-600/30 hover:bg-purple-700 hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
            >
              <Phone size={18} className="mr-2" />
              Get Free Quote
              <ChevronRight size={18} className="ml-1" />
            </a>
            <p className="text-center text-xs text-gray-400 mt-4 font-medium">
              © 2026 Entire Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;