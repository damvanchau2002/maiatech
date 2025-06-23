import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card" // Assuming Card is from shadcn/ui

export default function FeaturedJobCard() {
  const jobDetails = {
    title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
    descriptionLines: [
      "Dạng là sinh viên Đại học hoặc đã tốt nghiệp Cao đẳng, Trung cấp",
      "Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến",
      "Kỹ năng: sử dụng máy tính thành thạo. Ưu tiên có kinh nghiệm về sử dụng các phần mềm đồ họa (như Canva, Photoshop, AutoCad, 3D Studio Max...), chưa có kinh nghiệm được đào tạo từ đầu.",
    ],
    linkText: "Đọc tiếp >>",
    linkHref: "#", // Placeholder link
  }

  return (
    <Card className="w-full overflow-hidden rounded-lg shadow-lg border-none bg-white flex flex-col md:flex-row">
      {/* Left Side: Image */}
      <div className="md:w-2/5 w-full flex-shrink-0 bg-white flex items-center justify-center p-4 md:p-0">
        <Image
          src="/images/recruitment-illustration.png"
          alt="Tuyển dụng MaiATech"
          width={300} // Adjust width as needed for balance
          height={250} // Adjust height as needed for balance
          className="object-contain"
        />
      </div>

      {/* Right Side: Information */}
      <div className="md:w-3/5 w-full bg-slate-100 p-6 flex flex-col justify-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">{jobDetails.title}</h2>
        {jobDetails.descriptionLines.map((line, index) => (
          <p key={index} className="text-sm text-gray-700 mb-2 leading-relaxed">
            {line}
          </p>
        ))}
        <Link
          href={jobDetails.linkHref}
          className="text-maiaBlue-DEFAULT hover:text-maiaBlue-dark font-medium text-sm mt-3 self-start"
        >
          {jobDetails.linkText}
        </Link>
      </div>
    </Card>
  )
}
