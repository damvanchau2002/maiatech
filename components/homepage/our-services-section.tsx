import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRightCircle } from "lucide-react"

const services = [
  {
    name: "Tư vấn kinh doanh & kỹ thuật",
    image: "/images/services/consulting-technical.png",
  },
  {
    name: "Cho thuê phần mềm dưới dạng dịch vụ",
    image: "/images/services/saas-software.png",
  },
  {
    name: "Hạ tầng số",
    image: "/images/services/digital-infrastructure.png",
  },
  {
    name: "Thiết kế & sáng tạo nội dung số",
    image: "/images/services/digital-content-creation.png",
  },
  {
    name: "Đào tạo & tư vấn hướng nghiệp",
    image: "/images/services/training-career-consulting.png",
  },
]

export default function OurServicesSection() {
  return (
    <section className="py-16 sm:py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16">DỊCH VỤ CỦA CHÚNG TÔI</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/95 text-gray-800 flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                {" "}
                {/* Fixed height for image container */}
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover" // Changed to object-cover to fill the container
                />
              </div>
              <CardContent className="p-4 flex flex-col flex-grow justify-between items-center">
                <h3 className="font-semibold text-base mb-3 h-12 flex items-center justify-center">
                  {" "}
                  {/* Fixed height for title */}
                  {service.name}
                </h3>
                <ArrowRightCircle className="w-8 h-8 text-primary mt-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
