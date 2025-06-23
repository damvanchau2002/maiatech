import Image from "next/image"

interface TechItem {
  name: string
  icon: string
  color?: string
}

interface TechnologyGridProps {
  title: string
  technologies: TechItem[]
  showViewMore?: boolean
}

export default function TechnologyGrid({ title, technologies, showViewMore = true }: TechnologyGridProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-maiaBlue-DEFAULT text-center mb-8">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              {tech.name === "Xem thêm" ? (
                <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              ) : (
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              )}
            </div>
            <h3 className="text-sm font-semibold text-gray-800 text-center">{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
