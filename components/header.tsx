"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "GIỚI THIỆU", href: "/gioi-thieu" },
  { name: "DỊCH VỤ", href: "/dich-vu" },
  { name: "CÔNG NGHỆ", href: "/cong-nghe" },
  { name: "BLOG", href: "/blog" },
  { name: "LIÊN HỆ", href: "/lien-he" },
  { name: "TUYỂN DỤNG", href: "/tuyen-dung" },
]

const technologyMenuData = {
  "NGÔN NGỮ": ["C#", "PHP", "TypeScript", "JavaScript", "Dart", "Swift", "Java", "Kotlin", "Objective C", "Python"],
  FRAMEWORK: [
    "Laravel",
    "AngularJS",
    "React Native",
    "ASP.NET",
    "NodeJS",
    "Spring Boot",
    "Vue.JS",
    "Magento",
    "NestJS",
    "ReactJS",
    "WordPress",
    "Sails.JS",
    "RxJava",
    "Alamofire",
    "Symfony",
    "Flutter",
    "ReactiveCocoa",
    "Django",
    "Ruby on Rails",
    "CakePHP",
    "YII",
    "Next.JS",
    "Nupti.JS",
    "Meteor",
  ],
  DATABASE: ["Elasticsearch", "MongoDB", "PostgreSQL", "MySQL", "Firebase", "SQLite", "Realm", "CoreData", "Oracle"],
  DEVOPS: [
    "Jenkins",
    "Git",
    "Tosca",
    "Docker",
    "GitHub",
    "TestSigma",
    "Puppet",
    "Chef",
    "Nagios",
    "CircleCI",
    "Kubernetes",
    "Prometheus",
    "Buddy",
    "Selenium",
    "Grafana",
    "Bamboo",
    "Tricentis",
  ],
}

const servicesMenuData = {
  "TƯ VẤN KINH DOANH & KỸ THUẬT": [
    "Dịch vụ theo đội thương hiệu trên internet",
    "Tư vấn dự án CNTT khởi nhà nước",
    "Tư vấn CNTT cho doanh nghiệp",
    "Tư vấn thiết kế, xây dựng hệ thống thông tin quản lý",
    "Tư vấn, xây dựng giải pháp BI & DWH",
  ],
  "CHO THUÊ PHẦN MỀM DƯỚI DẠNG DỊCH VỤ": [
    "Phần mềm quản lý quan hệ và trải nghiệm của khách hàng – CREM",
    "Phần mềm quản trị doanh nghiệp – MaiA ERP",
    "Phần mềm kế toán – MaiA Accounting",
    "Phần mềm quản lý công văn tài liệu – MaiA Doc",
    "Phần mềm quản lý hiện vật bảo tàng- EMOS",
  ],
  "HẠ TẦNG SỐ": ["Máy chủ ảo VPS", "Dịch vụ Email Server", "Dịch vụ Email Hosting", "Đăng ký Domain tên miền"],
  "THIẾT KẾ & SÁNG TẠO NỘI DUNG SỐ": [
    "Triển lãm/tour 360 độ",
    "Số hóa hiện vật, hàng hóa, sản phẩm dưới hình thức 360 độ",
    "Số hóa hiện vật, hàng hóa, sản phẩm dưới hình thức 3D",
    "Video giới thiệu công ty, thương hiệu, sản phẩm",
    "Logo, Catalogue, Bao bì, Nhãn hiệu",
  ],
  "ĐÀO TẠO & TƯ VẤN HƯỚNG NGHIỆP": [
    "Lập trình JavaScript",
    "Lập trình Web nâng cao",
    "Lập trình AI & Big Data",
    "Lập trình NodeJS",
    "Lập trình Front-End",
    "Tin học văn phòng",
  ],
}

