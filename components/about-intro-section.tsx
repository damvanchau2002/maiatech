import Image from "next/image"

export default function AboutIntroSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">GIỚI THIỆU</h1>
            <h2 className="text-5xl font-bold text-maiaBlue-DEFAULT mt-1 mb-6">VỀ CHÚNG TÔI</h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              MaiATech là một doanh nghiệp công nghệ với sứ mệnh phát triển các giải pháp phần mềm sáng tạo, phục vụ
              cộng đồng và mang lại giá trị thiết thực cho khách hàng. Chúng tôi không ngừng đổi mới, sáng tạo để tạo ra
              những sản phẩm và dịch vụ có chất lượng cao, góp phần thúc đẩy sự phát triển của xã hội thông qua công
              nghệ.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/maiatech-circular-logo.png"
              alt="MaiATech Logo Circular"
              width={380}
              height={380}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
