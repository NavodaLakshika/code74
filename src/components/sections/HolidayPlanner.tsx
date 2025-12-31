'use client'

import { useState } from 'react'
import { ChevronRight, Calendar, Users, Heart, MapPin, Star, Navigation } from 'lucide-react'

const holidayTypes = [
  {
    id: 1,
    title: 'COUPLE\'S GETAWAY IN GALLE',
    subtitle: 'Romantic Escape',
    description: 'Experience the perfect romantic getaway in the historic city of Galle, with its charming colonial architecture, stunning sunsets, and luxurious boutique hotels.',
    highlights: [
      'Sunset walks along the Dutch fort ramparts',
      'Private candlelit dinners on the beach',
      'Couples spa treatments',
      'Luxury boutique accommodation'
    ],
    duration: '5 Days / 4 Nights',
    price: 'From $1,200',
    location: 'Galle',
    coordinates: { x: 20, y: 80 }, // Relative position on map
    imageColor: 'from-rose-500 to-pink-500',
    icon: Heart,
    featured: true
  },
  {
    id: 2,
    title: 'FAMILY ADVENTURE IN KANDY',
    subtitle: 'Cultural Discovery',
    description: 'A family-friendly journey through the cultural heart of Sri Lanka, perfect for creating lasting memories with loved ones.',
    highlights: [
      'Visit to the Temple of the Sacred Tooth',
      'Cultural dance performances',
      'Botanical garden exploration',
      'Elephant orphanage visit'
    ],
    duration: '7 Days / 6 Nights',
    price: 'From $1,800',
    location: 'Kandy',
    coordinates: { x: 45, y: 40 },
    imageColor: 'from-blue-500 to-cyan-500',
    icon: Users,
    featured: false
  },
  {
    id: 3,
    title: 'BEACH BLISS IN MIRISSA',
    subtitle: 'Coastal Paradise',
    description: 'Unwind on pristine beaches and experience the thrill of whale watching in Sri Lanka\'s southern coast.',
    highlights: [
      'Whale watching excursions',
      'Beachfront yoga sessions',
      'Fresh seafood dining',
      'Surfing lessons'
    ],
    duration: '6 Days / 5 Nights',
    price: 'From $1,500',
    location: 'Mirissa',
    coordinates: { x: 30, y: 85 },
    imageColor: 'from-amber-500 to-orange-500',
    icon: Star,
    featured: false
  },
  {
    id: 4,
    title: 'MOUNTAIN RETREAT IN ELLA',
    subtitle: 'Scenic Adventure',
    description: 'Perfect for solo travelers seeking adventure, breathtaking views, and serene mountain landscapes.',
    highlights: [
      'Hike to Ella Rock',
      'Visit Nine Arch Bridge',
      'Tea plantation tours',
      'Waterfall exploration'
    ],
    duration: '4 Days / 3 Nights',
    price: 'From $750',
    location: 'Ella',
    coordinates: { x: 60, y: 45 },
    imageColor: 'from-emerald-500 to-green-500',
    icon: MapPin,
    featured: false
  }
]

