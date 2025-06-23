import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Cung cấp phần mềm giám sát cho các thiết bị mạng cho Công ty Cổ phần Mai Thị (2022)",
    image: "/images/projects/kpi-meeting.png",
  },
  {
    title: "Tư vấn và triển khai hệ thống ERP cho doanh nghiệp sản xuất ABC (2023)",
    image: "/images/projects/kpi-meeting.png",
  },
  {
    title: "Xây dựng nền tảng du lịch số 3D/VR cho khu di tích Hoàng Thành Thăng Long (2021)",
    image: "/images/projects/kpi-meeting.png",
  },
]

export default function FeaturedProjectsSection() {
  return (
    <section className="py-16 sm:py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16">DỰ ÁN TIÊU BIỂU</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="bg-white text-gray-800 text-left rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Project: ${project.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm font-medium leading-relaxed h-20">
                  {" "}
                  {/* Set a fixed height for description */}
                  {project.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-200">
          Xem thêm
        </Button>
      </div>
    </section>
  )
}
