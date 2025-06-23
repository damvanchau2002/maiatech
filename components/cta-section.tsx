import Image from "next/image"

export default function CtaSection() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 bg-gray-900">
      {" "}
      {/* Adjusted padding and bg color */}
      <Image
        src="/images/cta-background.jpg"
        alt="Giải pháp chuyên nghiệp"
        fill
        objectFit="cover"
        quality={75}
        className="opacity-25" // Adjusted opacity
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6 leading-snug">
          {" "}
          {/* Adjusted font size and leading */}
          Chúng tôi cam kết mang tới cho Khách hàng những giải pháp chuyên nghiệp nhất !
        </h2>
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          {" "}
          {/* Adjusted font size */}
          Your Problem. <br className="sm:hidden" /> Our Solution.
        </p>
      </div>
    </section>
  )
}
