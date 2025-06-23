"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  GraduationCap,
  Coffee,
  Gamepad2,
  Car,
  Shield,
  TrendingUp,
  Users,
  Clock,
  MapPin,
  Gift,
  Laptop,
} from "lucide-react"

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const benefits: Benefit[] = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Bảo hiểm toàn diện",
    description: "Bảo hiểm y tế, xã hội đầy đủ theo quy định. Bảo hiểm sức khỏe cao cấp cho nhân viên và gia đình.",
    color: "text-red-500",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Đào tạo & Phát triển",
    description: "Ngân sách đào tạo hàng năm, khóa học online, hội thảo chuyên môn và cơ hội học tập liên tục.",
    color: "text-blue-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Lương thưởng cạnh tranh",
    description: "Mức lương hấp dẫn, thưởng hiệu suất, thưởng dự án và xét tăng lương định kỳ 6 tháng/lần.",
    color: "text-green-500",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Thời gian linh hoạt",
    description: "Flexible working time, work from home 2 ngày/tuần, không check-in check-out nghiêm ngặt.",
    color: "text-purple-500",
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Môi trường thoải mái",
    description: "Văn phòng hiện đại, không gian mở, khu vực nghỉ ngơi, coffee & snack miễn phí.",
    color: "text-amber-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team building",
    description: "Du lịch công ty hàng năm, team building hàng quý, các hoạt động gắn kết đội nhóm.",
    color: "text-cyan-500",
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Trang thiết bị hiện đại",
    description: "MacBook/PC cấu hình cao, màn hình 4K, bàn làm việc ergonomic và các thiết bị hỗ trợ.",
    color: "text-gray-600",
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Phúc lợi đặc biệt",
    description: "Quà sinh nhật, quà các ngày lễ, hỗ trợ cưới hỏi, sinh con và các sự kiện đặc biệt.",
    color: "text-pink-500",
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Giải trí & Thể thao",
    description: "Khu vực game, bàn bi-a, gym membership, các câu lạc bộ thể thao và sở thích.",
    color: "text-indigo-500",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Hỗ trợ đi lại",
    description: "Trợ cấp xăng xe, gửi xe miễn phí, shuttle bus và hỗ trợ phương tiện đi lại.",
    color: "text-orange-500",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "An toàn & Bảo mật",
    description: "Môi trường làm việc an toàn, bảo mật thông tin nghiêm ngặt và hỗ trợ 24/7.",
    color: "text-emerald-500",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Vị trí thuận lợi",
    description: "Văn phòng tại trung tâm Hà Nội, gần các tuyến xe bus, dễ dàng di chuyển.",
    color: "text-rose-500",
  },
]

const RecruitmentBenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-maiaBlue-DEFAULT mb-4">TẠI SAO CHỌN MAIATECH?</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Chúng tôi không chỉ cung cấp công việc, mà còn tạo ra một môi trường để bạn phát triển, học hỏi và thực hiện
            những ước mơ nghề nghiệp của mình.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-maiaBlue-DEFAULT"
            >
              <CardContent className="p-6">
                <div className={`${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-maiaBlue-DEFAULT transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-maiaBlue-DEFAULT to-maiaBlue-dark rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Sẵn sàng tham gia đội ngũ MaiATech?</h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Hãy để chúng tôi biết về bạn và cùng nhau xây dựng những sản phẩm công nghệ tuyệt vời!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors">
                Xem tất cả vị trí
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-maiaBlue-DEFAULT font-bold px-8 py-3 rounded-lg transition-colors">
                Gửi CV tự do
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecruitmentBenefitsSection
