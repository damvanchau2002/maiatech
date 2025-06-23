import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogGrid from "@/components/blog-grid"
import CtaSection from "@/components/cta-section"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activePage="BLOG" />
      <main className="flex-grow">
        <BlogGrid />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
