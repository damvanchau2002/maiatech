import type React from "react"
import TinTucSection from "./tin-tuc-section"
import { useNewsData } from "@/hooks/use-news-data"

const TinTucWithPagination: React.FC = () => {
  const { newsItems, loading, error, currentPage, totalPages, setCurrentPage } = useNewsData(4)

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
            <div className="space-y-4">
              <div className="h-32 bg-gray-200 rounded-lg"></div>
              <div className="h-32 bg-gray-200 rounded-lg"></div>
              <div className="h-32 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-red-600 text-lg">{error}</div>
        </div>
      </section>
    )
  }

  return <TinTucSection newsItems={newsItems} />
}

export default TinTucWithPagination
