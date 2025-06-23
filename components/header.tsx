"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  { name: "GIỚI THIỆU", href: "/gioi-thieu" },
  { name: "DỊCH VỤ", href: "/dich-vu", hasDropdown: true },
  { name: "CÔNG NGHỆ", href: "/cong-nghe", hasDropdown: true },
  { name: "DỰ ÁN", href: "/du-an" },
  { name: "BLOG", href: "/blog" },
  { name: "TIN TỨC", href: "/tin-tuc" },
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<string[]>([])
  
  // Toggle category expansion in mobile view
  const toggleMobileCategory = useCallback((category: string) => {
    setExpandedMobileCategories(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category) 
        : [...prev, category]
    )
  }, [])
  
  // Sử dụng useCallback để tối ưu hiệu suất
  const toggleDropdown = useCallback((dropdownName: string) => {
    setActiveDropdown(prev => prev === dropdownName ? null : dropdownName)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    setExpandedMobileCategories([])
  }, [])

  // Xử lý click bên ngoài dropdown để đóng menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeDropdown])

  // Xử lý phím Escape để đóng dropdown
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [])

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
            {navItems.map((item) => (
              <div key={item.name} className={`relative dropdown-container ${item.hasDropdown ? 'group' : ''}`}>
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`font-medium text-base py-2 transition-colors duration-150 flex items-center space-x-1 ${
                      activePage === item.name
                        ? "text-maiaRed-DEFAULT border-b-2 border-maiaRed-DEFAULT"
                        : "text-textPrimary hover:text-maiaBlue-DEFAULT"
                    }`}
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} 
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium text-base py-2 transition-colors duration-150 ${
                      activePage === item.name
                        ? "text-maiaRed-DEFAULT border-b-2 border-maiaRed-DEFAULT"
                        : "text-textPrimary hover:text-maiaBlue-DEFAULT"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Technology Dropdown */}
                {item.name === "CÔNG NGHỆ" && activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-8 animate-fadeIn">
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
                                href={`/cong-nghe?category=${encodeURIComponent(category)}&tech=${encodeURIComponent(item)}`}
                                className="text-sm text-gray-700 hover:text-maiaBlue-DEFAULT transition-colors duration-150 block py-1 px-2 rounded hover:bg-blue-50 flex items-center space-x-2"
                                onClick={() => setActiveDropdown(null)}
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

                {/* Services Dropdown */}
                {item.name === "DỊCH VỤ" && activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-6 animate-fadeIn">
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
                                href={`/dich-vu?category=${encodeURIComponent(category)}&service=${encodeURIComponent(item)}`}
                                className="text-sm text-gray-700 hover:text-maiaBlue-DEFAULT transition-colors duration-150 block py-1 px-1 rounded hover:bg-blue-50 leading-relaxed"
                                onClick={() => setActiveDropdown(null)}
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
            ))}
          </nav>

          {/* Right side - Flags and Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Language Flags */}
            <div className="flex items-center space-x-2">
              <button className="focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm">
                <Image src="/images/vietnam-flag.png" alt="Vietnamese" width={22} height={15} />
              </button>
              <button className="focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm">
                <Image src="/images/en.png" alt="English" width={22} height={15} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-maiaBlue-DEFAULT hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Viết lại hoàn toàn phần này */}
        <div
          className={`md:hidden border-t border-gray-200 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-gray-100 last:border-b-0">
                {item.hasDropdown ? (
                  <div className="w-full">
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={item.href}
                        className={`flex-grow px-3 py-3 text-base font-medium transition-colors duration-150 ${
                          activePage === item.name
                            ? "text-maiaRed-DEFAULT"
                            : "text-textPrimary hover:text-maiaBlue-DEFAULT"
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="p-3 text-gray-600 hover:text-maiaBlue-DEFAULT rounded-md w-12 flex justify-center items-center"
                        aria-label={`Toggle ${item.name} dropdown`}
                        aria-expanded={activeDropdown === item.name}
                      >
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`} 
                        />
                      </button>
                    </div>
                    
                    {/* Mobile Dropdown Content */}
                    {activeDropdown === item.name && (
                      <ul className="pl-4 mt-1 space-y-1 border-l-2 border-gray-200 ml-3 mb-3 animate-fadeIn">
                        {item.name === "CÔNG NGHỆ" && 
                          Object.entries(technologyMenuData).map(([category, items]) => (
                            <li key={category} className="mb-3">
                              <button 
                                onClick={() => toggleMobileCategory(category)}
                                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-maiaBlue-DEFAULT uppercase hover:bg-blue-50 rounded-md"
                                aria-expanded={expandedMobileCategories.includes(category)}
                              >
                                <span>{category}</span>
                                <ChevronDown 
                                  className={`w-4 h-4 transition-transform duration-200 ${
                                    expandedMobileCategories.includes(category) ? "rotate-180" : ""
                                  }`} 
                                />
                              </button>
                              
                              {expandedMobileCategories.includes(category) && (
                                <ul className="mt-1 space-y-1 pl-3 animate-fadeIn">
                                  {items.map((item, index) => (
                                    <li key={index}>
                                      <Link
                                        href={`/cong-nghe?category=${encodeURIComponent(category)}&tech=${encodeURIComponent(item)}`}
                                        className="block px-3 py-2 text-sm text-gray-700 hover:text-maiaBlue-DEFAULT rounded hover:bg-blue-50 w-full text-left"
                                        onClick={closeMobileMenu}
                                      >
                                        {item}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))
                        }
                        
                        {item.name === "DỊCH VỤ" && 
                          Object.entries(servicesMenuData).map(([category, items]) => (
                            <li key={category} className="mb-3">
                              <button 
                                onClick={() => toggleMobileCategory(category)}
                                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-maiaBlue-DEFAULT uppercase hover:bg-blue-50 rounded-md leading-tight"
                                aria-expanded={expandedMobileCategories.includes(category)}
                              >
                                <span>{category}</span>
                                <ChevronDown 
                                  className={`w-4 h-4 transition-transform duration-200 ${
                                    expandedMobileCategories.includes(category) ? "rotate-180" : ""
                                  }`} 
                                />
                              </button>
                              
                              {expandedMobileCategories.includes(category) && (
                                <ul className="mt-1 space-y-1 pl-3 animate-fadeIn">
                                  {items.map((item, index) => (
                                    <li key={index}>
                                      <Link
                                        href={`/dich-vu?category=${encodeURIComponent(category)}&service=${encodeURIComponent(item)}`}
                                        className="block px-3 py-2 text-sm text-gray-700 hover:text-maiaBlue-DEFAULT rounded hover:bg-blue-50 w-full text-left"
                                        onClick={closeMobileMenu}
                                      >
                                        {item}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))
                        }
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block w-full px-3 py-3 text-base font-medium transition-colors duration-150 ${
                      activePage === item.name
                        ? "text-maiaRed-DEFAULT"
                        : "text-textPrimary hover:text-maiaBlue-DEFAULT"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

  
    </header>
  )
}
