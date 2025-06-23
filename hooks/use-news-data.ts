"use client"

import { useState, useEffect } from "react"

interface NewsItem {
  id: number
  title: string
  description: string
  link: string
  featured?: boolean
}

interface UseNewsDataReturn {
  newsItems: NewsItem[]
  loading: boolean
  error: string | null
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

export const useNewsData = (itemsPerPage = 4): UseNewsDataReturn => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true)
        // Simulate API call - replace with actual API endpoint
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockData: NewsItem[] = [
          {
            id: 1,
            title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
            description:
              "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến.",
            link: "/tuyen-dung/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer",
            featured: true,
          },
          // Add more items as needed
        ]

        setNewsItems(mockData)
        setError(null)
      } catch (err) {
        setError("Failed to fetch news data")
        console.error("Error fetching news:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchNewsData()
  }, [])

  const totalPages = Math.ceil(newsItems.length / itemsPerPage)

  return {
    newsItems,
    loading,
    error,
    currentPage,
    totalPages,
    setCurrentPage,
  }
}
