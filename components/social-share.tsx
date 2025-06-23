"use client"

import { Facebook, Twitter, Instagram, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialShareProps {
  title: string
  url: string
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const handleShare = (platform: string) => {
    const encodedTitle = encodeURIComponent(title)
    const encodedUrl = encodeURIComponent(url)

    let shareUrl = ""

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
        break
      case "instagram":
        // Instagram doesn't have direct URL sharing, so we'll copy to clipboard
        navigator.clipboard.writeText(`${title} - ${url}`)
        alert("Đã sao chép liên kết để chia sẻ!")
        return
      default:
        // Generic share
        if (navigator.share) {
          navigator.share({
            title: title,
            url: url,
          })
        } else {
          navigator.clipboard.writeText(url)
          alert("Đã sao chép liên kết!")
        }
        return
    }

    window.open(shareUrl, "_blank", "width=600,height=400")
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Chia sẻ bài viết</h3>
      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("facebook")}
          className="text-blue-600 border-blue-600 hover:bg-blue-50"
        >
          <Facebook className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("twitter")}
          className="text-blue-400 border-blue-400 hover:bg-blue-50"
        >
          <Twitter className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("instagram")}
          className="text-pink-600 border-pink-600 hover:bg-pink-50"
        >
          <Instagram className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("share")}
          className="text-gray-600 border-gray-600 hover:bg-gray-50"
        >
          <Share2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
