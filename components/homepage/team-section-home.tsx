import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Lê Đoàn Phước",
    role: "CEO",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aphuoc-1-768x768%20%281%29-O7E1COLyGjulDDSEVggVaAGj1WE63C.svg",
  },
  {
    name: "Lê Thị Loan",
    role: "Member of Directory",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aphuoc-1-768x768%20%282%29-1vIPEC7VsYn1E6IVSA53GDbu2kWza3.svg",
  },
  {
    name: "Lê Sơn Tùng",
    role: "Business Manager",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aphuoc-1-768x768-BzoWC9YxeLws9ep4IZcAQh8GplnwE9.svg",
  },
]

export default function TeamSectionHome() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">ĐỘI NGŨ CỦA CHÚNG TÔI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-0">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={350}
                  height={350}
                  className="w-full object-cover"
                />
                <div className="py-4">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button size="lg">XEM THÊM</Button>
      </div>
    </section>
  )
}
