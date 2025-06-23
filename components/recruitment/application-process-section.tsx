"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Search, Users, CheckCircle, ArrowRight } from "lucide-react"

interface ProcessStep {
  step: number
  icon: React.ReactNode
  title: string
  description: string
  duration: string
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: <FileText className="w-8 h-8" />,
    title: "Nộp đơn ứng tuyển",
    description:
      "Gửi CV và thư xin việc qua form online hoặc email. Chúng tôi sẽ xem xét hồ sơ của bạn trong vòng 24-48h.",
    duration: "1-2 ngày",
  },
  {
    step: 2,
    icon: <Search className="w-8 h-8" />,
    title: "Sàng lọc hồ sơ",
    description:
      "HR sẽ review CV và liên hệ với các ứng viên phù hợp để sắp xếp lịch phỏng vấn qua điện thoại hoặc video call.",
    duration: "2-3 ngày",
  },
  {
    step: 3,
    icon: <Users className="w-8 h-8" />,
    title: "Phỏng vấn",
    description:
      "Phỏng vấn với HR và technical lead. Đánh giá kỹ năng chuyên môn, soft skills và cultural fit với công ty.",
    duration: "1 tuần",
  },
  {
    step: 4,
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Thông báo kết quả",
    description:
      "Chúng tôi sẽ thông báo kết quả và thảo luận về mức lương, ngày bắt đầu làm việc cùng các điều khoản khác.",
    duration: "3-5 ngày",
  },
]

const ApplicationProcessSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-maiaBlue-DEFAULT mb-4">QUY TRÌNH TUYỂN DỤNG</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Quy trình tuyển dụng minh bạch, nhanh chóng và chuyên nghiệp để tìm ra những ứng viên phù hợp nhất.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-maiaBlue-DEFAULT text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="text-maiaBlue-DEFAULT mb-4 mt-4 flex justify-center">{step.icon}</div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>

                    {/* Duration */}
                    <div className="inline-flex items-center bg-blue-50 text-maiaBlue-DEFAULT px-3 py-1 rounded-full text-sm font-medium">
                      <span>{step.duration}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-maiaBlue-DEFAULT" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">TIPS CHO ỨNG VIÊN</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">CV chuyên nghiệp</h4>
                <p className="text-gray-600 text-sm">
                  Chuẩn bị CV rõ ràng, súc tích với thông tin liên quan đến vị trí ứng tuyển.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Tìm hiểu công ty</h4>
                <p className="text-gray-600 text-sm">
                  Nghiên cứu về MaiATech, sản phẩm và văn hóa công ty trước khi phỏng vấn.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Chuẩn bị câu hỏi</h4>
                <p className="text-gray-600 text-sm">
                  Chuẩn bị những câu hỏi thông minh về công việc và cơ hội phát triển.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-maiaBlue-DEFAULT to-maiaBlue-dark rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Có câu hỏi về quy trình tuyển dụng?</h3>
            <p className="text-blue-100 mb-6">
              Đội ngũ HR của chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>hr@maiatech.com.vn</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>0936.486.486</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationProcessSection
