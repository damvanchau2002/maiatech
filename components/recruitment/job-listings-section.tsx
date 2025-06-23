"use client"

import type React from "react"
import { useState, useCallback } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface JobListing {
  id: string
  title: string
  department: string
  location: string
  type: "full-time" | "part-time" | "internship" | "contract"
  experience: string
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
  postedDate: string
  deadline: string
  isHot?: boolean
}

const jobListings: JobListing[] = [
  {
    id: "1",
    title: "Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    department: "AI & Machine Learning",
    location: "Hà Nội",
    type: "part-time",
    experience: "Không yêu cầu",
    salary: "Thỏa thuận",
    description:
      "Xử lý dữ liệu hình ảnh phục vụ cho hệ thống trí tuệ nhân tạo (AI). Thực hiện các nhiệm vụ liên quan đến việc gán nhãn (con người, đồ vật, động vật, phương tiện giao thông...) xuất hiện trong ảnh/video để sử dụng cho việc huấn luyện mô hình chuyên dụng.",
    requirements: [
      "Sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp",
      "Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt",
      "Sử dụng máy tính thành thạo",
      "Ưu tiên có kinh nghiệm với phần mềm đồ họa (Canva, Photoshop, AutoCad, 3D Studio Max...)",
    ],
    benefits: [
      "Môi trường làm việc thân thiện, năng động",
      "Được đào tạo và phát triển kỹ năng chuyên môn",
      "Cơ hội chuyển sang vị trí full-time",
      "Làm việc online hoặc tại văn phòng",
    ],
    postedDate: "2025-01-15",
    deadline: "2025-02-28",
    isHot: true,
  },
  {
    id: "2",
    title: "Lập trình viên Full-stack Developer",
    department: "Phát triển phần mềm",
    location: "Hà Nội",
    type: "full-time",
    experience: "2-3 năm",
    salary: "15-25 triệu",
    description:
      "Phát triển và bảo trì các ứng dụng web full-stack sử dụng các công nghệ hiện đại. Tham gia vào toàn bộ quy trình phát triển từ thiết kế đến triển khai.",
    requirements: [
      "Kinh nghiệm 2+ năm với React.js, Node.js",
      "Thành thạo JavaScript/TypeScript",
      "Kinh nghiệm với cơ sở dữ liệu SQL/NoSQL",
      "Hiểu biết về Git, Docker, CI/CD",
    ],
    benefits: [
      "Lương cạnh tranh + thưởng dự án",
      "Bảo hiểm đầy đủ",
      "Đào tạo công nghệ mới",
      "Môi trường làm việc hiện đại",
    ],
    postedDate: "2025-01-10",
    deadline: "2025-02-15",
    isHot: true,
  },
  {
    id: "3",
    title: "Chuyên viên Marketing Digital",
    department: "Marketing",
    location: "Hà Nội",
    type: "full-time",
    experience: "1-2 năm",
    salary: "12-18 triệu",
    description:
      "Xây dựng và thực hiện các chiến lược marketing digital, quản lý các kênh truyền thông xã hội và tối ưu hóa SEO/SEM.",
    requirements: [
      "Kinh nghiệm 1+ năm trong lĩnh vực Digital Marketing",
      "Thành thạo Google Ads, Facebook Ads",
      "Kiến thức về SEO/SEM",
      "Kỹ năng viết content và thiết kế cơ bản",
    ],
    benefits: ["Mức lương hấp dẫn", "Thưởng KPI hàng tháng", "Đào tạo marketing tools", "Cơ hội thăng tiến"],
    postedDate: "2025-01-08",
    deadline: "2025-02-10",
  },
  {
    id: "4",
    title: "Kỹ sư DevOps",
    department: "Hạ tầng IT",
    location: "Hà Nội",
    type: "full-time",
    experience: "3-5 năm",
    salary: "20-30 triệu",
    description: "Quản lý và tối ưu hóa hạ tầng cloud, triển khai CI/CD pipeline và đảm bảo tính ổn định của hệ thống.",
    requirements: [
      "Kinh nghiệm 3+ năm với AWS/Azure",
      "Thành thạo Docker, Kubernetes",
      "Kinh nghiệm với Jenkins, GitLab CI",
      "Kiến thức về monitoring và logging",
    ],
    benefits: [
      "Lương cao + bonus",
      "Làm việc với công nghệ tiên tiến",
      "Đào tạo chứng chỉ cloud",
      "Remote working linh hoạt",
    ],
    postedDate: "2025-01-05",
    deadline: "2025-02-05",
  },
  {
    id: "5",
    title: "Thực tập sinh UI/UX Designer",
    department: "Thiết kế",
    location: "Hà Nội",
    type: "internship",
    experience: "Không yêu cầu",
    salary: "5-8 triệu",
    description:
      "Hỗ trợ team thiết kế trong việc tạo ra các giao diện người dùng đẹp và dễ sử dụng cho các sản phẩm của công ty.",
    requirements: [
      "Sinh viên năm 3, 4 hoặc mới tốt nghiệp",
      "Thành thạo Figma, Adobe Creative Suite",
      "Có portfolio thiết kế UI/UX",
      "Tư duy sáng tạo và cẩn thận",
    ],
    benefits: [
      "Trợ cấp thực tập hấp dẫn",
      "Mentor 1-1 từ senior designer",
      "Tham gia dự án thực tế",
      "Cơ hội full-time sau thực tập",
    ],
    postedDate: "2025-01-12",
    deadline: "2025-02-20",
  },
]

const JobListingsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const departments = Array.from(new Set(jobListings.map((job) => job.department)))
  const jobTypes = [
    { value: "full-time", label: "Toàn thời gian" },
    { value: "part-time", label: "Bán thời gian" },
    { value: "internship", label: "Thực tập" },
    { value: "contract", label: "Hợp đồng" },
  ]

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment
    const matchesType = selectedType === "all" || job.type === selectedType

    return matchesSearch && matchesDepartment && matchesType
  })

  const getTypeLabel = useCallback((type: string) => {
    const typeMap: Record<string, string> = {
      "full-time": "Toàn thời gian",
      "part-time": "Bán thời gian",
      internship: "Thực tập",
      contract: "Hợp đồng",
    }
    return typeMap[type] || type
  }, [])

  const getTypeBadgeColor = useCallback((type: string) => {
    const colorMap: Record<string, string> = {
      "full-time": "bg-green-100 text-green-800",
      "part-time": "bg-blue-100 text-blue-800",
      internship: "bg-yellow-100 text-yellow-800",
      contract: "bg-purple-100 text-purple-800",
    }
    return colorMap[type] || "bg-gray-100 text-gray-800"
  }, [])

  return (
    <section id="job-listings" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-maiaBlue-DEFAULT mb-4">VỊ TRÍ TUYỂN DỤNG</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Khám phá các cơ hội nghề nghiệp đa dạng tại MaiATech. Chúng tôi luôn chào đón những tài năng mới.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Tìm kiếm vị trí..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Tất cả phòng ban" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả phòng ban</SelectItem>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Loại hình làm việc" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả loại hình</SelectItem>
                {jobTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedDepartment("all")
                setSelectedType("all")
              }}
              className="flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Xóa bộ lọc</span>
            </Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                          {job.isHot && <Badge className="bg-red-500 text-white">HOT</Badge>}
                        </div>
                        <p className="text-maiaBlue-DEFAULT font-medium">{job.department}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getTypeBadgeColor(job.type)}>{getTypeLabel(job.type)}</Badge>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                      {job.requirements.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{job.requirements.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-0 lg:space-y-2 lg:ml-6">
                    <Button asChild className="bg-maiaBlue-DEFAULT hover:bg-maiaBlue-dark">
                      <Link href={`/tuyen-dung/ung-tuyen?position=${job.id}`}>Ứng tuyển ngay</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/tuyen-dung/${job.id}`}>Xem chi tiết</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Không tìm thấy vị trí phù hợp</h3>
            <p className="text-gray-500">Hãy thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy vị trí phù hợp?</h3>
            <p className="text-gray-600 mb-6">
              Gửi CV của bạn cho chúng tôi. Chúng tôi sẽ liên hệ khi có cơ hội phù hợp.
            </p>
            <Button asChild size="lg" className="bg-maiaBlue-DEFAULT hover:bg-maiaBlue-dark">
              <Link href="/tuyen-dung/ung-tuyen">Gửi CV tự do</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobListingsSection
