import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogPostContent from "@/components/blog-post-content"
import BlogSidebar from "@/components/blog-sidebar"
import SocialShare from "@/components/social-share"
import RelatedArticles from "@/components/related-articles"
import BlogComments from "@/components/blog-comments"
import CtaSection from "@/components/cta-section"
import Image from "next/image"

// This would typically come from your CMS or API
const blogPost = {
  title: "MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer",
  content: `GÓC TUYỂN DỤNG
MaiATech tuyển dụng Cộng tác viên xử lý dữ liệu hình ảnh AITrainer
I. Mô tả công việc:
Xử lý dữ liệu hình ảnh phục vụ cho hệ thống tự tuệ nhân tạo (AI)
Thực hiện các nhiệm vụ liên quan đến việc gán nhãn (con người, đồ vật, động vật, phương tiện giao thông...) xuất hiện trong ảnh/video để sử dụng cho việc huấn luyện mô hình chuyên dụng.
Các công việc khác theo yêu cầu để làm đầu vào cho các hệ thống tự tuệ nhân tạo.
II. Yêu cầu ứng viên:
Phổi hợp cùng các bộ phận khác hoàn thành mục tiêu chung của dự án.
III. Yêu cầu về trình độ học vấn và nghiệp vụ: Cao đẳng, Trung cấp
Phẩm chất: Kiên trì, tỉ mỉ, cẩn thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến
Kỹ năng: sử dụng máy tính thành thạo. Ưu tiên có kinh nghiệm về sử dụng các phần mềm đồ họa (như Canva, Photoshop, AutoCad, 3D Studio Max...), chưa có kinh nghiệm được đào tạo từ đầu.
Có máy tính cá nhân
Có thể làm việc online tại công ty hoặc làm việc từ xa tại nhà
Có thể linh hoạt làm việc theo yêu cầu thời gian và theo đơn
hàng từ. Sau khi hoàn thành có thể làm thêm các công việc khác để tăng thu nhập.
III. Quyền lợi:
Được làm việc trong môi trường thân thiện, năng động và chuyên nghiệp
Được đào tạo và phát triển kỹ năng chuyên môn
Phần mềm: Kiến thức về AI, cần thận, tư duy làm việc linh hoạt, tiếp thu nhanh, cầu tiến
Thành, cầu tiến
Được hỗ trợ v�� đồng hành cùng team AITrainer hoặc chuyển sang vị trí công việc fulltime sau đó nếu có nhu cầu và theo đơn hàng từ khách hàng
1 số hình ảnh minh họa thao tác khoảnh vùng đối tượng`,
  author: "Admin",
  publishDate: "20/02/2025",
  category: "GÓC TUYỂN DỤNG",
  slug: "maiatech-tuyen-dung-cong-tac-vien-xu-ly-du-lieu-hinh-anh-aitrainer",
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const currentUrl = `https://maiatech.com.vn/blog/${params.slug}`

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header activePage="BLOG" />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Title */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1"></div> {/* Empty space for left alignment */}
            <h2 className="text-2xl sm:text-3xl font-bold text-maiaBlue-DEFAULT text-right border-b-4 border-maiaBlue-DEFAULT pb-2 px-4 bg-white rounded-t-lg shadow-sm">
              TIN TỨC MỚI
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <BlogPostContent
                title={blogPost.title}
                content={blogPost.content}
                author={blogPost.author}
                publishDate={blogPost.publishDate}
                category={blogPost.category}
              />

              {/* Featured Image */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-26oWeLQN46wxAZVR9GUrtyxQJFVsCV.svg"
                  alt="Blog Post Illustration"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <SocialShare title={blogPost.title} url={currentUrl} />
              <RelatedArticles />
              <BlogComments />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <CtaSection />
      <Footer />
    </div>
  )
}
