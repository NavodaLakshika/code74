'use client'

import { ArrowRight, ArrowLeft, MapPin, ChevronRight, Star } from 'lucide-react'
import { useState } from 'react'

export default function Services() {
  const [activeCard, setActiveCard] = useState(0)

  const services = [
    {
      id: 1,
      title: 'WEB DEVELOPMENT',
      subtitle: 'Modern & Scalable Solutions',
      description:
        'We design and develop high-performance websites and web applications using modern technologies that are fast, secure, and scalable for future growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'MOBILE APPLICATIONS',
      subtitle: 'iOS & Android Platforms',
      description:
        'Custom-built mobile applications crafted for seamless user experiences, performance optimization, and business growth across all devices.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'ENTERPRISE SOFTWARE',
      subtitle: 'Business Automation Systems',
      description:
        'Robust enterprise-level systems tailored to streamline operations, improve efficiency, and support data-driven decision-making.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
    }
  ]

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % services.length)
  }

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-px bg-gray-400"></div>
                  <span className="mx-4 text-sm font-semibold text-gray-700 uppercase tracking-widest">
                    OUR SERVICES
                  </span>
                  <div className="w-8 h-px bg-gray-400"></div>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-2">
                  Code 74
                </h1>
              </div>

              <div className="space-y-6 max-w-xl">
                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed tracking-wide">
                  Code 74 Software Solutions delivers innovative, reliable, and scalable
                  digital products that help businesses grow, adapt, and succeed in a
                  competitive digital landscape.
                </p>
              </div>

              <div className="mt-8">
                <button className="group inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300">
                  VIEW ALL SERVICES
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative">

              {/* Navigation */}
              <div className="flex justify-end space-x-4 mb-4">
                <button onClick={prevCard} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <ArrowLeft className="h-5 w-5 text-gray-700" />
                </button>
                <button onClick={nextCard} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <ArrowRight className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={services[activeCard].image}
                    alt={services[activeCard].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                </div>
                
                <div className="relative p-8 min-h-[400px] flex flex-col justify-between">

                  <div>
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                      <Star className="h-4 w-4 text-white mr-1" />
                      <span className="font-semibold text-white">Trusted</span>
                      <span className="text-white/80 text-sm ml-1">by clients</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                      {services[activeCard].title}
                    </h2>

                    <div className="flex items-center mb-6">
                      <div className="w-12 h-px bg-white/50 mr-4"></div>
                      <p className="text-lg text-white/90 font-medium">
                        {services[activeCard].subtitle}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {services[activeCard].description}
                    </p>

                    <div className="flex items-center justify-between">
                      <button className="inline-flex items-center text-gray-900 bg-white rounded-full px-6 py-3 font-semibold hover:bg-gray-100 transition-colors">
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </button>

                      <div className="flex items-center text-white/90">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium">Code 74 Solutions</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Counter */}
              <div className="text-right mt-4 text-sm text-gray-500">
                {activeCard + 1} / {services.length}
              </div>

              {/* Mini Cards */}
              <div className="flex space-x-4 mt-8">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveCard(index)}
                    className={`relative flex-1 h-24 rounded-xl overflow-hidden transition-all ${
                      index === activeCard
                        ? 'ring-2 ring-gray-900 transform -translate-y-1 shadow-lg'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>
                    <div className="relative p-4 h-full flex flex-col justify-end">
                      <h3 className="text-white font-bold text-sm">{service.title.split(' ')[0]}</h3>
                      <p className="text-white/80 text-xs">{service.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-px w-full bg-gray-300" />
      </div>
    </div>
  )
}