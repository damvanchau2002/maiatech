"use client"

import { useState } from "react"
import TechIconCard from "./tech-icon-card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

interface TechItem {
  name: string
  icon: string
  description?: string
  category?: string
}

interface EnhancedTechnologyGridProps {
  title: string
  technologies: TechItem[]
  allTechnologies?: TechItem[]
}

export default function EnhancedTechnologyGrid({
  title,
  technologies,
  allTechnologies = [],
}: EnhancedTechnologyGridProps) {
  const [showAll, setShowAll] = useState(false)
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null)

  const displayedTechnologies = showAll ? allTechnologies : technologies

  const handleTechClick = (tech: TechItem) => {
    if (tech.name === "Xem thêm") {
      setShowAll(true)
    } else {
      setSelectedTech(tech)
    }
  }

  const handleCloseModal = () => {
    setSelectedTech(null)
  }

  return (
    <>
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-maiaBlue-DEFAULT text-center flex-grow">{title}</h2>
          {showAll && (
            <Button variant="outline" onClick={() => setShowAll(false)} className="ml-4">
              Thu gọn
            </Button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {displayedTechnologies.map((tech, index) => (
            <TechIconCard
              key={index}
              name={tech.name}
              icon={tech.icon}
              description={tech.description}
              onClick={() => handleTechClick(tech)}
            />
          ))}
        </div>
      </section>

      {/* Modal for technology details */}
      {selectedTech && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-maiaBlue-DEFAULT">{selectedTech.name}</h3>
              <Button variant="ghost" size="icon" onClick={handleCloseModal}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={selectedTech.icon || "/placeholder.svg"}
                alt={selectedTech.name}
                width={64}
                height={64}
                className="object-contain"
              />
              <div>
                <p className="text-gray-600">{selectedTech.description || "Công nghệ được sử dụng trong các dự án."}</p>
                {selectedTech.category && (
                  <p className="text-sm text-maiaBlue-DEFAULT mt-2">Danh mục: {selectedTech.category}</p>
                )}
              </div>
            </div>
            <Button onClick={handleCloseModal} className="w-full">
              Đóng
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
