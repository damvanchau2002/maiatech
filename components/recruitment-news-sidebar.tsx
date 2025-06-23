import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RecruitmentNewsSidebar() {
  return (
    <aside className="space-y-6">
      {/* Technology Background Image */}
      <div className="relative h-64 rounded-lg overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MaiA_Tech-F2hZ4N0saSLKtwZYEVnSruIMBew31Y.png"
          alt="Technology Circuit Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
      </div>

      {/* Recruitment News Button */}
      <Button
        asChild
        className="w-full bg-maiaBlue-DEFAULT hover:bg-maiaBlue-dark text-white font-bold py-4 px-6 text-lg rounded-lg"
      >
        <Link href="/tuyen-dung/tin-tuc">TIN TỨC TUYỂN DỤNG</Link>
      </Button>

      {/* Additional Navigation */}
      <div className="space-y-3">
        <Button
          asChild
          variant="outline"
          className="w-full border-maiaBlue-DEFAULT text-maiaBlue-DEFAULT hover:bg-maiaBlue-DEFAULT hover:text-white"
        >
          <Link href="/tuyen-dung">VỊ TRÍ TUYỂN DỤNG</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="w-full border-maiaBlue-DEFAULT text-maiaBlue-DEFAULT hover:bg-maiaBlue-DEFAULT hover:text-white"
        >
          <Link href="/tuyen-dung/ung-tuyen">ỨNG TUYỂN NGAY</Link>
        </Button>
      </div>
    </aside>
  )
}
