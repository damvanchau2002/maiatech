import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface RecruitmentHeroCardProps {
  title: string
  description: string
  link: string
}

export default function RecruitmentHeroCard({ title, description, link }: RecruitmentHeroCardProps) {
  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[300px]">
          {/* Left Side - Recruitment Illustration */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center p-8">
            <div className="text-center text-white">
              <div className="mb-4">
                {/* Megaphone Icon Illustration */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📢</span>
                    </div>
                  </div>
                  {/* Person illustration */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👨‍💼</span>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-2">TUYỂN</h2>
              <h2 className="text-4xl font-bold">DỤNG</h2>
            </div>
          </div>

          {/* Right Side - Job Details */}
          <div className="bg-gray-100 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
            <Link
              href={link}
              className="text-maiaBlue-DEFAULT hover:text-maiaBlue-dark font-medium text-sm inline-flex items-center"
            >
              Đọc tiếp &gt;&gt;
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
