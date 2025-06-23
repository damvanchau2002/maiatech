import Image from "next/image"
import Link from "next/link"

interface NewsItem {
  id: number
  title: string
  description: string
  link: string
  featured?: boolean
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến. Kỹ năng: sử dụng máy tính thành thạo. Ưu tiên có kinh nghiệm về sử dụng các phần mềm đồ họa (như Canva, Photoshop, AutoCad, 3D Studio Max...), chưa có kinh nghiệm được đào tạo từ đầu.",
    link: "/tuyen-dung/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer",
    featured: true,
  },
  {
    id: 2,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến.",
    link: "/tuyen-dung/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer-2",
  },
  {
    id: 3,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến.",
    link: "/tuyen-dung/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer-3",
  },
]

export default function FigmaNewsSection() {
  const featuredItem = newsItems.find((item) => item.featured)
  const regularItems = newsItems.filter((item) => !item.featured)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - 3/4 width */}
          <div className="lg:col-span-3 space-y-6">
            {/* Featured Card */}
            {featuredItem && (
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
                  {/* Left Side - Red Background with Illustration */}
                  <div className="bg-red-500 flex items-center justify-center p-8 relative">
                    <div className="text-center">
                      {/* Character with Megaphone */}
                      <div className="relative mb-4">
                        <div className="w-24 h-24 mx-auto mb-4">
                          <div className="relative">
                            {/* Character illustration */}
                            <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-2xl">👨‍💼</span>
                            </div>
                            {/* Megaphone */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                              <span className="text-lg">📢</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="text-4xl font-bold text-white leading-tight">
                        TUYỂN
                        <br />
                        DỤNG
                      </h2>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="bg-gray-100 p-6 flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-black mb-4 leading-tight">{featuredItem.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                      {featuredItem.description}
                    </p>
                    <Link
                      href={featuredItem.link}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                    >
                      Đọc tiếp &gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Regular Cards */}
            <div className="space-y-6">
              {regularItems.map((item) => (
                <div key={item.id} className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-black mb-3 leading-tight">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{item.description}</p>
                  <Link
                    href={item.link}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                  >
                    Đọc tiếp &gt;&gt;
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center space-x-2 pt-4">
              <button className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center text-gray-600 hover:bg-gray-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sidebar - 1/4 width */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Technology Background Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MaiA_Tech-YES8WiorsH2pmX0ePxpSAnRdV0pTay.png"
                  alt="Technology Circuit Background"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blue Button */}
              <Link
                href="/tuyen-dung/tin-tuc"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center py-4 px-6 rounded-lg transition-colors"
              >
                TIN TỨC TUYỂN DỤNG
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
