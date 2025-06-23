import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const developmentAreas = [
  {
    iconSrc: "/images/about/icon-dev-projects.png",
    altText: "Phát triển dự án icon",
    title: "PHÁT TRIỂN CÁC DỰ ÁN",
    description: "MÁY ĐO THEO YÊU CẦU ĐỂ TÍCH LŨY KINH NGHIỆM, VỐN, UY TÍN, MỞ RỘNG DANH MỤC KHÁCH HÀNG.",
  },
  {
    iconSrc: "/images/about/icon-dev-services.png",
    altText: "Phát triển dịch vụ icon",
    title: "PHÁT TRIỂN CÁC DỊCH VỤ",
    description: "THEO MÔ HÌNH 'PHẦN MỀM NHƯ MỘT DỊCH VỤ' (SOFTWARE AS A SERVICE - SAAS) TRÊN NỀN TẢNG INTERNET.",
  },
  {
    iconSrc: "/images/about/icon-dev-core-tech.png",
    altText: "Nghiên cứu phát triển công nghệ lõi icon",
    title: "NGHIÊN CỨU PHÁT TRIỂN",
    description: "CÔNG NGHỆ LÕI",
  },
]

export default function DevelopmentFocusSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      {" "}
      {/* White background as per previous full screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-maiaBlue-DEFAULT text-center mb-12">PHƯƠNG HƯỚNG PHÁT TRIỂN</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developmentAreas.map((area, index) => (
            <Card
              key={index}
              className="border-2 border-maiaBlue-DEFAULT rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="relative w-20 h-20 mb-5">
                  {" "}
                  {/* Container for icon */}
                  <Image
                    src={area.iconSrc || "/placeholder.svg"}
                    alt={area.altText}
                    width={80}
                    height={80}
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 uppercase">{area.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
