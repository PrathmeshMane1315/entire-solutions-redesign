import React from 'react'
import HeroSection from '@components/sections/HeroSection/HeroSection'
import AboutSection from '@components/sections/AboutSection/AboutSection'
import EngineeringSection from '@components/sections/EngineeringSection/EngineeringSection'
import ServicesSection from '@components/sections/ServicesSection/ServicesSection'
import WhyChooseSection from '@components/sections/WhyChooseSection/WhyChooseSection'
import ProjectsSection from '@components/sections/ProjectsSection/ProjectsSection'
import IndustriesSection from '@components/sections/IndustriesSection/IndustriesSection'
import PartnersSection from '@components/sections/PartnersSection/PartnersSection'
import ClientsSection from '@components/sections/ClientsSection/ClientsSection'
import ContactSection from '@components/sections/ContactSection/ContactSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EngineeringSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectsSection />
      <IndustriesSection />
      <PartnersSection />
      <ClientsSection />
      <ContactSection />
    </>
  )
}

export default Home
