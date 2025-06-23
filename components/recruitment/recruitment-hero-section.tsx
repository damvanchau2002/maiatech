"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, MapPin, Clock, TrendingUp } from "lucide-react"

const RecruitmentHeroSection: React.FC = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50+", label: "Nhân viên" },
    { icon: <MapPin className="w-6 h-6" />, value: "2", label: "Văn phòng" },
    { icon: <Clock className="w-6 h-6" />, value: "10+", label: "Năm kinh nghiệm" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "100+", label: "Dự án thành công" },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-maiaBlue-DEFAULT to-maiaBlue-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MaiA_Tech-SZvXweFvd1kq6bUm6FUA9onWBxDsiU.png"
          alt="Technology background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              THAM GIA
              <br />
              <span className="text-yellow-400">MAIATECH</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Khám phá cơ hội nghề nghiệp tại MaiATech - nơi công nghệ và sáng tạo hội tụ. Chúng tôi luôn tìm kiếm những
              tài năng để cùng xây dựng tương lai số.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 text-lg"
              >
                <Link href="/tuyen-dung/ung-tuyen">ỨNG TUYỂN NGAY</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-maiaBlue-DEFAULT px-8 py-4 text-lg"
              >
                <Link href="#job-listings">XEM VỊ TRÍ TUYỂN DỤNG</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-yellow-400">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute inset-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold">Cơ hội phát triển</h3>
                  <p className="text-blue-200">Không giới hạn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecruitmentHeroSection
