"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 bg-gray-800 text-white">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feedback-kdQacMATR0zLLaat6nbO1p5jjW4CLS.svg"
        alt="Testimonial background"
        fill
        className="object-cover opacity-20"
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">ĐÁNH GIÁ CỦA KHÁCH HÀNG</h2>
        <Carousel opts={{ loop: true }} className="w-full max-w-2xl mx-auto">
          <CarouselContent>
            {[...Array(3)].map((_, i) => (
              <CarouselItem key={i}>
                <Card className="bg-white/90 text-gray-800 backdrop-blur-sm">
                  <CardContent className="p-8 text-left space-y-4">
                    <p className="italic">
                      "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt
                      ut."
                    </p>
                    <div className="flex items-center space-x-3">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coVN-set8tfkxtMPdi3aR5TCciC0dfkdIRW.svg"
                        alt="Nguyễn Văn A"
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold">Nguyễn Văn A</p>
                        <p className="text-sm text-gray-600">Khách hàng</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px]" />
          <CarouselNext className="right-[-50px]" />
        </Carousel>
      </div>
    </section>
  )
}
