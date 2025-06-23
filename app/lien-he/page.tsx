import Header from "@/components/header"
import ContactFormSection from "@/components/contact-form-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activePage="LIÊN HỆ" />
      <main className="flex-grow">
        <ContactFormSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
