import Header from "@/components/header"
import Footer from "@/components/footer"
import JobApplicationForm from "@/components/job-application-form"

export default function JobApplicationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activePage="TUYỂN DỤNG" />
      <main className="flex-grow">
        <JobApplicationForm />
      </main>
      <Footer />
    </div>
  )
}