export default function HolidayPlanner() {
  const [activeHoliday, setActiveHoliday] = useState(0)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-8">
            YOUR HOLIDAY IN Sri Lanka
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            The paradise island of Sri Lanka is a great place to visit with your family, your partner or even on your own. 
            There's something to interest and excite every type of traveller.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['Couples', 'Families', 'Solo Travelers', 'Adventure Seekers', 'Luxury Travelers', 'Cultural Explorers'].map((type) => (
              <button
                key={type}
                className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content with Map */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Left side - Holiday Card */}
          <div className="lg:col-span-2">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              {/* Color Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${holidayTypes[activeHoliday].imageColor}`}></div>
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: '600px'
                }}></div>
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-12 h-full flex flex-col">
                {/* Featured Badge */}
                {holidayTypes[activeHoliday].featured && (
                  <div className="absolute top-6 right-6 bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm">
                    🌟 FEATURED
                  </div>
                )}
                
                <div className="mb-8">
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    {(() => {
                      const Icon = holidayTypes[activeHoliday].icon
                      return <Icon className="h-5 w-5 text-white mr-2" />
                    })()}
                    <span className="text-white font-medium">{holidayTypes[activeHoliday].subtitle}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                    {holidayTypes[activeHoliday].title}
                  </h2>
                  
                  <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
                    {holidayTypes[activeHoliday].description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">Holiday Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {holidayTypes[activeHoliday].highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <ChevronRight className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-white text-lg">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Sri Lanka Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 h-full shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-white">Explore Sri Lanka</h3>
                <div className="flex items-center text-white/80">
                  <Navigation className="h-5 w-5 mr-2" />
                  <span className="text-sm">Interactive Map</span>
                </div>
              </div>
              
              {/* Sri Lanka Map Container */}
              <div className="relative h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50">
                {/* Map Outline */}
                <div className="absolute inset-4">
                  {/* Simplified Sri Lanka Outline */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Sri Lanka Island Shape */}
                    <path
                      d="M25,20 L40,25 L55,20 L70,30 L75,45 L80,60 L75,75 L60,85 L45,80 L30,70 L20,55 L15,40 L20,25 Z"
                      fill="rgba(30, 41, 59, 0.5)"
                      stroke="rgba(59, 130, 246, 0.5)"
                      strokeWidth="1"
                      className="transition-all duration-300"
                    />
                    
                    {/* Location Markers */}
                    {holidayTypes.map((holiday, index) => (
                      <g
                        key={holiday.id}
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => setActiveHoliday(index)}
                      >
                        <circle
                          cx={holiday.coordinates.x}
                          cy={holiday.coordinates.y}
                          r={activeHoliday === index ? "6" : "4"}
                          fill={activeHoliday === index ? 
                            holiday.imageColor.includes('rose') ? "#f43f5e" :
                            holiday.imageColor.includes('blue') ? "#3b82f6" :
                            holiday.imageColor.includes('amber') ? "#f59e0b" :
                            "#10b981" 
                            : "#94a3b8"}
                          stroke="white"
                          strokeWidth={activeHoliday === index ? "2" : "1"}
                          className="hover:scale-125 transition-transform"
                        />
                        
                        {/* Location Label */}
                        <text
                          x={holiday.coordinates.x}
                          y={holiday.coordinates.y - 10}
                          textAnchor="middle"
                          fill="white"
                          fontSize="8"
                          fontWeight={activeHoliday === index ? "bold" : "normal"}
                          className="font-sans"
                        >
                          {holiday.location}
                        </text>
                        
                        {/* Pulsing animation for active marker */}
                        {activeHoliday === index && (
                          <circle
                            cx={holiday.coordinates.x}
                            cy={holiday.coordinates.y}
                            r="8"
                            fill="none"
                            stroke={holiday.imageColor.includes('rose') ? "#f43f5e" :
                                   holiday.imageColor.includes('blue') ? "#3b82f6" :
                                   holiday.imageColor.includes('amber') ? "#f59e0b" :
                                   "#10b981"}
                            strokeWidth="2"
                            strokeOpacity="0.5"
                          >
                            <animate
                              attributeName="r"
                              from="8"
                              to="12"
                              dur="1.5s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="stroke-opacity"
                              from="0.5"
                              to="0"
                              dur="1.5s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {holidayTypes.map((holiday, index) => {
                      const Icon = holiday.icon
                      return (
                        <div
                          key={holiday.id}
                          className={`flex items-center p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                            activeHoliday === index ? 'bg-white/20' : 'hover:bg-white/10'
                          }`}
                          onClick={() => setActiveHoliday(index)}
                        >
                          <div className={`h-6 w-6 rounded-full mr-3 ${
                            holiday.imageColor.includes('rose') ? 'bg-rose-500' :
                            holiday.imageColor.includes('blue') ? 'bg-blue-500' :
                            holiday.imageColor.includes('amber') ? 'bg-amber-500' :
                            'bg-emerald-500'
                          }`}></div>
                          <div>
                            <div className="text-white text-sm font-medium">{holiday.location}</div>
                            <div className="text-white/70 text-xs">{holiday.subtitle}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="text-sm text-white/70">Selected Location</div>
                    <div className="text-xl font-bold">{holidayTypes[activeHoliday].location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/70">Best Time to Visit</div>
                    <div className="text-lg font-medium">Dec - Mar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price and Booking Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Ready for Your {holidayTypes[activeHoliday].location} Adventure?
              </h3>
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{holidayTypes[activeHoliday].duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Private Tour</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-white/70 mb-2">Starting from</div>
              <div className="text-4xl font-bold text-white mb-4">{holidayTypes[activeHoliday].price}</div>
              <div className="flex gap-4 justify-end">
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-xl font-medium hover:shadow-xl transition-all duration-300 group">
                  Book Now
                  <ChevronRight className="inline ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium border border-white/30 hover:bg-white/30 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-6">
            Not sure which destination is right for you?
          </p>
          <button className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-black transition-all duration-300 group">
            Speak to Our Travel Expert
            <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}