"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

const bannerSlides = [
  {
    id: 1,
    image: "/images/banners/banner-web-maiatech.jpg",
    alt: "MaiATech - Mai A Technology Company Limited",
  },
  {
    id: 2,
    image: "/images/banners/banner-slide-2.jpg",
    alt: "MaiATech - Công nghệ dẫn đầu, Tương lai Số hóa",
  },
  {
    id: 3,
    image: "/images/banners/banner-slide-3.jpg",
    alt: "MaiATech - Phần mềm, Hạ tầng số, Nội dung số, Đào tạo, AI",
  },
]

export default function HeroSection() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="relative bg-white">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {bannerSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  width={1440}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation - Only show if more than 1 slide */}
        {bannerSlides.length > 1 && (
          <>
            <CarouselPrevious className="left-4 bg-white/80 border-white/30 text-gray-800 hover:bg-white/90" />
            <CarouselNext className="right-4 bg-white/80 border-white/30 text-gray-800 hover:bg-white/90" />
          </>
        )}
      </Carousel>

      {/* Slide Indicators - Only show if more than 1 slide */}
      {bannerSlides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
