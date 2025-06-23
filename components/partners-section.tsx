"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const partnersData = [
  {
    name: "VNUA",
    src: "/placeholder.svg?width=100&height=100", // Placeholder
    width: 100,
    height: 100,
    description: "Học viện Nông nghiệp Việt Nam",
  },
  {
    name: "Hoàng Thành Thăng Long",
    src: "/images/partner-hoang-thanh.png",
    width: 100,
    height: 100,
    description: "Hoàng Thành Thăng Long",
  },
  {
    name: "Ben Computer",
    src: "/images/partner-ben-computer.png",
    width: 120,
    height: 50,
    description: "Ben Computer",
  },
  { name: "EVN", src: "/images/partner-evn.png", width: 100, height: 100, description: "EVN" },
  // Add more partners for carousel to be more effective
  {
    name: "VNUA2",
    src: "/placeholder.svg?width=100&height=100", // Placeholder
    width: 100,
    height: 100,
    description: "Học viện Nông nghiệp Việt Nam 2",
  },
  {
    name: "Hoàng Thành Thăng Long2",
    src: "/images/partner-hoang-thanh.png", // Reusing for example
    width: 100,
    height: 100,
    description: "Hoàng Thành Thăng Long 2",
  },
]

export default function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      {" "}
      {/* Light gray background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-maiaBlue-DEFAULT mb-4">ĐỐI TÁC</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-base leading-relaxed">
          {" "}
          {/* Gray text */}
          Chúng tôi tin vào việc thiết lập các mối quan hệ. Chúng tôi đã xây dựng quan hệ đối tác trong suốt lịch sử của
          mình. Hợp tác là nghệ thuật đạt được kết quả bằng sự tin tưởng.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: partnersData.length > 4, // Adjust based on number of visible items
            slidesToScroll: 1,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {partnersData.map((partner, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center"
              >
                <div title={partner.description} className="flex items-center justify-center h-24">
                  <Image
                    src={partner.src || "/placeholder.svg"}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain max-h-16 transition-opacity duration-300 hover:opacity-80"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-maiaBlue-DEFAULT bg-white hover:bg-gray-200 rounded-full w-10 h-10 sm:w-12 sm:h-12 -left-2 sm:-left-4 md:-left-6 disabled:bg-gray-300 disabled:text-gray-500" />
          <CarouselNext className="text-maiaBlue-DEFAULT bg-white hover:bg-gray-200 rounded-full w-10 h-10 sm:w-12 sm:h-12 -right-2 sm:-right-4 md:-right-6 disabled:bg-gray-300 disabled:text-gray-500" />
        </Carousel>
      </div>
    </section>
  )
}
