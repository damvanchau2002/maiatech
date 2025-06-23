import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface RecruitmentJobCardProps {
  title: string
  description: string
  link: string
}

export default function RecruitmentJobCard({ title, description, link }: RecruitmentJobCardProps) {
  return (
    <Card className="bg-gray-100 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 mb-6">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        <Link
          href={link}
          className="text-maiaBlue-DEFAULT hover:text-maiaBlue-dark font-medium text-sm inline-flex items-center"
        >
          Đọc tiếp &gt;&gt;
        </Link>
      </CardContent>
    </Card>
  )
}
