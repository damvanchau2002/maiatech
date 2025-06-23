import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0066cc] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cột trái: Bản đồ */}
            <div className="w-full h-[300px] relative overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119181.0846554664!2d105.936759!3d21.016319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a8cf8e6e18f7%3A0xedec0a61ee705acc!2zMjAgTmdoLiAzNjcvMjEgUC4gTmfDtCBYdcOibiBRdeG6o25nLCBUcsOidSBRdeG7sywgR2lhIEzDom0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1750411908619!5m2!1svi!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            {/* Cột phải: Thông tin */}
            <div className="space-y-6">
              <div className="flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <Image
                    src="/images/maiatech-logo.png"
                    alt="MAIATECH"
                    width={200}
                    height={50}
                    className="brightness-0 invert"
                  />
                </div>
                <p className="text-sm font-light">nhiều nỗ lực - một niềm tin</p>
              </div>

              <div className="flex flex-col md:flex-row md:gap-8 md:justify-between">
                {/* Phần LIÊN HỆ */}
                <div className="space-y-3 md:w-1/2">
                  <h3 className="text-2xl font-bold tracking-wide">LIÊN HỆ</h3>
                  <p className="text-sm leading-relaxed">
                    Trụ sở: Số 20, ngách 21, ngõ 367, phố Ngô Xuân Quảng (số cũ 20 Cửa Việt 1), thị trấn Trâu Quỳ, Gia Lâm, Hà Nội
                  </p>
                  <p className="text-sm">Email: contact@maiatech.com.vn</p>
                  <p className="text-sm">Hotline: 0936.458.486 – 024.33.898.222</p>
                </div>

                {/* Phần GIỜ MỞ CỬA */}
                <div className="space-y-3 md:w-1/2 mt-6 md:mt-0">
                  <h3 className="text-2xl font-bold tracking-wide">GIỜ MỞ CỬA</h3>
                  <div className="text-sm">
                    <p>Thứ Hai đến thứ Sáu:</p>
                    <p>Từ 8:00 sáng đến 17:00 chiều</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold tracking-wide">MẠNG XÃ HỘI</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="hover:opacity-80 transition-opacity">
                    <div className="bg-white rounded-full p-1.5">
                      <Facebook size={20} className="text-[#0066cc]" />
                    </div>
                  </Link>
                  <Link href="#" className="hover:opacity-80 transition-opacity">
                    <div className="bg-white rounded-full p-1.5">
                      <Twitter size={20} className="text-[#0066cc]" />
                    </div>
                  </Link>
                  <Link href="#" className="hover:opacity-80 transition-opacity">
                    <div className="bg-white rounded-full p-1.5">
                      <Youtube size={20} className="text-[#0066cc]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#0052a3] py-4 text-center text-white">
        <p className="text-sm">Copyright © MaiATech 2015 - 2025</p>
      </div>
    </>
  )
}
