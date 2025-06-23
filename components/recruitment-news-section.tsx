"use client"

import { useState } from "react"
import RecruitmentNewsHeroCard from "./recruitment-news-hero-card"
import RecruitmentNewsCard from "./recruitment-news-card"
import RecruitmentNewsSidebar from "./recruitment-news-sidebar"
import RecruitmentPagination from "./recruitment-pagination"

// Mock data for recruitment news
const recruitmentNews = [
  {
    id: 1,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến. Kỹ năng: sử dụng máy tính thành thạo. Ưu tiên có kinh nghiệm về sử dụng các phần mềm đồ họa (như Canva, Photoshop, AutoCad, 3D Studio Max...), chưa có kinh nghiệm được đào tạo từ đầu.",
    link: "/tuyen-dung/tin-tuc/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer",
    publishDate: "20/02/2025",
    featured: true,
  },
  {
    id: 2,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến.",
    link: "/tuyen-dung/tin-tuc/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer-2",
    publishDate: "18/02/2025",
    featured: false,
  },
  {
    id: 3,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến.",
    link: "/tuyen-dung/tin-tuc/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer-3",
    publishDate: "15/02/2025",
    featured: false,
  },
  // Add more recruitment news for pagination
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 4,
    title: `Thông báo tuyển dụng vị trí ${i + 4}: Lập trình viên Full-stack`,
    description:
      "MaiATech đang tìm kiếm những lập trình viên tài năng để gia nhập đội ngũ phát triển sản phẩm. Yêu cầu có kinh nghiệm với React, Node.js, và các công nghệ web hiện đại.",
    link: `/tuyen-dung/tin-tuc/lap-trinh-vien-fullstack-${i + 4}`,
    publishDate: `${15 - i}/02/2025`,
    featured: false,
  })),
]

const NEWS_PER_PAGE = 3 // Featured + 2 regular news per page

export default function RecruitmentNewsSection() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(recruitmentNews.length / NEWS_PER_PAGE)
  const startIndex = (currentPage - 1) * NEWS_PER_PAGE
  const endIndex = startIndex + NEWS_PER_PAGE
  const currentNews = recruitmentNews.slice(startIndex, endIndex)

  const featuredNews = currentNews.find((news) => news.featured) || currentNews[0]
  const regularNews = currentNews.filter((news) => !news.featured || news.id !== featuredNews.id)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-maiaBlue-DEFAULT mb-4">TIN TỨC TUYỂN DỤNG</h1>
          <p className="text-gray-600 text-lg">Cập nhật thông tin tuyển dụng mới nhất từ MaiATech</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News Card */}
            {featuredNews && (
              <RecruitmentNewsHeroCard
                title={featuredNews.title}
                description={featuredNews.description}
                link={featuredNews.link}
                publishDate={featuredNews.publishDate}
              />
            )}

            {/* Regular News Cards */}
            <div className="space-y-6">
              {regularNews.map((news) => (
                <RecruitmentNewsCard
                  key={news.id}
                  title={news.title}
                  description={news.description}
                  link={news.link}
                  publishDate={news.publishDate}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <RecruitmentPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <RecruitmentNewsSidebar />
          </div>
        </div>
      </div>
    </section>
  )
}
