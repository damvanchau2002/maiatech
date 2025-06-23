"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface RecruitmentPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function RecruitmentPagination({ currentPage, totalPages, onPageChange }: RecruitmentPaginationProps) {
  return (
    <div className="flex items-center justify-start space-x-2 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded border-gray-400 text-gray-600 hover:bg-gray-50"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded border-gray-400 text-gray-600 hover:bg-gray-50"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
