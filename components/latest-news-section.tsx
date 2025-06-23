import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  author: string
  publishDate: string
  category: string
  image: string
  slug: string
}

const latestArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Công cụ Meta AI là gì? Tính năng mới ra mắt trên 2 ứng dụng Facebook, Instagram",
    excerpt:
      "Meta ra mắt chatbot AI trên Facebook, Instagram, Messenger, WhatsApp, làm đầy tin tự ngại về quyền riêng tư và...",
    author: "Admin",
    publishDate: "20/02/2025",
    category: "Công nghệ AI",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    slug: "cong-cu-meta-ai-la-gi",
  },
  {
    id: 2,
    title: "Xu hướng phát triển phần mềm doanh nghiệp năm 2025",
    excerpt:
      "Những công nghệ và xu hướng mới nhất trong phát triển phần mềm doanh nghiệp mà các công ty cần quan tâm...",
    author: "Tech Team",
    publishDate: "18/02/2025",
    category: "Phần mềm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    slug: "xu-huong-phat-trien-phan-mem-2025",
  },
  {
    id: 3,
    title: "Hướng dẫn tối ưu hóa website cho SEO trong năm 2025",
    excerpt: "Các kỹ thuật SEO mới nhất giúp website của bạn đạt thứ hạng cao trên công cụ tìm kiếm...",
    author: "Marketing Team",
    publishDate: "15/02/2025",
    category: "Digital Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    slug: "huong-dan-toi-uu-seo-2025",
  },
  {
    id: 4,
    title: "Ứng dụng AI trong nông nghiệp thông minh",
    excerpt: "Cách mà trí tuệ nhân tạo đang thay đổi ngành nông nghiệp và mang lại hiệu quả cao...",
    author: "AI Research Team",
    publishDate: "12/02/2025",
    category: "AI & Nông nghiệp",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    slug: "ai-trong-nong-nghiep-thong-minh",
  },
]

export default function LatestNewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-maiaBlue-DEFAULT mb-4">TIN TỨC MỚI NHẤT</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cập nhật những thông tin mới nhất về công nghệ, phần mềm và các xu hướng phát triển trong ngành
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {latestArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-maiaBlue-DEFAULT text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-maiaBlue-DEFAULT transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">{article.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.publishDate}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-maiaBlue-DEFAULT hover:text-maiaBlue-dark font-medium text-sm group-hover:translate-x-1 transition-transform"
                >
                  Đọc thêm
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-maiaBlue-DEFAULT hover:bg-maiaBlue-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Xem tất cả tin tức
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
