import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google" // Thay đổi từ Inter sang Roboto
import "./globals.css"
import { cn } from "@/lib/utils"

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["latin"], 
  variable: "--font-sans" 
}) // Thêm các weight cần thiết

export const metadata: Metadata = {
  title: "Tuyển dụng - MaiATech",
  description:
    "Cơ hội việc làm tại MaiATech. Chúng tôi cam kết mang tới cho Khách hàng những giải pháp chuyên nghiệp nhất !",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-white font-sans antialiased", roboto.variable)}>{children}</body>
    </html>
  )
}
