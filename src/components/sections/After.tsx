'use client'

import { ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function After() {
  const [activeCard, setActiveCard] = useState(0)

  const services = [
    {
      id: 1,
      title: 'WEB DEVELOPMENT',
      subtitle: 'Modern & Scalable Solutions',
      description:
        'Code 74\'s rich and diverse expertise brings many intriguing possibilities to craft the digital future. Explore solutions from responsive design to complex web applications, creating seamless experiences that define modern web excellence.',
      quote: '"Legends of Code, Wonders Anew"',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop'
    },
    {
      id: 2,
      title: 'MOBILE APPLICATIONS',
      subtitle: 'iOS & Android Platforms',
      description:
        'Crafting mobile experiences that resonate with users across platforms. From intuitive interfaces to powerful functionality, we build applications that connect people and transform businesses in the mobile-first world.',
      quote: '"Innovation in Your Hands"',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop'
    },
    {
      id: 3,
      title: 'ENTERPRISE SOFTWARE',
      subtitle: 'Business Automation Systems',
      description:
        'Transform your organization with enterprise solutions designed for scale, security, and efficiency. Our systems integrate seamlessly with your workflows, empowering teams and driving measurable business outcomes.',
      quote: '"Engineering Excellence"',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop'
    }
  ]

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % services.length)
  }

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Navigation Arrows - Top Right */}
          <div className="flex justify-end space-x-3 mb-8">
            <button 
              onClick={prevCard} 
              className="p-3 rounded-sm border-2 border-gray-900 bg-white hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextCard} 
              className="p-3 rounded-sm border-2 border-gray-900 bg-white hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE - Image with watercolor effect */}
            <div className="relative">
              <div className="relative overflow-hidden" style={{
                maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 800 800\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3CfeColorMatrix values=\'0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\' /%3E%3C/svg%3E")',
                maskSize: 'cover',
                WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 800 800\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3CfeColorMatrix values=\'0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\' /%3E%3C/svg%3E")',
                WebkitMaskSize: 'cover'
              }}>
                <img
                  src={services[activeCard].image}
                  alt={services[activeCard].title}
                  className="w-full h-[500px] object-cover transition-all duration-700"
                  style={{
                    filter: 'contrast(1.1) saturate(0.9)'
                  }}
                />
              </div>
              
              {/* Decorative brush strokes */}
              <div className="absolute -left-8 top-0 w-32 h-32 bg-gray-900 opacity-20 blur-2xl"></div>
              <div className="absolute -right-8 bottom-0 w-40 h-40 bg-gray-600 opacity-15 blur-3xl"></div>
            </div>

            {/* RIGHT SIDE - Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-5xl md:text-7xl font-serif italic text-gray-900 mb-6 leading-tight">
                  {services[activeCard].quote}
                </h2>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wider mb-4 border-b-2 border-gray-900 pb-2 inline-block">
                  {services[activeCard].title.split(' ')[0]}
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {services[activeCard].description}
                </p>
              </div>

              <div className="mt-10">
                <button className="group inline-flex items-center text-gray-900 font-semibold text-lg uppercase tracking-wider hover:gap-4 transition-all duration-300">
                  FIND OUT MORE
                  <div className="ml-3 w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <ChevronRight className="h-5 w-5 text-white" />
                  </div>
                </button>
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
        </div>
      </section>
    </div>
  )
}