import React, { useEffect, useState, lazy, Suspense } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Facilities = lazy(() => import('./components/Facilities'));
const Services = lazy(() => import('./components/Services'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Footer = lazy(() => import('./components/Footer'));
const Loader = lazy(() => import('./components/Loader'));

// Loading fallback
const LoadingFallback = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // CRITICAL: Ensure ScrollTrigger works on Vercel (server-side rendering fix)
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });

    // 🔥 FIXED: Proper toggleActions for bidirectional animations
    ScrollTrigger.defaults({
      toggleActions: "play reverse play reverse",
      markers: false // Remove in production
    });

    // Refresh ScrollTrigger after all content loads
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Premium Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      clearTimeout(refreshTimer);
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Handle loader complete
  const handleLoaderComplete = () => {
    setIsLoading(false);
    // CRITICAL: Refresh ScrollTrigger after loader disappears
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans text-dark overflow-x-hidden">
      <Suspense fallback={<LoadingFallback />}>
        {isLoading && <Loader onComplete={handleLoaderComplete} />}
        
        <Header />
        <main>
          <Hero />
          <About />
          <Facilities />
          <Services />
          <WhyChooseUs />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;