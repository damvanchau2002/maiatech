import Image from "next/image"
import { ArrowDownCircle } from "lucide-react"

const documents = [
  {
    iconSrc: "/images/about/icon-profile-competency.png",
    altText: "Hồ sơ năng lực icon",
    title: "Hồ sơ năng lực",
    link: "#",
  },
  {
    iconSrc: "/images/about/icon-catalog-maiatech.png",
    altText: "Catalog MaiATech icon",
    title: "Catalog MaiATech",
    link: "#",
  },
  {
    iconSrc: "/images/about/icon-catalog-generic.png",
    altText: "Catalog nông nghiệp số icon",
    title: "Catalog nông nghiệp số",
    link: "#",
  },
  {
    iconSrc: "/images/about/icon-catalog-generic.png", // Reusing generic catalog icon
    altText: "Catalog bảo tàng số icon",
    title: "Catalog bảo tàng số",
    link: "#",
  },
]

export default function DocumentCardsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {documents.map((doc, index) => (
            <div
              key={index}
              className={`py-8 px-4 text-center flex flex-col items-center justify-between h-full relative 
                          ${index > 0 ? "border-t-2 sm:border-t-0 sm:border-l-2 border-maiaBlue-DEFAULT border-opacity-30" : ""}`}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-5">
                  <Image
                    src={doc.iconSrc || "/placeholder.svg"}
                    alt={doc.altText}
                    width={80}
                    height={80}
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-maiaBlue-DEFAULT mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-500 mb-6">Xem và tải xuống</p>
              </div>
              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Tải xuống ${doc.title}`}
                className="mt-auto"
              >
                <ArrowDownCircle
                  strokeWidth={1.5}
                  className="w-10 h-10 text-maiaBlue-DEFAULT hover:text-maiaBlue-dark transition-colors"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
