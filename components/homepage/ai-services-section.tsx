import Image from "next/image"

const servicesData = [
  { name: "AI Trainer", icon: "/images/icons/aitranner-robot.svg", row: 1 },
  { name: "Hạ tầng số", icon: "/images/icons/hatangso.svg", row: 1 },
  { name: "AI Box", icon: "/images/icons/aibox.svg", row: 2 },
  { name: "Phần mềm", icon: "/images/icons/phanmem.svg", row: 2 },
  { name: "AI Trainer", icon: "/images/icons/aitranner-book.svg", row: 2 },
  { name: "Nội dung số", icon: "/images/icons/noidungso.svg", row: 3 },
  { name: "Web chuẩn SEO", icon: "/images/icons/web-chuan-seo.svg", row: 3 },
]

const ServiceItem = ({ name, iconSrc }: { name: string; iconSrc: string }) => (
  <div className="flex flex-col items-center space-y-3 text-center">
    <div className="relative w-28 h-28 sm:w-32 sm:h-32">
      <Image src={iconSrc || "/placeholder.svg"} alt={name} fill className="object-contain" />
    </div>
    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{name}</h3>
  </div>
)

export default function AiServicesSection() {
  const row1Services = servicesData.filter((s) => s.row === 1)
  const row2Services = servicesData.filter((s) => s.row === 2)
  const row3Services = servicesData.filter((s) => s.row === 3)

  return (
    <section
      className="py-16 sm:py-20 relative"
      style={{
        backgroundImage: "url('/images/backgrounds/aisle-blur.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-30"></div>{" "}
      {/* Optional: overlay for text readability if needed */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-10 sm:space-y-12">
          {/* Row 1 */}
          <div className="flex justify-around items-start">
            {row1Services.map((service) => (
              <ServiceItem key={service.name + service.row + "1"} name={service.name} iconSrc={service.icon} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-around items-start">
            {row2Services.map((service) => (
              <ServiceItem key={service.name + service.row + "2"} name={service.name} iconSrc={service.icon} />
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex justify-around items-start">
            {row3Services.map((service) => (
              <ServiceItem key={service.name + service.row + "3"} name={service.name} iconSrc={service.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
