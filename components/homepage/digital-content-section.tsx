import Image from "next/image"

const contentServicesData = [
  {
    name: "Triển lãm số 360/3D/VR/AR",
    icon: "/images/icons/digital-content/trien-lam-so.png",
  },
  {
    name: "Quay dựng Video",
    icon: "/images/icons/digital-content/quay-dung-video.png",
  },
  {
    name: "Du lịch số 360/3D/VR/AR",
    icon: "/images/icons/digital-content/du-lich-so.png",
  },
  {
    name: "Viết bài marketing",
    icon: "/images/icons/digital-content/viet-bai-marketing.png",
  },
]

const ServiceItem = ({ name, iconSrc }: { name: string; iconSrc: string }) => (
  <div className="flex flex-col items-center space-y-4 text-center">
    <div className="relative w-36 h-36 sm:w-40 sm:h-40">
      <Image
        src={iconSrc || "/placeholder.svg"}
        alt={name}
        fill
        className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>
    <h3 className="font-semibold text-gray-700 text-base sm:text-lg px-2">{name}</h3>
  </div>
)

export default function DigitalContentSection() {
  return (
    <section
      className="py-16 sm:py-20 relative"
      style={{
        backgroundImage: "url('/images/backgrounds/digital-content-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional: Add an overlay if text readability is an issue, e.g.,
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div> 
      */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">NỘI DUNG SỐ</h2>
        <div className="inline-block h-1 w-20 sm:w-24 bg-primary mb-12 sm:mb-16" /> {/* Accent line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12">
          {contentServicesData.map((service) => (
            <ServiceItem key={service.name} name={service.name} iconSrc={service.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
