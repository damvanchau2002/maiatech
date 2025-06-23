"use client"

import Image from "next/image"
import { useState } from "react"

interface TechIconCardProps {
  name: string
  icon: string
  description?: string
  onClick?: () => void
}

export default function TechIconCard({ name, icon, description, onClick }: TechIconCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  if (name === "Xem thêm") {
    return (
      <div
        className="flex flex-col items-center space-y-3 cursor-pointer group"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gray-200 rounded-xl hover:bg-gray-300 transition-colors duration-200">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-gray-700 transition-colors"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-gray-700 transition-colors"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-gray-700 transition-colors"></div>
          </div>
        </div>
        <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-maiaBlue-DEFAULT transition-colors">
          {name}
        </h3>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col items-center space-y-3 cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-105">
        <Image
          src={icon || "/placeholder.svg"}
          alt={name}
          width={64}
          height={64}
          className="object-contain transition-transform duration-200"
        />
      </div>
      <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-maiaBlue-DEFAULT transition-colors">
        {name}
      </h3>
      {description && isHovered && (
        <div className="absolute z-10 bg-gray-800 text-white text-xs rounded-md px-2 py-1 mt-2 opacity-90">
          {description}
        </div>
      )}
    </div>
  )
}
