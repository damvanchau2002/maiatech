"use client"

import { useState } from "react"
import BlogCard from "./blog-card"
import BlogPagination from "./blog-pagination"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Công cụ Meta AI là gì? Tính năng mới ra mắt trên 2 ứng dụng Facebook, Instagram",
    description:
      "Meta ra mắt chatbot AI trên Facebook, Instagram, Messenger, WhatsApp, làm đầy tin tự ngại về quyền riêng tư và...",
    author: "Admin",
    date: "01/01/2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    slug: "cong-cu-meta-ai-la-gi",
  },
  // Update all other posts in the array to use the same image
  ...Array.from({ length: 23 }, (_, i) => ({
    id: i + 2,
    title: `Công cụ Meta AI là gì? Tính năng mới ra mắt trên 2 ứng dụng Facebook, Instagram ${i + 2}`,
    description:
      "Meta ra mắt chatbot AI trên Facebook, Instagram, Messenger, WhatsApp, làm đầy tin tự ngại về quyền riêng tư và...",
    author: "Admin",
    date: "01/01/2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg",
    slug: `cong-cu-meta-ai-la-gi-${i + 2}`,
  })),
]

const POSTS_PER_PAGE = 9

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = blogPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of blog section
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-maiaBlue-DEFAULT text-center mb-12">BLOG</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {currentPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              description={post.description}
              author={post.author}
              date={post.date}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>

        <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </section>
  )
}
