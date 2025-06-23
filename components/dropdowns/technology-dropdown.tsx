import Link from "next/link"

interface TechnologyDropdownProps {
  setActiveDropdown: (value: string | null) => void
}

const TechnologyDropdown = ({ setActiveDropdown }: TechnologyDropdownProps) => {
  const technologyMenuData = {
    "NGÔN NGỮ": ["C#", "PHP", "TypeScript", "JavaScript", "Dart", "Swift", "Java", "Kotlin", "Objective C", "Python"],
    FRAMEWORK: [
      "Laravel",
      "AngularJS",
      "React Native",
      "ASP.NET",
      "NodeJS",
      "Spring Boot",
      "Vue.JS",
      "Magento",
      "NestJS",
      "ReactJS",
      "WordPress",
      "Sails.JS",
      "RxJava",
      "Alamofire",
      "Symfony",
      "Flutter",
      "ReactiveCocoa",
      "Django",
      "Ruby on Rails",
      "CakePHP",
      "YII",
      "Next.JS",
      "Nupti.JS",
      "Meteor",
    ],
    DATABASE: ["Elasticsearch", "MongoDB", "PostgreSQL", "MySQL", "Firebase", "SQLite", "Realm", "CoreData", "Oracle"],
    DEVOPS: [
      "Jenkins",
      "Git",
      "Tosca",
      "Docker",
      "GitHub",
      "TestSigma",
      "Puppet",
      "Chef",
      "Nagios",
      "CircleCI",
      "Kubernetes",
      "Prometheus",
      "Buddy",
      "Selenium",
      "Grafana",
      "Bamboo",
      "Tricentis",
    ],
  }

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-8 animate-fadeIn">
      <div className="grid grid-cols-4 gap-8">
        {Object.entries(technologyMenuData).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="font-bold text-lg text-maiaBlue-DEFAULT uppercase tracking-wide border-b-2 border-maiaBlue-DEFAULT pb-2 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={`/cong-nghe?category=${encodeURIComponent(category)}&tech=${encodeURIComponent(item)}`}
                  className="text-sm text-gray-700 hover:text-maiaBlue-DEFAULT transition-colors duration-150 block py-1 px-2 rounded hover:bg-blue-50 flex items-center space-x-2"
                  onClick={() => setActiveDropdown(null)}
                >
                  <i className="wpr-sub-icon fas fa-code text-xs text-maiaBlue-DEFAULT"></i>
                  <span>{item}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnologyDropdown