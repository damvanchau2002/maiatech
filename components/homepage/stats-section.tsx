import Image from "next/image"

const stats = [
  { icon: "/images/stats/icon-experience.png", value: "10+", label: "Năm kinh nghiệm" },
  { icon: "/images/stats/icon-projects.png", value: "100+", label: "Dự án" },
  { icon: "/images/stats/icon-customers.png", value: "100+", label: "Khách hàng" },
]

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 sm:mb-16">
          NHỮNG CON SỐ THỂ HIỆN CHẤT LƯỢNG
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36">
                <Image
                  src={stat.icon || "/placeholder.svg"}
                  alt={`${stat.label} icon`}
                  fill
                  className="object-contain" // Use contain to ensure the whole icon is visible
                />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-primary">{stat.value}</p>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
