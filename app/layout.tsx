import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google" // Or a font that matches the design more closely if specified
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" }) // Consider a font like Roboto or Open Sans if it matches better

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
      <body className={cn("min-h-screen bg-white font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  )
}
