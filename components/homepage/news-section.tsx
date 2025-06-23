import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlayCircle, Clock } from "lucide-react"

const newsItems = [
  {
    category: "TIN TỨC CÔNG NGHỆ",
    title: "MAIATECH TUYỂN DỤNG CỘNG TÁC VIÊN XỬ LÝ DỮ LIỆU HÌNH ẢNH",
    date: "10/01/2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nghe-thuat-quan-ly-nhan-su-1-076UuFQc7AWQggXl4ecKdl0GKDBnQe.svg",
    link: "#",
  },
  {
    category: "SỰ KIỆN CÔNG TY",
    title: "Hội thảo ứng dụng AI trong nông nghiệp thông minh",
    date: "25/12/2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nghe-thuat-quan-ly-nhan-su-1%20%281%29-M4QWchVVXvwleG3vOcTyeUoxbY4mnw.svg",
    link: "#",
  },
  {
    category: "BÀI VIẾT CHUYÊN MÔN",
    title: "Xu hướng phát triển phần mềm doanh nghiệp năm 2025",
    date: "15/11/2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doi%20ngu-wqc3A806ZTHe5EFjBv5CIrwpNZwdNu.svg",
    link: "#",
  },
]

export default function NewsSection() {
  return (
    <section className="py-20 sm:py-24 bg-white text-gray-800 mt-8 mb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl sm:text-5xl font-black text-center text-gray-800 mb-12 sm:mb-16 uppercase tracking-wider"
          style={{
            fontFamily: "Roboto, sans-serif",
            letterSpacing: "0.05em",
            fontWeight: 900,
          }}
        >
          TIN TỨC
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 overflow-hidden">
          {/* Left Column: Featured Video/News - Fixed width and spacing */}
          <div className="w-full">
            <a
              href="#"
              className="block relative w-full aspect-[16/10] rounded-xl overflow-hidden group cursor-pointer shadow-2xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nghe-thuat-quan-ly-nhan-su-1%20%283%29-kDbLr0RB0sKmQ8sDXwtZtTqpQcyBfW.png"
                alt="Featured News Video"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 opacity-75 group-hover:opacity-100">
                <PlayCircle className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
            </a>
          </div>

          {/* Right Column: News List - Fixed width and spacing */}
          <div className="w-full">
            <div className="bg-primary p-6 rounded-xl h-full flex flex-col justify-between shadow-2xl">
              <div className="space-y-5">
                {newsItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="flex items-start space-x-4 group hover:bg-maiaBlue-dark/20 p-3 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={80}
                        height={60}
                        className="rounded-md object-cover w-[80px] h-[60px] border-2 border-blue-300/50 group-hover:border-white transition-colors"
                      />
                    </div>
                    <div className="flex-grow min-w-0 max-w-full overflow-hidden">
                      <p className="text-xs font-bold text-blue-200 uppercase tracking-wide group-hover:text-blue-100 transition-colors truncate">
                        {item.category}
                      </p>
                      <h3 className="font-semibold text-sm text-white leading-tight mt-0.5 group-hover:text-yellow-300 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-blue-300 mt-1 group-hover:text-blue-200 transition-colors">
                        {item.date}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-maiaBlue-dark text-white font-semibold text-base sm:text-lg rounded-full py-3 px-10 shadow-lg hover:shadow-xl transition-all"
          >
            Xem thêm
          </Button>
        </div>

        <div className="flex justify-end mt-10 text-gray-500">
          <Clock className="w-5 h-5" />
        </div>
      </div>
    </section>
  )
}
