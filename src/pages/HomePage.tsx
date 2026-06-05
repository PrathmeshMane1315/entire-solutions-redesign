import HeroSection from '../components/HeroSection.tsx'
import AboutSection from '../components/AboutSection.tsx'
import EngineeringDivision from '../components/EngineeringDivision.tsx'
import ServicesSection from '../components/ServicesSection.tsx'
import ProjectsSection from '../components/ProjectsSection.tsx'
import ProcessSection from '../components/ProcessSection.tsx'
import TestimonialsSection from '../components/TestimonialsSection.tsx'
import ContactSection from '../components/ContactSection.tsx'
import Footer from '../components/Footer.tsx'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EngineeringDivision />
      <ServicesSection />
      {/* <ProjectsSection /> */}
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}