import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ShatterReveal } from "@/components/ShatterReveal";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Facilities } from "@/components/Facilities";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FeaturedProject } from "@/components/FeaturedProject";
import { LiveOperations } from "@/components/LiveOperations";
import { RenewableEnergy } from "@/components/RenewableEnergy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/30 cursor-none">
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ShatterReveal delay={0}>
          <About />
        </ShatterReveal>
        <ShatterReveal delay={0.05}>
          <Facilities />
        </ShatterReveal>
        <ShatterReveal delay={0}>
          <Services />
        </ShatterReveal>
        <ShatterReveal delay={0.05}>
          <WhyChooseUs />
        </ShatterReveal>
        <ShatterReveal delay={0}>
          <FeaturedProject />
        </ShatterReveal>
        <ShatterReveal delay={0.05}>
          <LiveOperations />
        </ShatterReveal>
        <ShatterReveal delay={0}>
          <RenewableEnergy />
        </ShatterReveal>
        <ShatterReveal delay={0.05}>
          <Contact />
        </ShatterReveal>
      </main>
      <Footer />
    </div>
  );
}
