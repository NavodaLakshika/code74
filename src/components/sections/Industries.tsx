'use client'

import { ArrowRight, Waves, Mountain, Fish, Wind, Activity, Leaf } from 'lucide-react'

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      title: 'WHALE WATCHING',
      subtitle: 'Glimpses of the Majestic Blue Whale',
      description: 'Sri Lanka is an island that is blessed with an eclectic mix of exotic beauty, culture and history that has made it the perfect place to witness the magnificent blue whales in their natural habitat.',
      icon: Waves,
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-900',
      iconColor: 'text-blue-600',
      gradient: 'bg-gradient-to-r from-blue-100 to-cyan-100'
    },
    {
      id: 2,
      title: 'WILDLIFE SAFARI',
      subtitle: 'Iconic Sanctuaries',
      description: 'Experience the thrill of spotting elephants, leopards, and diverse wildlife in Sri Lanka\'s renowned national parks.',
      icon: Mountain,
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-900',
      iconColor: 'text-amber-600',
      gradient: 'bg-gradient-to-r from-amber-100 to-orange-100'
    },
    {
      id: 3,
      title: 'DIVING AND SNORKELLING',
      subtitle: 'Colourful Marine Life',
      description: 'Explore vibrant coral reefs and encounter diverse marine species in the crystal-clear waters surrounding the island.',
      icon: Fish,
      color: 'from-teal-500 to-green-600',
      textColor: 'text-teal-900',
      iconColor: 'text-teal-600',
      gradient: 'bg-gradient-to-r from-teal-100 to-green-100'
    },
    {
      id: 4,
      title: 'SURFING IN SRI LANKA',
      subtitle: 'Exhilarating Water Sports',
      description: 'Ride the perfect waves on Sri Lanka\'s beautiful beaches, suitable for both beginners and experienced surfers.',
      icon: Wind,
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-900',
      iconColor: 'text-purple-600',
      gradient: 'bg-gradient-to-r from-purple-100 to-pink-100'
    },
    {
      id: 5,
      title: 'AYURVEDA',
      subtitle: 'The Knowledge of Gods',
      description: 'Experience ancient healing therapies and wellness treatments that have been practiced for thousands of years.',
      icon: Leaf,
      color: 'from-emerald-500 to-green-700',
      textColor: 'text-emerald-900',
      iconColor: 'text-emerald-600',
      gradient: 'bg-gradient-to-r from-emerald-100 to-green-100'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8">
            EXPERIENCES
          </h1>
          
          <button className="group inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl mb-12">
            FIND OUT MORE
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <div className="max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16"></div>
        </div>

        {/* Experiences List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => {
            const Icon = experience.icon
            return (
              <div key={experience.id} className="group">
                {/* Divider */}
                {index > 0 && (
                  <div className="max-w-3xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>
                )}
                
                {/* Experience Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">
                  <div className={`absolute left-0 top-0 bottom-0 w-2 ${experience.gradient}`}></div>
                  
                  <div className="pl-10 pr-8 py-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                      {/* Left side - Content */}
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className={`p-3 rounded-full ${experience.gradient} mr-4`}>
                            <Icon className={`h-6 w-6 ${experience.iconColor}`} />
                          </div>
                          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                            {experience.title}
                          </h2>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-serif text-gray-700 mb-4 font-medium">
                          {experience.subtitle}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {experience.description}
                        </p>
                        
                        <button className={`inline-flex items-center ${experience.textColor} font-medium hover:opacity-80 transition-opacity duration-300 group/btn`}>
                          READ MORE
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                      
                      {/* Right side - Decorative Element */}
                      <div className="md:w-1/3 flex justify-end">
                        <div className={`relative h-40 w-40 rounded-full ${experience.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`h-24 w-24 rounded-full ${experience.gradient} opacity-30`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Divider */}
        <div className="max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-16"></div>

        {/* Bottom Navigation */}
        <div className="flex justify-center mt-12 space-x-8">
          {experiences.map((experience) => (
            <button 
              key={experience.id}
              className="flex flex-col items-center group"
            >
              <div className={`w-3 h-3 rounded-full ${experience.gradient} mb-2 group-hover:scale-150 transition-transform duration-300`}></div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                {experience.title.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}