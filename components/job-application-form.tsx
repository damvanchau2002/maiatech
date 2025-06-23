"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileText, AlertCircle, CheckCircle } from "lucide-react"

interface FormData {
  fullName: string
  dateOfBirth: string
  email: string
  phone: string
  position: string
  jobLocation: string
  expectedSalary: string
  resume: File | null
}

interface FormErrors {
  [key: string]: string
}

const positions = [
  { value: "thuc-tap-sinh", label: "Thực tập sinh" },
  { value: "lap-trinh-vien", label: "Lập trình viên" },
  { value: "tester", label: "Tester" },
  { value: "ba", label: "Business Analyst" },
  { value: "pm", label: "Project Manager" },
  { value: "designer", label: "UI/UX Designer" },
]

const jobLocations = [
  { value: "lap-trinh", label: "Lập trình" },
  { value: "thiet-ke", label: "Thiết kế" },
  { value: "marketing", label: "Marketing" },
  { value: "kinh-doanh", label: "Kinh doanh" },
  { value: "nhan-su", label: "Nhân sự" },
  { value: "ke-toan", label: "Kế toán" },
]

const salaryRanges = [
  { value: "khong-yeu-cau", label: "Không yêu cầu thù lao( đối với thực tập sinh)" },
  { value: "duoi-10", label: "Dưới 10 triệu" },
  { value: "10-15", label: "10-15 triệu" },
  { value: "15-20", label: "15-20 triệu" },
  { value: "20-30", label: "20-30 triệu" },
  { value: "tren-30", label: "Trên 30 triệu" },
  { value: "thuong-luong", label: "Thương lượng" },
]

const JobApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    position: "",
    jobLocation: "",
    expectedSalary: "",
    resume: null,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }))
      }
    },
    [errors],
  )

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]

      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, resume: "Chỉ chấp nhận file PDF, DOC, DOCX" }))
        return
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: "File không được vượt quá 5MB" }))
        return
      }

      setFormData((prev) => ({ ...prev, resume: file }))
      setErrors((prev) => ({ ...prev, resume: "" }))
    }
  }, [])

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên"
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Vui lòng nhập ngày sinh"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại"
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ"
    }

    if (!formData.position) {
      newErrors.position = "Vui lòng chọn chức vụ ứng tuyển"
    }

    if (!formData.jobLocation) {
      newErrors.jobLocation = "Vui lòng chọn vị trí ứng tuyển"
    }

    if (!formData.resume) {
      newErrors.resume = "Vui lòng tải lên hồ sơ ứng tuyển"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const resetForm = useCallback(() => {
    setFormData({
      fullName: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      position: "",
      jobLocation: "",
      expectedSalary: "",
      resume: null,
    })

    // Reset file input
    const fileInput = document.getElementById("resume") as HTMLInputElement
    if (fileInput) {
      fileInput.value = ""
    }
  }, [])

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault()

      if (!validateForm()) {
        // Scroll to first error
        const firstErrorField = document.querySelector(".border-red-500")
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" })
        }
        return
      }

      setIsSubmitting(true)
      setSubmitStatus("idle")

      try {
        // Create FormData for file upload
        const submitData = new FormData()
        Object.entries(formData).forEach(([key, value]) => {
          if (value !== null) {
            submitData.append(key, value)
          }
        })

        // Simulate API call - replace with actual endpoint
        await new Promise((resolve) => setTimeout(resolve, 2000))

        console.log("Form submitted successfully:", formData)
        setSubmitStatus("success")

        // Reset form after successful submission
        resetForm()
      } catch (error) {
        console.error("Submission error:", error)
        setSubmitStatus("error")
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData, validateForm, resetForm],
  )

  const getFieldError = useCallback((field: string) => errors[field], [errors])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-maiaBlue-DEFAULT text-center mb-12">ỨNG TUYỂN</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-800">
                Đơn ứng tuyển đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.
              </span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="text-red-800">Có lỗi xảy ra khi gửi đơn ứng tuyển. Vui lòng thử lại!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                Họ và tên:
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Họ và tên"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className={`w-full ${getFieldError("fullName") ? "border-red-500" : ""}`}
              />
              {getFieldError("fullName") && <p className="text-red-500 text-sm mt-1">{getFieldError("fullName")}</p>}
            </div>

            {/* Date of Birth */}
            <div>
              <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700 mb-2 block">
                Ngày tháng năm sinh:
              </Label>
              <Input
                id="dateOfBirth"
                type="text"
                placeholder="dd/mm/yyyy"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                className={`w-full ${getFieldError("dateOfBirth") ? "border-red-500" : ""}`}
              />
              {getFieldError("dateOfBirth") && (
                <p className="text-red-500 text-sm mt-1">{getFieldError("dateOfBirth")}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Email:
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full ${getFieldError("email") ? "border-red-500" : ""}`}
              />
              {getFieldError("email") && <p className="text-red-500 text-sm mt-1">{getFieldError("email")}</p>}
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                Số điện thoại:
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Số điện thoại"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`w-full ${getFieldError("phone") ? "border-red-500" : ""}`}
              />
              {getFieldError("phone") && <p className="text-red-500 text-sm mt-1">{getFieldError("phone")}</p>}
            </div>

            {/* Position */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">Ứng tuyển chức vụ:</Label>
              <Select value={formData.position} onValueChange={(value) => handleInputChange("position", value)}>
                <SelectTrigger className={`w-full ${getFieldError("position") ? "border-red-500" : ""}`}>
                  <SelectValue placeholder="Thực tập sinh" />
                </SelectTrigger>
                <SelectContent>
                  {positions.map((position) => (
                    <SelectItem key={position.value} value={position.value}>
                      {position.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {getFieldError("position") && <p className="text-red-500 text-sm mt-1">{getFieldError("position")}</p>}
            </div>

            {/* Job Location */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">Vị trí ứng tuyển:</Label>
              <Select value={formData.jobLocation} onValueChange={(value) => handleInputChange("jobLocation", value)}>
                <SelectTrigger className={`w-full ${getFieldError("jobLocation") ? "border-red-500" : ""}`}>
                  <SelectValue placeholder="Lập trình" />
                </SelectTrigger>
                <SelectContent>
                  {jobLocations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {getFieldError("jobLocation") && (
                <p className="text-red-500 text-sm mt-1">{getFieldError("jobLocation")}</p>
              )}
            </div>

            {/* Resume Upload */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Hồ sơ ứng tuyển (Chỉ nhận file PDF, DOC, DOCX - Tối đa 5MB):
              </Label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="resume"
                  className={`flex items-center justify-between w-full h-12 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors px-4 ${
                    getFieldError("resume") ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-2 text-gray-600">
                    {formData.resume ? (
                      <>
                        <FileText className="w-5 h-5" />
                        <span className="text-sm">{formData.resume.name}</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5" />
                        <span className="text-sm">Chọn tệp</span>
                      </>
                    )}
                  </div>
                </label>
                {!formData.resume && <p className="text-gray-500 text-xs mt-1">Không có tệp nào được chọn</p>}
              </div>
              {getFieldError("resume") && <p className="text-red-500 text-sm mt-1">{getFieldError("resume")}</p>}
            </div>

            {/* Expected Salary */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">Mức lương/ thù lao mong muốn:</Label>
              <Select
                value={formData.expectedSalary}
                onValueChange={(value) => handleInputChange("expectedSalary", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Không yêu cầu thù lao( đối với thực tập sinh)" />
                </SelectTrigger>
                <SelectContent>
                  {salaryRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-maiaBlue-DEFAULT hover:bg-maiaBlue-dark text-white font-bold py-3 px-8 rounded transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Đang gửi đơn ứng tuyển...</span>
                  </div>
                ) : (
                  "Gửi đơn ứng tuyển"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default JobApplicationForm
