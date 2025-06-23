"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Comment {
  id: number
  author: string
  content: string
  date: string
}

export default function BlogComments() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState({
    author: "",
    email: "",
    content: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newComment.author.trim() || !newComment.content.trim()) {
      alert("Vui lòng nhập tên và nội dung bình luận!")
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const comment: Comment = {
        id: Date.now(),
        author: newComment.author,
        content: newComment.content,
        date: new Date().toLocaleDateString("vi-VN"),
      }

      setComments((prev) => [comment, ...prev])
      setNewComment({ author: "", email: "", content: "" })
      alert("Bình luận đã được gửi thành công!")
    } catch (error) {
      alert("Có lỗi xảy ra. Vui lòng thử lại!")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Bình luận của bạn</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="author" className="text-sm font-medium text-gray-700">
              Tên của bạn *
            </Label>
            <Input
              id="author"
              type="text"
              value={newComment.author}
              onChange={(e) => setNewComment((prev) => ({ ...prev, author: e.target.value }))}
              placeholder="Nhập tên của bạn"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email (không bắt buộc)
            </Label>
            <Input
              id="email"
              type="email"
              value={newComment.email}
              onChange={(e) => setNewComment((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="Nhập email của bạn"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="content" className="text-sm font-medium text-gray-700">
            Nội dung bình luận *
          </Label>
          <Textarea
            id="content"
            value={newComment.content}
            onChange={(e) => setNewComment((prev) => ({ ...prev, content: e.target.value }))}
            placeholder="Nhập nội dung bình luận của bạn..."
            rows={4}
            required
          />
        </div>
        <Button type="submit" disabled={isSubmitting} className="bg-maiaBlue-DEFAULT hover:bg-maiaBlue-dark text-white">
          {isSubmitting ? "Đang gửi..." : "Phản hồi"}
        </Button>
      </form>

      {/* Comments List */}
      {comments.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Các bình luận ({comments.length})</h3>
          {comments.map((comment) => (
            <div key={comment.id} className="border-l-4 border-maiaBlue-DEFAULT pl-4 py-2">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold text-gray-900">{comment.author}</span>
                <span className="text-sm text-gray-500">• {comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
