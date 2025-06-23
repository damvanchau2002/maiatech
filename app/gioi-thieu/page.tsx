import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutIntroSection from "@/components/about-intro-section"
import DocumentCardsSection from "@/components/document-cards-section"
import TeamSection from "@/components/team-section"
import CoreValuesSection from "@/components/core-values-section" // New
import PartnersSection from "@/components/partners-section" // Will be updated
import DevelopmentFocusSection from "@/components/development-focus-section" // New
import CtaSection from "@/components/cta-section"

export default function GioiThieuPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activePage="GIỚI THIỆU" />
      <main className="flex-grow">
        <AboutIntroSection />
        <DocumentCardsSection />
        <TeamSection />
        <CoreValuesSection />
        <PartnersSection />
        <DevelopmentFocusSection />
        <CtaSection /> {/* Assuming CTA is still desired at the end */}
      </main>
      <Footer />
    </div>
  )
}
