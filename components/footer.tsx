import Image from "next/image"
import Link from "next/link"
import { Facebook, Globe, Twitter, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    // Sử dụng Fragment <> để bao bọc 2 phần có màu nền khác nhau
    <>
      {/* PHẦN NỘI DUNG CHÍNH CỦA FOOTER */}
      <footer className="bg-[#0172ce] text-white pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
            {/* Cột 1: Bản đồ (chiếm 3/12 cột trên màn hình lớn) */}
            <div className="md:col-span-4 lg:col-span-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119181.0846554664!2d105.936759!3d21.016319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a8cf8e6e18f7%3A0xedec0a61ee705acc!2zMjAgTmdoLiAzNjcvMjEgUC4gTmfDtCBYdcOibiBRdeG6o25nLCBUcsOidSBRdeG7sywgR2lhIEzDom0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2us!4v1750411908619!5m2!1svi!2us"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
                title="Vị trí MaiATech trên bản đồ"
              ></iframe>
            </div>

            {/* Cột 2: Thông tin liên hệ (chiếm 6/12 cột trên màn hình lớn) */}
            <div className="md:col-span-8 lg:col-span-6">
              <div className="mb-6">
                <Image
                  src="/images/maiatech-logo.png"
                  alt="MaiATech Logo màu trắng"
                  width={170}
                  height={45}
                  className="brightness-0 invert" // Kỹ thuật để đổi logo màu thành trắng
                />
                <p className="text-sm text-gray-200 mt-2">nhiều nỗ lực - một niềm tin</p>
              </div>

              <div className="mb-6">
                <h3 className="text-base font-semibold mb-3 text-white uppercase tracking-wider">LIÊN HỆ</h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-start">
                    <MapPin size={16} className="mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>
                      Trụ sở: Số 6A, ngách 25, ngõ 387 phố Xuân Đỉnh cũ (Đỗ Nhuận mới), P. Xuân Đỉnh, Q. Bắc Từ Liêm, Hà
                      Nội
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Mail size={15} className="mr-2.5 flex-shrink-0" />
                    <span>Email: contact@maiatech.com.vn</span>
                  </li>
                  <li className="flex items-center">
                    <Phone size={15} className="mr-2.5 flex-shrink-0" />
                    <span>Hotline: 0936.486.486 - 024.33.888.222</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-3 text-white uppercase tracking-wider">MẠNG XÃ HỘI</h3>
                <div className="flex space-x-3">
                  <Link href="#" aria-label="Facebook của MaiATech" className="text-gray-300 hover:text-white">
                    <Facebook size={22} />
                  </Link>
                  <Link href="#" aria-label="Website của MaiATech" className="text-gray-300 hover:text-white">
                    <Globe size={22} />
                  </Link>
                  <Link href="#" aria-label="Twitter của MaiATech" className="text-gray-300 hover:text-white">
                    <Twitter size={22} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Cột 3: Giờ mở cửa (chiếm 3/12 cột trên màn hình lớn) */}
            <div className="md:col-span-12 lg:col-span-3">
              <h3 className="text-base font-semibold mb-3 text-white uppercase tracking-wider">GIỜ MỞ CỬA</h3>
              <div className="text-sm text-gray-200 space-y-1">
                <p>Thứ Hai đến Thứ Sáu:</p>
                <p>Từ 8:00 sáng đến 17:00 chiều</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* THANH COPYRIGHT VỚI MÀU NỀN ĐẬM HƠN */}
      <div className="bg-[#0061b0] py-3 text-center">
        <p className="text-xs text-gray-300">Copyright © MaiATech 2015 – 2024</p>
      </div>
    </>
  )
}
