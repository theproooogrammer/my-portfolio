import React, { useState } from 'react';
import { Calendar, Building2, ChevronRight, Briefcase, Award, Code2 } from 'lucide-react';

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      year: "2023",
      company: "Tech Innovators Inc.",
      position: "Senior Full Stack Developer",
      duration: "2023 - Present",
      description: "Leading development of cloud-native applications and microservices architecture. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Reduced API response time by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Led team of 5 developers for major platform upgrade"
      ],
      tech: ["React", "Node.js", "AWS", "MongoDB"],
      color: "blue"
    },
    {
      year: "2021",
      company: "Digital Solutions Ltd",
      position: "Full Stack Developer",
      duration: "2021 - 2023",
      description: "Developed and maintained enterprise-level web applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
      achievements: [
        "Built real-time analytics dashboard used by 50K+ users",
        "Improved application performance by 35%",
        "Implemented automated testing reducing bugs by 45%"
      ],
      tech: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      color: "indigo"
    },
    {
      year: "2019",
      company: "StartUp Ventures",
      position: "Frontend Developer",
      duration: "2019 - 2021",
      description: "Responsible for building responsive and interactive user interfaces. Worked directly with clients to gather requirements.",
      achievements: [
        "Developed 15+ client websites with 100% satisfaction rate",
        "Reduced load time by 50% through optimization",
        "Implemented responsive design patterns"
      ],
      tech: ["React", "TypeScript", "SASS", "Redux"],
      color: "purple"
    },
    {
      year: "2018",
      company: "CodeCraft Agency",
      position: "Junior Developer",
      duration: "2018 - 2019",
      description: "Started career working on various web development projects. Gained extensive experience in modern web technologies.",
      achievements: [
        "Contributed to 10+ client projects",
        "Developed reusable component library",
        "Improved site accessibility scores to 98%"
      ],
      tech: ["JavaScript", "HTML/CSS", "jQuery", "Bootstrap"],
      color: "violet"
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Timeline Navigation - Mobile Optimized */}
          <div className="flex md:flex-col gap-3 overflow-x-auto pb-4 md:pb-0 md:overflow-x-visible hide-scrollbar snap-x snap-mandatory md:snap-none">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveExp(index)}
                className={`flex-none snap-center md:snap-align-none w-[260px] md:w-auto group relative flex items-center gap-4 p-4 rounded-xl transition-all ${
                  activeExp === index
                    ? 'bg-white shadow-lg shadow-blue-100 scale-[0.98] md:scale-100'
                    : 'hover:bg-white/50'
                }`}
              >
                <div
                  className={`w-14 h-14 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-inner transition-colors ${
                    activeExp === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {exp.year}
                </div>
                <div className="text-left flex-1">
                  <h3 className={`font-semibold transition-colors ${
                    activeExp === index ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {exp.company}
                  </h3>
                  <p className="text-sm text-gray-600">{exp.position}</p>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    activeExp === index ? 'rotate-90 text-blue-600' : 'text-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Experience Details - Mobile Optimized */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {experiences[activeExp].company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{experiences[activeExp].duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 flex-wrap">
                    {experiences[activeExp].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {experiences[activeExp].description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Key Achievements</h4>
                </div>
                <ul className="grid gap-3">
                  {experiences[activeExp].achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <Code2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}