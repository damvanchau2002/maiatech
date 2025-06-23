import type React from "react"
import Image from "next/image"
import Link from "next/link"

interface NewsItem {
  id: number
  title: string
  description: string
  link: string
  featured?: boolean
}

interface TinTucSectionProps {
  newsItems?: NewsItem[]
}

const defaultNewsItems: NewsItem[] = [
  {
    id: 1,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến. Kỹ năng: sử dụng máy tính thành thạo. Ưu tiên có kinh nghiệm về sử dụng các phần mềm đồ họa (như Canva, Photoshop, AutoCad, 3D Studio Max...), chưa có kinh nghiệm được đào tạo từ đầu.",
    link: "/tuyen-dung/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer",
    featured: true,
  },
  {
    id: 2,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến.",
    link: "/tuyen-dung/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer-2",
  },
  {
    id: 3,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến.",
    link: "/tuyen-dung/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer-3",
  },
  {
    id: 4,
    title: "MaiATech tuyển dụng Lập trình viên Full-stack Developer",
    description:
      "Chúng tôi đang tìm kiếm lập trình viên tài năng với kinh nghiệm React, Node.js. Mức lương hấp dẫn, môi trường làm việc chuyên nghiệp, cơ hội phát triển nghề nghiệp.",
    link: "/tuyen-dung/lap-trinh-vien-fullstack-developer",
  },
  {
    id: 5,
    title: "MaiATech tuyển dụng Chuyên viên Marketing Digital",
    description:
      "Vị trí Marketing Digital với cơ hội phát triển trong môi trường công nghệ. Yêu cầu kinh nghiệm SEO, SEM, Social Media Marketing và các kỹ năng marketing online.",
    link: "/tuyen-dung/chuyen-vien-marketing-digital",
  },
  {
    id: 6,
    title: "MaiATech tuyển dụng Kỹ sư DevOps",
    description:
      "Cơ hội làm việc với các công nghệ cloud hiện đại. Yêu cầu kinh nghiệm Docker, Kubernetes, AWS/Azure và các công cụ CI/CD. Mức lương cạnh tranh.",
    link: "/tuyen-dung/ky-su-devops",
  },
]

const TinTucSection: React.FC<TinTucSectionProps> = ({ newsItems = defaultNewsItems }) => {
  const featuredItem = newsItems.find((item) => item.featured)
  const regularItems = newsItems.filter((item) => !item.featured)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
        {/* Left Side - Red Background with Recruitment Illustration */}
        <div className="bg-red-500 flex items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t%E1%BA%A3i%20xu%E1%BB%91ng%201-PxpKSHJGnyNU8Zf5TYGA4mNTit9uHX.png"
              alt="Tuyển dụng - Recruitment illustration"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-white leading-tight drop-shadow-lg">
              TUYỂN
              <br />
              DỤNG
            </h2>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="bg-gray-100 p-6 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-black mb-4 leading-tight">{item.title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">{item.description}</p>
          <Link
            href={item.link}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center transition-colors"
          >
            Đọc tiếp &gt;&gt;
          </Link>
        </div>
      </div>
    </div>
  )
}

const RegularNewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold text-black mb-3 leading-tight">{item.title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">{item.description}</p>
      <Link
        href={item.link}
        className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center transition-colors"
      >
        Đọc tiếp &gt;&gt;
      </Link>
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
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4e0h5iIj8GC0lE9F8uP9FdhlnJXNbD.svg"
          alt="Technology Circuit Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Blue Button */}
      <Link
        href="/tuyen-dung/tin-tuc"
        className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center py-4 px-6 rounded-lg transition-colors"
      >
        TIN TỨC TUYỂN DỤNG
      </Link>
    </div>
  )
}

export default TinTucSection
