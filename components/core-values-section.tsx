import Image from "next/image"

export default function CoreValuesSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-center">
          <div>
            <h2 className="text-5xl font-bold">
              <span className="text-maiaBlue-DEFAULT">WHO</span> <span className="text-gray-500">WE ARE</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Niềm tin và giá trị cốt lõi</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Niềm tin về sự tiếp nối: Như dòng nước “luôn ra bể lại mưa về nguồn”, chúng tôi tin rằng không có điều
                gì hoàn toàn dừng lại, không có cái gì hoàn toàn biến mất, mà chúng liên tục thay đổi, chuyển hóa, phát
                sinh, để tạo ra chuỗi nhân – quả dài vô tận. Niềm tin đó giúp chúng tôi luôn có trách nhiệm đến cùng với
                mọi công việc của mình.
              </p>
              <p>
                Giá trị cốt lõi: Đối với khách hàng, đối tác, phương châm của chúng tôi là: hài hòa lợi ích, các bên đều
                có lợi. Trong nội bộ: Đó là nguyên tắc dân chủ trong thảo luận nhưng thống nhất trong hành động, cái
                riêng phải phục tùng cái chung, có lý, có tình. Tạo điều kiện cho tất cả mọi người được phát huy năng
                lực và nhận thành quả tương xứng với hiệu quả công việc của mình.
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/about/core-values-image.png" // Updated image
              alt="Niềm tin và giá trị cốt lõi MaiATech"
              width={500} // Adjusted for typical column width
              height={600} // Adjusted for aspect ratio of image
              className="rounded-lg shadow-lg object-cover max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
