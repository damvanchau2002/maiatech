import type React from "react"
import Image from "next/image"
import Link from "next/link"

interface NewsItem {
  id: number
  title: string
  description: string
  link: string
  category: string
  date: string
  featured?: boolean
}

interface GeneralNewsSectionProps {
  newsItems?: NewsItem[]
}

const defaultNewsItems: NewsItem[] = [
  {
    id: 1,
    title: "Công cụ Meta AI là gì? Tính năng mới ra mắt trên 2 ứng dụng Facebook, Instagram",
    description:
      "Meta ra mắt chatbot AI trên Facebook, Instagram, Messenger, WhatsApp, làm đầy tin tự ngại về quyền riêng tư và an toàn dữ liệu. Tìm hiểu về các tính năng mới và cách sử dụng công cụ Meta AI một cách hiệu quả và an toàn.",
    link: "/blog/cong-cu-meta-ai-la-gi",
    category: "CÔNG NGHỆ AI",
    date: "20/02/2025",
    featured: true,
  },
  {
    id: 2,
    title: "Xu hướng phát triển phần mềm doanh nghiệp năm 2025",
    description:
      "Những công nghệ và xu hướng mới nhất trong phát triển phần mềm doanh nghiệp mà các công ty cần quan tâm để tối ưu hóa hiệu quả kinh doanh và nâng cao năng suất làm việc.",
    link: "/blog/xu-huong-phat-trien-phan-mem-2025",
    category: "PHẦN MỀM",
    date: "18/02/2025",
  },
  {
    id: 3,
    title: "Ứng dụng AI trong nông nghiệp thông minh - Tương lai của ngành nông nghiệp",
    description:
      "Cách mà trí tuệ nhân tạo đang thay đổi ngành nông nghiệp và mang lại hiệu quả cao. Từ việc giám sát cây trồng đến tối ưu hóa sản xuất, AI đang tạo ra cuộc cách mạng trong nông nghiệp.",
    link: "/blog/ai-trong-nong-nghiep-thong-minh",
    category: "AI & NÔNG NGHIỆP",
    date: "15/02/2025",
  },
]

const GeneralNewsSection: React.FC<GeneralNewsSectionProps> = ({ newsItems = defaultNewsItems }) => {
  const featuredItem = newsItems.find((item) => item.featured)
  const regularItems = newsItems.filter((item) => !item.featured)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-maiaBlue-DEFAULT mb-4">TIN TỨC CÔNG NGHỆ</h2>
          <div className="w-24 h-1 bg-maiaBlue-DEFAULT mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - 3/4 width */}
          <div className="lg:col-span-3 space-y-6">
            {/* Featured Card */}
            {featuredItem && <FeaturedNewsCard item={featuredItem} />}

            {/* Regular Cards */}
            <div className="space-y-6">
              {regularItems.map((item) => (
                <RegularNewsCard key={item.id} item={item} />
              ))}
            </div>

            {/* Pagination */}
            <PaginationControls />
          </div>

          {/* Sidebar - 1/4 width */}
          <div className="lg:col-span-1">
            <NewsSidebar />
          </div>
        </div>
      </div>
    </section>
  )
}

const FeaturedNewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
        {/* Left Side - Blue Background with Tech Illustration */}
        <div className="bg-maiaBlue-DEFAULT flex items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4e0h5iIj8GC0lE9F8uP9FdhlnJXNbD.svg"
              alt="Technology background pattern"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white leading-tight drop-shadow-lg">
              TIN TỨC
              <br />
              CÔNG NGHỆ
            </h2>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="bg-gray-100 p-6 flex flex-col justify-center">
          <div className="mb-2">
            <span className="inline-block bg-maiaBlue-DEFAULT text-white text-xs font-semibold px-2 py-1 rounded uppercase">
              {item.category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-black mb-3 leading-tight">{item.title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">{item.description}</p>
          <div className="flex items-center justify-between">
            <Link
              href={item.link}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center transition-colors"
            >
              Đọc tiếp &gt;&gt;
            </Link>
            <span className="text-xs text-gray-500">{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const RegularNewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="mb-2">
        <span className="inline-block bg-maiaBlue-DEFAULT text-white text-xs font-semibold px-2 py-1 rounded uppercase">
          {item.category}
        </span>
      </div>
      <h3 className="text-lg font-bold text-black mb-3 leading-tight">{item.title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">{item.description}</p>
      <div className="flex items-center justify-between">
        <Link
          href={item.link}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center transition-colors"
        >
          Đọc tiếp &gt;&gt;
        </Link>
        <span className="text-xs text-gray-500">{item.date}</span>
      </div>
    </div>
  )
}

const PaginationControls: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 pt-4">
      <button
        className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
        aria-label="Previous page"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
        aria-label="Next page"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

const NewsSidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Technology Background Image */}
      <div className="relative h-64 rounded-lg overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MaiA_Tech-rEnzn2fTZ5fRaUxHhiRu1TKEPjH1n0.png"
          alt="MaiATech Technology Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Blue Button */}
      <Link
        href="/blog"
        className="block w-full bg-maiaBlue-DEFAULT hover:bg-maiaBlue-dark text-white font-bold text-center py-4 px-6 rounded-lg transition-colors"
      >
        XEM TẤT CẢ TIN TỨC
      </Link>

      {/* Additional Navigation */}
      <div className="space-y-3">
        <Link
          href="/cong-nghe"
          className="block w-full border border-maiaBlue-DEFAULT text-maiaBlue-DEFAULT hover:bg-maiaBlue-DEFAULT hover:text-white font-medium text-center py-3 px-4 rounded-lg transition-colors"
        >
          CÔNG NGHỆ
        </Link>
        <Link
          href="/du-an"
          className="block w-full border border-maiaBlue-DEFAULT text-maiaBlue-DEFAULT hover:bg-maiaBlue-DEFAULT hover:text-white font-medium text-center py-3 px-4 rounded-lg transition-colors"
        >
          DỰ ÁN
        </Link>
      </div>
    </div>
  )
}

export default GeneralNewsSection
