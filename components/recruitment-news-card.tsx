import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface RecruitmentNewsCardProps {
  title: string
  description: string
  link: string
  publishDate: string
}

export default function RecruitmentNewsCard({ title, description, link, publishDate }: RecruitmentNewsCardProps) {
  return (
    <Card className="bg-gray-100 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 mb-6">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <Link
            href={link}
            className="text-maiaBlue-DEFAULT hover:text-maiaBlue-dark font-medium text-sm inline-flex items-center"
          >
            Đọc tiếp &gt;&gt;
          </Link>
          <span className="text-xs text-gray-500">{publishDate}</span>
        </div>
      </CardContent>
    </Card>
  )
}
