'use client'

import { ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Services() {
  const [activeCard, setActiveCard] = useState(0)

  const services = [
    {
      id: 1,
      title: 'WEB DEVELOPMENT',
      subtitle: 'Modern & Scalable Solutions',
      description: 'We create responsive, high-performance websites and web applications using the latest technologies. From simple business websites to complex enterprise applications.',
      technologies: ['.NET', 'ASP.NET', 'React', 'Next.js', 'Laravel'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop'
    },
    {
      id: 2,
      title: 'MOBILE APPLICATIONS',
      subtitle: 'iOS & Android Platforms',
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth across all mobile devices.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop'
    },
    {
      id: 3,
      title: 'ENTERPRISE SOFTWARE',
      subtitle: 'Business Automation Systems',
      description: 'Custom enterprise solutions designed to streamline operations, improve efficiency, and support data-driven decision-making for businesses of all sizes.',
      technologies: ['C#', '.NET Core', 'Microservices', 'API Integration', 'Cloud'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop'
    },
    {
      id: 4,
      title: 'CLOUD SOLUTIONS',
      subtitle: 'Scalable Infrastructure',
      description: 'Deploy and manage cloud-based solutions with our expert cloud services, ensuring scalability, security, and optimal performance.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop'
    }
  ]

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % services.length)
  }

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <div id="services" className="min-h-screen bg-white">
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              OUR SERVICES
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4">
              What We Offer
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - Image with watercolor effect */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={services[activeCard].image}
                  alt={services[activeCard].title}
                  className="w-full h-[500px] object-cover transition-all duration-700"
                />
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex justify-center space-x-4 mt-6">
                <button 
                  onClick={prevCard} 
                  className="p-3 rounded-full border-2 border-gray-900 bg-white hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextCard} 
                  className="p-3 rounded-full border-2 border-gray-900 bg-white hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-5xl md:text-7xl font-serif italic text-gray-900 mb-6 leading-tight">
                  "{services[activeCard].title.split(' ')[0]}"
                </h2>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wider mb-4 border-b-2 border-gray-900 pb-2 inline-block">
                  {services[activeCard].title}
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {services[activeCard].description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {services[activeCard].technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <a href="#contact" className="group inline-flex items-center text-gray-900 font-semibold text-lg uppercase tracking-wider hover:gap-4 transition-all duration-300">
                  GET STARTED
                  <div className="ml-3 w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <ChevronRight className="h-5 w-5 text-white" />
                  </div>
                </a>
              </div>

              {/* Mini indicator cards */}
              <div className="flex gap-4 mt-12">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveCard(index)}
                    className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                      index === activeCard
                        ? 'bg-gray-900'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* All Services Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRight className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.subtitle}</p>
                <a href="#contact" className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                  Learn more →
                </a>
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