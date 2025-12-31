'use client'

import { Star, Quote, MapPin, Calendar, User } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    quote: "An unforgettable journey through Sri Lanka's cultural triangle. The guides were incredibly knowledgeable about the ancient history.",
    author: "Sarah & James Wilson",
    location: "London, UK",
    duration: "12 Days",
    rating: 5,
    experience: "Cultural Heritage Tour",
    imageColor: "from-amber-500 to-orange-500"
  },
  {
    quote: "The whale watching experience in Mirissa was magical. We saw blue whales up close and the crew was extremely professional.",
    author: "Michael Tanaka",
    location: "Tokyo, Japan",
    duration: "8 Days",
    rating: 5,
    experience: "Whale Watching Adventure",
    imageColor: "from-blue-500 to-cyan-500"
  },
  {
    quote: "Our family holiday in Sri Lanka was perfect. From the beaches to the wildlife safaris, everything was perfectly organized.",
    author: "The Rodriguez Family",
    location: "Madrid, Spain",
    duration: "14 Days",
    rating: 5,
    experience: "Family Vacation",
    imageColor: "from-emerald-500 to-green-500"
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-6">
            <div className="w-8 h-px bg-amber-500"></div>
            <span className="mx-4 text-sm font-semibold text-amber-600 uppercase tracking-widest">
              TRAVELER STORIES
            </span>
            <div className="w-8 h-px bg-amber-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            Traveler Reviews
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hear from travelers who have experienced the magic of Ceylon
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Top Banner */}
              <div className={`h-2 bg-gradient-to-r ${testimonial.imageColor}`}></div>
              
              <div className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-gray-200 group-hover:text-amber-200 transition-colors duration-300" />
                </div>
                
                {/* Quote */}
                <p className="text-lg text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-700">5.0</span>
                </div>
                
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>
                
                {/* Author Info */}
                <div className="flex items-center mb-4">
                  <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${testimonial.imageColor} flex items-center justify-center mr-4`}>
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.author}
                    </h4>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                
                {/* Experience Details */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">Experience</div>
                      <div className="font-semibold text-gray-900">{testimonial.experience}</div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                      <div>
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-semibold text-gray-900">{testimonial.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-serif text-gray-900 text-center mb-8">
            Our Traveler Satisfaction
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
              { value: '98%', label: 'Would Recommend', icon: '❤️' },
              { value: '5000+', label: 'Happy Travelers', icon: '👥' },
              { value: '150+', label: 'Tour Packages', icon: '🎒' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-amber-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-6">
            Ready to create your own unforgettable Sri Lankan adventure?
          </p>
          <button className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-all duration-300 group">
            Plan Your Journey
            <svg 
              className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}