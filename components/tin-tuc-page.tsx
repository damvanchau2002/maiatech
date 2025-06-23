import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TinTucSection from "@/components/tin-tuc-section"
import CtaSection from "@/components/cta-section"

const TinTucPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activePage="TUYỂN DỤNG" />
      <main className="flex-grow">
        <TinTucSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default TinTucPage
