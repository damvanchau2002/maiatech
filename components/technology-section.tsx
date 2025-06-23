import TechnologyGrid from "./technology-grid"

const programmingLanguages = [
  {
    name: "C#",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c-la-gi-1-AlxJsIf4kkrSwyIlVk1EP8O1UZFS3j.svg",
  },
  {
    name: "TypeScript",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Typescript.svg-3ffuEuMpGyvioYhu4udzC2VZ0Crvvv.svg",
  },
  {
    name: "PHP",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/phpnet_logo-mhlWmUAAgXKSBPFDNfB1dVhbBzUMoy.svg",
  },
  {
    name: "Javascript",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JavaScript-logo-i48mDJQr2wEFi6yxhij4bWmT9n56to.svg",
  },
  {
    name: "Swift",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%2811%29-FM3wONvdZPxhpLsXqq6Z91fCK1ynN4.svg",
  },
  {
    name: "Java",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/How-is-AI-applied-to-Java-programming-e1704266486769-DlnDMWxGD3B2d68Vwtn8jUe1QIB6LQ.svg",
  },
  {
    name: "Kotlin",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_oUyjZH6_leRq64sQ-hQYIydIUqRojtROIaNrwqSNh3Ky6qL.svg",
  },
  { name: "Xem thêm", icon: "" },
]

const frameworksPlatforms = [
  {
    name: "Laravel",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20263-TacIUH9fzJzHpHCBlXgqJU1KkthJfT.svg",
  },
  {
    name: "AngularJS",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%286%29-mXh63TogZNj8YHZV6D0h54Hb0DI7bU.svg",
  },
  {
    name: "React Native",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%2813%29-LwblvPQcOkj7A7rQ9xuxgShbBsIFwc.svg",
  },
  {
    name: "ASP.net",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/khai-niem-aspnet-3NBzdhnwQoDiOOxavXh8RrIZWp95qT.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spring-ffpV1W2DSWXVxgDM1cz6TtyS7Qkly8.svg",
  },
  {
    name: "Vue.JS",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vuejs-la-gi-2-JvxZ1x3VHalkRZ0mqHckmMKNMkbA8Q.svg",
  },
  { name: "Magento", icon: "/magento-logo.png" },
  { name: "Xem thêm", icon: "" },
]

const databases = [
  { name: "MongoDB", icon: "/mongodb-logo.png" },
  {
    name: "Mysql",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/65193baacd09d1696152490.sql-mysql_training-RTjroJvuf4kcUNx8HJTRiBRxAsxiM7.svg",
  },
  { name: "SQLite", icon: "/sqlite-logo.png" },
  {
    name: "MS SQL Server",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mssql-mMt8AxV34AYSxQZd4AUIcJ09ajcYfy.svg",
  },
  {
    name: "MS Access",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60b0f18a2583ad37a0e3f443_Access-FTqFBnZLERzQUcwQ6BiCXgFRctU5um.svg",
  },
  { name: "Xem thêm", icon: "" },
]

export default function TechnologySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-maiaBlue-DEFAULT text-center mb-16">
          CÔNG NGHỆ CỦA CHÚNG TÔI
        </h1>

        <TechnologyGrid title="NGÔN NGỮ LẬP TRÌNH" technologies={programmingLanguages} />

        <TechnologyGrid title="FRAMEWORKS/PLATFORMS" technologies={frameworksPlatforms} />

        <TechnologyGrid title="DATABASE" technologies={databases} />
      </div>
    </section>
  )
}
