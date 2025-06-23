import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SidebarPost {
  id: number
  title: string
  image: string
  date: string
  slug: string
}

const latestPosts: SidebarPost[] = [
  {
    id: 1,
    title: "Công cụ Meta AI là gì? Tính năng mới ra mắt trên 2 ứng dụng Facebook, Instagram",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    date: "20/02/2025",
    slug: "cong-cu-meta-ai-la-gi",
  },
  {
    id: 2,
    title: "Công cụ Meta AI là gì? Tính năng mới ra mắt trên 2 ứng dụng Facebook, Instagram",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    date: "20/02/2025",
    slug: "cong-cu-meta-ai-la-gi-2",
  },
  {
    id: 3,
    title: "Công cụ Meta AI là gì? Tính năng mới ra mắt trên 2 ứng dụng Facebook, Instagram",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    date: "20/02/2025",
    slug: "cong-cu-meta-ai-la-gi-3",
  },
  {
    id: 4,
    title: "Công cụ Meta AI là gì? Tính năng mới ra mắt trên 2 ứng dụng Facebook, Instagram",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    date: "20/02/2025",
    slug: "cong-cu-meta-ai-la-gi-4",
  },
]

export default function BlogSidebar() {
  return (
    <aside className="space-y-6">
      {/* Latest News */}
      <Card>
        <CardHeader className="bg-maiaBlue-DEFAULT text-white rounded-t-lg">
          <CardTitle className="text-lg font-bold text-center">TIN TỨC MỚI</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-0">
            {latestPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`flex items-start space-x-3 p-4 hover:bg-gray-50 transition-colors ${
                  index !== latestPosts.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={80}
                    height={60}
                    className="rounded object-cover"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-3 leading-tight mb-1">{post.title}</h3>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* View More Button */}
      <div className="text-center">
        <Link
          href="/blog"
          className="inline-block bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-6 rounded transition-colors"
        >
          Xem thêm
        </Link>
      </div>
    </aside>
  )
}
