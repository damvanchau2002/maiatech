import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface BlogCardProps {
  title: string
  description: string
  author: string
  date: string
  image: string
  slug: string
}

export default function BlogCard({ title, description, author, date, image, slug }: BlogCardProps) {
  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative w-full h-48">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-maiaBlue-DEFAULT mb-2 line-clamp-2 hover:text-maiaBlue-dark transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Author: {author}</span>
            <span>{date}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
