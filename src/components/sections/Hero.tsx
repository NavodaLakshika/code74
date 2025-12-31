'use client'
import { useState, useEffect, useRef } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const destinations = [
    { 
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600',
      title: 'WEB DEVELOPMENT',
      label: 'WEB DEV'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600',
      title: 'MOBILE APPLICATION',
      label: 'MOBILE APP'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600',
      title: 'DESKTOP APPLICATION',
      label: 'DESKTOP'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600',
      title: 'ERP SOLUTIONS',
      label: 'ERP'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600',
      title: 'CLOUD & API SERVICES',
      label: 'CLOUD API'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600',
      title: 'CUSTOM SOFTWARE',
      label: 'CUSTOM'
    }
  ]

  const categories = destinations

  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
        autoPlayRef.current = null
      }
      return
    }
    
    autoPlayRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % destinations.length)
    }, 3000)
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, destinations.length])

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentImage((prev) => (prev + 1) % destinations.length)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentImage((prev) => (prev - 1 + destinations.length) % destinations.length)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentImage(index)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const handleCategoryClick = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentImage(index)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Images */}
      {destinations.map((dest, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${dest.bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 pb-32 pt-16">
          <div className="max-w-6xl mx-auto w-full">
            <h1 
              key={`title-${currentImage}`}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center mb-4 animate-title tracking-wider"
              style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.5)' }}
            >
              {destinations[currentImage].title}
            </h1>
          </div>
        </div>

        {/* COMPACT CATEGORIES SECTION */}
        <div className="absolute bottom-0 left-0 right-0 pb-8 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Categories Container */}
            <div className="relative">
              {/* Subtle Background */}
              <div  />
              
              {/* Compact Categories Grid */}
              <div className="relative flex justify-center items-center gap-3 sm:gap-4 px-4 py-6">
                {categories.map((category, index) => {
                  const isActive = index === currentImage
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleCategoryClick(index)}
                      className="group relative flex flex-col items-center transition-all duration-500 hover:scale-105"
                    >
                      {/* Compact Circular Container */}
                      <div className={`relative transition-all duration-500 ${
                        isActive 
                          ? 'w-20 h-20 sm:w-24 sm:h-24' 
                          : 'w-14 h-14 sm:w-16 sm:h-16'
                      }`}>
                        
                        {/* Subtle Glow for Active */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-amber-400/40 blur-xl animate-pulse" />
                        )}
                        
                        {/* Image Circle */}
                        <div className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-500 ${
                          isActive 
                            ? 'ring-3 ring-amber-400 ring-offset-2 ring-offset-black/50' 
                            : 'ring-2 ring-white/30 group-hover:ring-white/50'
                        }`}>
                          <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${category.bgImage})` }}
                          />
                          
                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-b transition-opacity duration-500 ${
                            isActive 
                              ? 'from-transparent to-amber-900/30' 
                              : 'from-black/10 to-black/50 group-hover:from-transparent'
                          }`} />
                        </div>

                        {/* Small Active Dot */}
                        {isActive && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/50">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        )}
                      </div>

                      {/* Compact Label */}
                      <div className={`mt-2 transition-all duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-90'
                      }`}>
                        <p className={`text-center font-semibold uppercase tracking-wider transition-all duration-500 ${
                          isActive 
                            ? 'text-amber-400 text-[10px] sm:text-xs' 
                            : 'text-white text-[9px] sm:text-[10px] group-hover:text-amber-300'
                        }`}
                        style={{ 
                          textShadow: isActive ? '0 1px 4px rgba(251, 191, 36, 0.5)' : '0 1px 3px rgba(0,0,0,0.8)'
                        }}>
                          {category.label}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Minimal Info Text */}
              {/* <div className="relative text-center pb-2">
                <p className="text-white/60 text-xs">
                  <span className="text-amber-400 font-bold">{currentImage + 1}</span>/{categories.length}
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Compact Navigation */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-20">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-amber-400/50 transition-all duration-300 group"
          >
            <ChevronLeft className="w-4 h-4 text-white group-hover:text-amber-400 transition-colors" />
          </button>

          <div className="flex flex-col gap-2 py-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'w-1.5 h-5 bg-gradient-to-b from-amber-400 to-orange-500' 
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70 hover:h-3'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-amber-400/50 transition-all duration-300 group"
          >
            <ChevronRight className="w-4 h-4 text-white group-hover:text-amber-400 transition-colors" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 z-20">
          <div className="px-3 py-0.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-amber-400 font-bold text-base">{String(currentImage + 1).padStart(2, '0')}</span>
            <span className="text-white/60 mx-1 text-sm">/</span>
            <span className="text-white/60 text-sm">{String(destinations.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-title {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}