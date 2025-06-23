import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface RelatedArticle {
  id: number
  title: string
  image: string
  slug: string
}

const relatedArticles: RelatedArticle[] = [
  {
    id: 1,
    title: "Công cụ Meta AI là gì? Tính năng mới ra mắt trên 2 ứng dụng Facebook, Instagram",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    slug: "cong-cu-meta-ai-la-gi-related-1",
  },
  {
    id: 2,
    title: "Công cụ Meta AI là gì? Tính năng mới ra mắt trên 2 ứng dụng Facebook, Instagram",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    slug: "cong-cu-meta-ai-la-gi-related-2",
  },
]

export default function RelatedArticles() {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Bài viết liên quan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedArticles.map((article) => (
          <Link key={article.id} href={`/blog/${article.slug}`} className="group">
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-maiaBlue-DEFAULT transition-colors">
                  {article.title}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
