import Header from "@/components/header"
import Footer from "@/components/footer"
import TechnologySection from "@/components/technology-section"
import CtaSection from "@/components/cta-section"

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activePage="CÔNG NGHỆ" />
      <main className="flex-grow">
        <TechnologySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
