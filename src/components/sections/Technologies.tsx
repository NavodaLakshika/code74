'use client'

import { Code, Database, Globe, Server, Smartphone, Cloud } from 'lucide-react'

export default function Technologies() {
  const technologies = [
    {
      category: 'Frontend',
      icon: Globe,
      tech: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      category: 'Backend',
      icon: Server,
      tech: ['.NET', 'ASP.NET', 'C#', 'Node.js', 'Nest.js', 'Laravel', 'PHP'],
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      tech: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'PWA'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      category: 'Database',
      icon: Database,
      tech: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Redis'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      tech: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      category: 'Other Technologies',
      icon: Code,
      tech: ['REST APIs', 'GraphQL', 'Microservices', 'Socket.io', 'WebSockets'],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ]

  return (
    <div id="technologies" className="min-h-screen bg-gray-50">
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              OUR TECH STACK
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4">
              Technologies We Use
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and efficient software solutions
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((techCategory, index) => {
              const Icon = techCategory.icon
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`${techCategory.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`h-7 w-7 ${techCategory.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {techCategory.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {techCategory.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`px-3 py-1 ${techCategory.bgColor} ${techCategory.color} rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">
                      Expert implementation and optimization of {techCategory.category.toLowerCase()} technologies
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '20+', label: 'Technologies Used' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-px w-full bg-gray-300" />
      </div>
    </div>
  )
}