export default function Header({ activePage }: { activePage?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
    if (!isDropdownOpen) {
      setIsServicesDropdownOpen(false) // Đóng services dropdown khi mở technology dropdown
    }
  }

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen)
    if (!isServicesDropdownOpen) {
      setIsDropdownOpen(false) // Đóng technology dropdown khi mở services dropdown
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((isDropdownOpen || isServicesDropdownOpen) && !(event.target as Element).closest(".relative")) {
        setIsDropdownOpen(false)
        setIsServicesDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen, isServicesDropdownOpen])

  return (
    <header className="bg-white shadow-subtle sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/images/maiatech-logo.png" alt="MaiATech Logo" width={140} height={38} priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-5 items-center">
            {navItems.map((item) =>
              item.name === "CÔNG NGHỆ" ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={toggleDropdown}
                    className={`font-normal text-base leading-none tracking-normal py-2 transition-colors duration-150 flex items-center space-x-1 ${
                      activePage === item.name
                        ? "text-maiaRed-DEFAULT border-b-2 border-maiaRed-DEFAULT"
                        : "text-textPrimary hover:text-maiaBlue-DEFAULT"
                    }`}
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Technology Dropdown Menu - Centered */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-8">
                      <div className="grid grid-cols-4 gap-8">
                        {Object.entries(technologyMenuData).map(([category, items]) => (
                          <div key={category} className="space-y-4">
                            <h3 className="font-bold text-lg text-maiaBlue-DEFAULT uppercase tracking-wide border-b-2 border-maiaBlue-DEFAULT pb-2 text-center">
                              {category}
                            </h3>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                              {items.map((item, index) => (
                                <Link
                                  key={index}
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-maiaBlue-DEFAULT transition-colors duration-150 block py-1 px-2 rounded hover:bg-blue-50 flex items-center space-x-2"
                                  onClick={() => setIsDropdownOpen(false)}
                                >
                                  <i className="wpr-sub-icon fas fa-code text-xs text-maiaBlue-DEFAULT"></i>
                                  <span>{item}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.name === "DỊCH VỤ" ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={toggleServicesDropdown}
                    className={`font-normal text-base leading-none tracking-normal py-2 transition-colors duration-150 flex items-center space-x-1 ${
                      activePage === item.name
                        ? "text-maiaRed-DEFAULT border-b-2 border-maiaRed-DEFAULT"
                        : "text-textPrimary hover:text-maiaBlue-DEFAULT"
                    }`}
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Services Dropdown Menu - Centered */}
                  {isServicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-6">
                      <div className="grid grid-cols-5 gap-4">
                        {Object.entries(servicesMenuData).map(([category, items]) => (
                          <div key={category} className="space-y-3">
                            <h3 className="font-bold text-lg text-maiaBlue-DEFAULT uppercase tracking-wide border-b-2 border-maiaBlue-DEFAULT pb-2 text-center leading-tight">
                              {category}
                            </h3>
                            <div className="space-y-1">
                              {items.map((item, index) => (
                                <Link
                                  key={index}
                                  href="#"
                                  className="text-sm text-gray-700 hover:text-maiaBlue-DEFAULT transition-colors duration-150 block py-1 px-1 rounded hover:bg-blue-50 leading-relaxed"
                                  onClick={() => setIsServicesDropdownOpen(false)}
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-normal text-base leading-none tracking-normal py-2 transition-colors duration-150 ${
                    activePage === item.name
                      ? "text-maiaRed-DEFAULT border-b-2 border-maiaRed-DEFAULT"
                      : "text-textPrimary hover:text-maiaBlue-DEFAULT"
                  }`}
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>

          {/* Right side - Flags and Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Language Flags */}
            <div className="flex items-center space-x-2">
              <Image src="/images/vietnam-flag.png" alt="Vietnamese Flag" width={22} height={15} />
              <Image src="/images/en.png" alt="English Flag" width={22} height={15} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-maiaBlue-DEFAULT hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden border-t border-gray-200 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className={`block px-3 py-2 font-normal text-base leading-none tracking-normal transition-colors duration-150 rounded-md ${
                  activePage === item.name
                    ? "text-maiaRed-DEFAULT bg-red-50 border-l-4 border-maiaRed-DEFAULT"
                    : "text-textPrimary hover:text-maiaBlue-DEFAULT hover:bg-blue-50"
                }`}
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40 transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  )
}
