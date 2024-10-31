import React from "react";
import { Globe, Code2, Database, Cpu } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React/Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vue.js", "WebGL/Three.js"],
      bgGradient: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100",
    },
    {
      title: "Backend",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Node.js", "Python/Django", "GraphQL", "REST APIs", "Microservices", "WebSockets"],
      bgGradient: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      borderColor: "border-green-100",
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "MySQL", "ElasticSearch"],
      bgGradient: "from-purple-50 to-fuchsia-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-100",
    },
    {
      title: "DevOps & Tools",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Docker/K8s", "AWS/GCP", "CI/CD", "Git/GitHub", "Linux/Nginx", "Monitoring"],
      bgGradient: "from-orange-50 to-amber-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-100",
    },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.bgGradient} border ${category.borderColor} p-6 rounded-xl hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${category.iconColor} transition-transform group-hover:scale-110`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-3 py-1.5 border border-current rounded-lg text-sm 
                    ${category.iconColor} bg-white/50 hover:bg-white 
                    transition-colors cursor-default`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
