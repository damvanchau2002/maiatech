import Header from "@/components/header"
import Footer from "@/components/footer"
import CtaSection from "@/components/cta-section"

import HeroSection from "@/components/homepage/hero-section"
import AiServicesSection from "@/components/homepage/ai-services-section"
import SoftwareSection from "@/components/homepage/software-section"
import DigitalContentSection from "@/components/homepage/digital-content-section"
import FeaturedProjectsSection from "@/components/homepage/featured-projects-section"
import NewsSection from "@/components/homepage/news-section"
import OurServicesSection from "@/components/homepage/our-services-section"
import StatsSection from "@/components/homepage/stats-section"
import TestimonialsSection from "@/components/homepage/testimonials-section"
import TeamSectionHome from "@/components/homepage/team-section-home"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AiServicesSection />
        <SoftwareSection />
        <DigitalContentSection />
        <FeaturedProjectsSection />
        <NewsSection />
        <OurServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <TeamSectionHome />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
