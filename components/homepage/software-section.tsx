import Image from "next/image"

const softwareServicesData = [
  { name: "ERP Odoo", icon: "/images/icons/software/erp-odoo.png", row: 1 },
  { name: "Tư vấn", icon: "/images/icons/software/tu-van.png", row: 1 },
  { name: "May đo", icon: "/images/icons/software/may-do.png", row: 1 },
  { name: "Gia công", icon: "/images/icons/software/gia-cong.png", row: 2 },
  { name: "Triển khai", icon: "/images/icons/software/trien-khai.png", row: 2 },
]

const ServiceItem = ({ name, iconSrc }: { name: string; iconSrc: string }) => (
  <div className="flex flex-col items-center space-y-3 text-center">
    <div className="relative w-32 h-32 sm:w-36 sm:h-36">
      {" "}
      {/* Slightly larger icons */}
      <Image
        src={iconSrc || "/placeholder.svg"} // Fallback to placeholder if iconSrc is missing
        alt={name}
        fill
        className="object-contain" // Use contain to ensure the whole icon is visible
      />
    </div>
    <h3 className="font-semibold text-base sm:text-lg">{name}</h3>
  </div>
)

export default function SoftwareSection() {
  const row1Services = softwareServicesData.filter((s) => s.row === 1)
  const row2Services = softwareServicesData.filter((s) => s.row === 2)

  return (
    <section className="py-16 sm:py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16">PHẦN MỀM</h2>

        <div className="flex flex-col items-center space-y-10 sm:space-y-12">
          {/* Row 1: 3 items */}
          <div className="grid grid-cols-3 gap-x-6 sm:gap-x-10 w-full max-w-3xl">
            {row1Services.map((service) => (
              <ServiceItem key={service.name} name={service.name} iconSrc={service.icon} />
            ))}
          </div>

          {/* Row 2: 2 items, centered */}
          <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 w-full max-w-md">
            {row2Services.map((service) => (
              <ServiceItem key={service.name} name={service.name} iconSrc={service.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
