import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";
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
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/30">
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Services />
        <WhyChooseUs />
        <FeaturedProject />
        <LiveOperations />
        <RenewableEnergy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
