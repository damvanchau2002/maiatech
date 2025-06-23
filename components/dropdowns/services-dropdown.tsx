import Link from "next/link"

interface ServicesDropdownProps {
  setActiveDropdown: (value: string | null) => void
}

const ServicesDropdown = ({ setActiveDropdown }: ServicesDropdownProps) => {
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

  return (
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
  )
}

export default ServicesDropdown