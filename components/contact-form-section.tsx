"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactFormSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
    // You would typically get form data using FormData or state
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
    alert("Form submitted! Check console for data.")
  }

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-maiaBlue-DEFAULT text-center mb-12 sm:mb-16">
          LIÊN HỆ VỚI CHÚNG TÔI
        </h1>

        <div className="bg-primary rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 max-w-4xl mx-auto shadow-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-10">
            NHẬN TƯ VẤN & BÁO GIÁ
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-full">
            <div className="w-full">
              <Input
                type="text"
                name="fullName"
                placeholder="Họ và tên*"
                required
                className="w-full max-w-full bg-white text-gray-700 placeholder-gray-500 rounded-full py-6 px-6 text-base border-none focus:ring-2 focus:ring-maiaBlue-light"
              />
            </div>
            <div className="w-full">
              <Input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="w-full max-w-full bg-white text-gray-700 placeholder-gray-500 rounded-full py-6 px-6 text-base border-none focus:ring-2 focus:ring-maiaBlue-light"
              />
            </div>
            <div className="w-full">
              <Input
                type="tel"
                name="phone"
                placeholder="Điện thoại*"
                required
                className="w-full max-w-full bg-white text-gray-700 placeholder-gray-500 rounded-full py-6 px-6 text-base border-none focus:ring-2 focus:ring-maiaBlue-light"
              />
            </div>
            <div className="w-full">
              <Input
                type="text"
                name="company"
                placeholder="Công ty/tổ chức*"
                required
                className="w-full max-w-full bg-white text-gray-700 placeholder-gray-500 rounded-full py-6 px-6 text-base border-none focus:ring-2 focus:ring-maiaBlue-light"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Nội dung thông điệp"
                rows={6}
                className="w-full bg-white text-gray-700 placeholder-gray-500 rounded-3xl py-5 px-6 text-base border-none focus:ring-2 focus:ring-maiaBlue-light"
              />
            </div>
            <div className="text-left pt-4">
              <Button
                type="submit"
                className="bg-white text-maiaBlue-DEFAULT hover:bg-gray-100 font-semibold rounded-full py-3 px-10 text-lg transition-colors"
              >
                Gửi
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
