"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const teamMembers = [
  {
    name: "Lê Thị Loan",
    role: "Member of Directory",
    imageSrc: "/images/team/le-thi-loan.svg", // Updated to SVG
  },
  {
    name: "Lê Đoàn Phước",
    role: "CEO",
    imageSrc: "/images/team/le-doan-phuoc.svg", // Updated to SVG
  },
  {
    name: "Dằm Phương Đồng",
    role: "PM of ECom Project",
    imageSrc: "/images/team/dam-phuong-dong.svg", // Updated to SVG
  },
  // Example for looping, update if you have a fourth unique member or remove if not needed for design
  {
    name: "Lê Thị Loan 2", // Placeholder if you need more items for carousel visual
    role: "Member of Directory",
    imageSrc: "/images/team/le-thi-loan.svg", // Reusing for example
  },
]

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">ĐỘI NGŨ CỦA CHÚNG TÔI</h2>
        <Carousel
          opts={{
            align: "start",
            loop: teamMembers.length > 2, // Adjust if you have exactly 3 items and don't want loop
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-transparent border-none text-center">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-white shadow-lg p-1 mb-4">
                        <Image
                          src={member.imageSrc || "/placeholder.svg?width=192&height=192&query=Profile+Picture"}
                          alt={member.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-white">{member.name}</h3>
                      <p className="text-sm sm:text-base text-gray-200">{member.role}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="text-primary bg-white hover:bg-gray-100 disabled:bg-gray-200 disabled:text-gray-400
                       rounded-full w-10 h-10 sm:w-12 sm:h-12 
                       absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 md:-left-8 lg:-left-10 z-10"
          />
          <CarouselNext
            className="text-primary bg-white hover:bg-gray-100 disabled:bg-gray-200 disabled:text-gray-400
                       rounded-full w-10 h-10 sm:w-12 sm:h-12 
                       absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 md:-right-8 lg:-right-10 z-10"
          />
        </Carousel>
      </div>
    </section>
  )
}
