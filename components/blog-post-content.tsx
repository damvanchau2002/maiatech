import { Calendar, User } from "lucide-react"

interface BlogPostContentProps {
  title: string
  content: string
  author: string
  publishDate: string
  category: string
}

export default function BlogPostContent({ title, content, author, publishDate, category }: BlogPostContentProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm p-6 mb-8">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block bg-maiaBlue-DEFAULT text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
          {category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">{title}</h1>

      {/* Meta Information */}
      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center space-x-1">
          <User className="w-4 h-4" />
          <span>{author}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>{publishDate}</span>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</div>
      </div>
    </article>
  )
}
