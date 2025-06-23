import Header from "@/components/header"
import Footer from "@/components/footer"
import TinTucSection from "@/components/tin-tuc-section"
import CtaSection from "@/components/cta-section"

export default function TinTucPageRoute() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activePage="BLOG" />
      <main className="flex-grow">
        {/* Recruitment News Section */}
        <TinTucSection />

        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
