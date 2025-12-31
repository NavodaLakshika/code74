'use client'

import { Search, MapPin, Calendar, Star, Users, Plane } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const planningSteps = [
  {
    icon: Search,
    title: 'Explore & Discover',
    description: 'Browse our curated destinations and experiences to find what matches your travel dreams.',
    duration: 'Day 1-2',
    color: 'from-blue-500 to-cyan-500',
    tag: 'Inspiration',
    colorStart: '#3b82f6',
    colorEnd: '#06b6d4'
  },
  {
    icon: MapPin,
    title: 'Destination Selection',
    description: 'Choose your preferred locations - beaches, mountains, cultural sites or wildlife adventures.',
    duration: 'Day 2-3',
    color: 'from-purple-500 to-pink-500',
    tag: 'Customization',
    colorStart: '#8b5cf6',
    colorEnd: '#ec4899'
  },
  {
    icon: Calendar,
    title: 'Itinerary Planning',
    description: 'We craft a detailed day-by-day schedule tailored to your interests and preferences.',
    duration: 'Day 3-5',
    color: 'from-amber-500 to-orange-500',
    tag: 'Personalization',
    colorStart: '#f59e0b',
    colorEnd: '#f97316'
  },
  {
    icon: Users,
    title: 'Local Expert Matching',
    description: 'Connect with our certified guides who know their regions like the back of their hand.',
    duration: 'Day 5-6',
    color: 'from-emerald-500 to-green-500',
    tag: 'Expertise',
    colorStart: '#10b981',
    colorEnd: '#22c55e'
  },
  {
    icon: Plane,
    title: 'Travel Arrangements',
    description: 'We handle flights, accommodation, transport, and all logistics for a seamless journey.',
    duration: 'Day 6-7',
    color: 'from-red-500 to-rose-500',
    tag: 'Logistics',
    colorStart: '#ef4444',
    colorEnd: '#f43f5e'
  },
  {
    icon: Star,
    title: 'Experience & Enjoy',
    description: 'Embark on your adventure with 24/7 support and create unforgettable memories.',
    duration: 'Ongoing',
    color: 'from-indigo-500 to-blue-500',
    tag: 'Journey',
    colorStart: '#6366f1',
    colorEnd: '#3b82f6'
  },
]

export default function TravelPlanning() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full blur-3xl -mr-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl -ml-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-6">
            <div className="w-8 h-px bg-amber-500"></div>
            <span className="mx-4 text-sm font-semibold text-amber-600 uppercase tracking-widest">
              OUR PROCESS
            </span>
            <div className="w-8 h-px bg-amber-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            Your Journey Made Simple
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From dream to reality, we guide you through every step of planning your perfect Sri Lankan adventure
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-amber-500 to-indigo-500 transform -translate-x-1/2 z-0"></div>

          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-0">
            {planningSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              const rowStart = index + 1
              
              return (
                <div
                  key={step.title}
                  className={`relative lg:flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12`}
                  style={index === 0 ? { gridRowStart: rowStart } : undefined}
                >
                  {/* Desktop Content */}
                  <div 
                    className={`lg:w-1/2 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'} hidden lg:block ${
                      inView ? 'animate-slide-up-sm opacity-100' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Step Number */}
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                      {isEven && (
                        <span className="text-xs font-medium text-gray-500">
                          {step.duration}
                        </span>
                      )}
                      <div className={`h-10 w-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      {!isEven && (
                        <span className="text-xs font-medium text-gray-500">
                          {step.duration}
                        </span>
                      )}
                    </div>

                    {/* Step Tag */}
                    <span 
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${isEven ? 'float-right' : 'float-left'}`}
                      style={{ 
                        background: `linear-gradient(135deg, ${step.colorStart}, ${step.colorEnd})`,
                        color: 'white'
                      }}
                    >
                      {step.tag}
                    </span>

                    {/* Title & Description */}
                    <h3 className={`text-2xl font-serif font-bold text-gray-900 mb-3 clear-both ${isEven ? 'text-right' : 'text-left'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-gray-600 ${isEven ? 'text-right' : 'text-left'}`} style={{ maxWidth: '400px' }}>
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Version */}
                  <div className={`lg:hidden bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                    inView ? 'animate-slide-up-sm opacity-100' : 'opacity-0'
                  }`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start gap-4">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-serif font-bold text-gray-900">
                              {step.title}
                            </h3>
                            <span className="text-xs font-medium text-gray-500">
                              {step.duration}
                            </span>
                          </div>
                          <span 
                            className="text-xs font-bold text-white px-2 py-1 rounded-full"
                            style={{ 
                              background: `linear-gradient(135deg, ${step.colorStart}, ${step.colorEnd})`
                            }}
                          >
                            Step {index + 1}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {step.description}
                        </p>
                        <div className="text-xs font-medium text-gray-500 flex items-center">
                          <div 
                            className="h-2 w-2 rounded-full mr-2"
                            style={{ 
                              background: `linear-gradient(135deg, ${step.colorStart}, ${step.colorEnd})`
                            }}
                          ></div>
                          {step.tag}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`h-16 w-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl border-4 border-white group hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="lg:w-1/2 hidden lg:block"></div>
                </div>
              )
            })}
          </div>

          {/* Timeline Summary */}
          <div className="mt-16 lg:mt-20 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-gray-900 text-center mb-6">
              Your Journey Timeline
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {[
                { phase: 'Planning Phase', duration: '7 Days', color: 'bg-blue-500' },
                { phase: 'Booking Confirmation', duration: '24 Hours', color: 'bg-purple-500' },
                { phase: 'Pre-Trip Preparation', duration: '14 Days', color: 'bg-amber-500' },
                { phase: 'Travel Experience', duration: 'Custom', color: 'bg-emerald-500' },
              ].map((item, index) => (
                <div key={index} className="text-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${item.color} mb-2`}></div>
                    <div className="font-bold text-gray-900">{item.phase}</div>
                    <div className="text-sm text-gray-600">{item.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Ready to begin planning your unforgettable Sri Lankan adventure?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 group">
                Start Planning Now
                <svg 
                  className="inline ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-medium text-lg border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-300">
                View Sample Itineraries
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}