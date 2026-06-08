import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // 🔥 MAGIC LINE: Isse puri website ki animations dono taraf chalengi (Play & Reverse)
    ScrollTrigger.defaults({
      toggleActions: "play reverse play reverse" 
    });

    // Premium Smooth Scrolling Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill()); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white font-sans text-dark overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;