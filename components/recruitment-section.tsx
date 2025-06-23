"use client"

import { useState } from "react"
import RecruitmentHeroCard from "./recruitment-hero-card"
import RecruitmentJobCard from "./recruitment-job-card"
import RecruitmentSidebar from "./recruitment-sidebar"
import RecruitmentPagination from "./recruitment-pagination"

// Mock data for job postings
const jobPostings = [
  {
    id: 1,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến. Kỹ năng: sử dụng máy tính thành thạo. Ưu tiên có kinh nghiệm về sử dụng các phần mềm đồ họa (như Canva, Photoshop, AutoCad, 3D Studio Max...), chưa có kinh nghiệm được đào tạo từ đầu.",
    link: "/tuyen-dung/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer",
    featured: true,
  },
  {
    id: 2,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến.",
    link: "/tuyen-dung/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer-2",
    featured: false,
  },
  {
    id: 3,
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến.",
    link: "/tuyen-dung/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer-3",
    featured: false,
  },
  // Add more job postings for pagination
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 4,
    title: `MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer ${i + 4}`,
    description:
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp. Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến.",
    link: `/tuyen-dung/cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer-${i + 4}`,
    featured: false,
  })),
]

const JOBS_PER_PAGE = 3 // Featured + 2 regular jobs per page

export default function RecruitmentSection() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(jobPostings.length / JOBS_PER_PAGE)
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE
  const endIndex = startIndex + JOBS_PER_PAGE
  const currentJobs = jobPostings.slice(startIndex, endIndex)

  const featuredJob = currentJobs.find((job) => job.featured) || currentJobs[0]
  const regularJobs = currentJobs.filter((job) => !job.featured || job.id !== featuredJob.id)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Job Card */}
            {featuredJob && (
              <RecruitmentHeroCard
                title={featuredJob.title}
                description={featuredJob.description}
                link={featuredJob.link}
              />
            )}

            {/* Regular Job Cards */}
            <div className="space-y-6">
              {regularJobs.map((job) => (
                <RecruitmentJobCard key={job.id} title={job.title} description={job.description} link={job.link} />
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
            <RecruitmentSidebar />
          </div>
        </div>
      </div>
    </section>
  )
}
