'use client'

import { ArrowRight, MapPin, Star, ChevronRight } from 'lucide-react'

export default function Services() {
  const destinations = [
    {
      id: 1,
      title: 'COLOMBO',
      subtitle: 'Cosmopolitan City of Colombo',
      description: 'Experience the bustling capital with modern skyscrapers, colonial architecture, and vibrant street life.',
      image: 'colombo',
      color: 'from-blue-500/90 to-cyan-600/90',
      textColor: 'text-blue-900',
      rating: 4.7,
      reviews: 1243
    },
    {
      id: 2,
      title: 'GALLE',
      subtitle: 'Heritage City of Galle',
      description: 'Explore the UNESCO World Heritage Site with its historic Dutch fort and charming coastal streets.',
      image: 'galle',
      color: 'from-amber-500/90 to-orange-600/90',
      textColor: 'text-amber-900',
      rating: 4.9,
      reviews: 987
    },
    {
      id: 3,
      title: 'KANDY',
      subtitle: 'Cultural Heart of Kandy',
      description: 'Visit the spiritual center with the Temple of the Sacred Tooth Relic and beautiful botanical gardens.',
      image: 'kandy',
      color: 'from-emerald-500/90 to-green-600/90',
      textColor: 'text-emerald-900',
      rating: 4.8,
      reviews: 1120
    },
    {
      id: 4,
      title: 'SIGIRIYA',
      subtitle: 'Ancient Rock Fortress',
      description: 'Climb the legendary Lion Rock for breathtaking views and ancient frescoes.',
      image: 'sigiriya',
      color: 'from-red-500/90 to-rose-600/90',
      textColor: 'text-red-900',
      rating: 4.9,
      reviews: 856
    },
    {
      id: 5,
      title: 'YALA',
      subtitle: 'Wildlife Safari Adventure',
      description: 'Embark on thrilling safaris to spot leopards, elephants, and diverse wildlife in their natural habitat.',
      image: 'yala',
      color: 'from-brown-500/90 to-yellow-600/90',
      textColor: 'text-brown-900',
      rating: 4.6,
      reviews: 745
    },
    {
      id: 6,
      title: 'NUWARA ELIYA',
      subtitle: 'Tea Country Paradise',
      description: 'Discover rolling tea plantations, cool climate, and British colonial heritage.',
      image: 'nuwara-eliya',
      color: 'from-teal-500/90 to-blue-600/90',
      textColor: 'text-teal-900',
      rating: 4.7,
      reviews: 932
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center mb-6">
            <div className="w-8 h-px bg-blue-500"></div>
            <span className="mx-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
              DISCOVER
            </span>
            <div className="w-8 h-px bg-blue-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            Sri Lanka
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
            The diverse topography of Sri Lanka can take you from golden sandy beaches to rolling green mountains, 
            from rich heritage cities to all night parties in just a matter of hours.
          </p>
          
          <button className="group inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            FIND OUT MORE
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image/Color Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${destination.color} transition-all duration-500 group-hover:scale-105`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[400px] flex flex-col justify-end">
                {/* Rating */}
                <div className="absolute top-6 right-6 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                  <span className="font-semibold text-gray-900">{destination.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({destination.reviews})</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                  {destination.title}
                </h3>

                {/* Subtitle */}
                <p className="text-white/90 text-lg font-medium mb-4">
                  {destination.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/80 mb-6">
                  {destination.description}
                </p>

                {/* Location Tag */}
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <MapPin className="h-4 w-4 text-white mr-2" />
                  <span className="text-sm font-medium text-white">Discover More</span>
                </div>

                {/* Explore Button */}
                <button className={`inline-flex items-center justify-center ${destination.textColor} bg-white rounded-full px-6 py-3 font-medium hover:bg-gray-50 transition-colors duration-300 w-fit group/btn`}>
                  Explore
                  <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Hover Effect Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center mt-16 space-x-4">
          {destinations.slice(0, 4).map((dest) => (
            <button 
              key={dest.id}
              className="flex flex-col items-center group"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${dest.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-semibold">{dest.title.charAt(0)}</span>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                {dest.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}