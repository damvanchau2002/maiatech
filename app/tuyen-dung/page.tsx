import Header from "@/components/header"
import Footer from "@/components/footer"
import JobApplicationForm from "@/components/job-application-form"
import CtaSection from "@/components/cta-section"

export default function RecruitmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activePage="TUYỂN DỤNG" />
      <main className="flex-grow">
        <JobApplicationForm />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
