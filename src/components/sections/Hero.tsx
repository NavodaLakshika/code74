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
      description: 'Custom web solutions built with modern technologies'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600',
      title: 'MOBILE APPLICATION',
      description: 'Native and cross-platform mobile experiences'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600',
      title: 'DESKTOP APPLICATION',
      description: 'Powerful desktop software for enterprise needs'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600',
      title: 'ERP SOLUTIONS',
      description: 'Integrated business management systems'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600',
      title: 'CLOUD & API SERVICES',
      description: 'Scalable cloud infrastructure and API development'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600',
      title: 'CUSTOM SOFTWARE',
      description: 'Tailored solutions for your unique requirements'
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
        autoPlayRef.current = null
      }
      return
    }
    
    // Increase auto-play interval from 4s to 8s for slower transitions
    autoPlayRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % destinations.length)
    }, 8000) // Changed from 4000 to 8000
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, destinations.length])

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentImage((prev) => (prev + 1) % destinations.length)
    setTimeout(() => setIsAutoPlaying(true), 12000) // Increased from 6000 to 12000
  }

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentImage((prev) => (prev - 1 + destinations.length) % destinations.length)
    setTimeout(() => setIsAutoPlaying(true), 12000) // Increased from 6000 to 12000
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentImage(index)
    setTimeout(() => setIsAutoPlaying(true), 12000) // Increased from 6000 to 12000
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Images */}
      {destinations.map((dest, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)]`} // Changed duration from 1000ms to 2000ms
          style={{
            opacity: index === currentImage ? 1 : 0,
            transform: index === currentImage ? 'scale(1)' : 'scale(1.05)',
            transitionDelay: index === currentImage ? '0ms' : '0ms',
          }}
        >
          {/* Added a wrapper div for even smoother fade effect */}
          <div className={`absolute inset-0 transition-opacity duration-[3000ms] ease-out`} // Added extra transition layer
               style={{
                 opacity: index === currentImage ? 1 : 0,
               }}>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${dest.bgImage})`,
                // Added very slow zoom animation
                animation: index === currentImage ? 'slowZoom 20s ease-in-out infinite alternate' : 'none'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full text-center">
          {/* Title */}
          <h1 
            key={`title-${currentImage}`}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6"
            style={{ 
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              animation: `fadeIn 1.5s ease-out forwards`,
              opacity: 0 
            }}
          >
            {destinations[currentImage].title}
          </h1>

          {/* Description */}
          <p 
            key={`desc-${currentImage}`}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto"
            style={{ 
              textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
              animation: `fadeIn 1.5s ease-out 0.3s forwards`,
              opacity: 0 
            }}
          >
            {destinations[currentImage].description}
          </p>

          {/* CTA Button */}
          <div 
            key={`btn-${currentImage}`}
            className="mt-10"
            style={{ 
              animation: `fadeIn 1.5s ease-out 0.6s forwards`,
              opacity: 0 
            }}
          >
            <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none z-20">
        <button
          onClick={handlePrev}
          className="p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 pointer-events-auto hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={handleNext}
          className="p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 pointer-events-auto hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`rounded-full transition-all duration-700 ease-out ${
              index === currentImage 
                ? 'w-12 h-2 bg-white shadow-lg' 
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20">
        <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transition-all duration-500 hover:bg-white/20">
          <span className="text-white font-medium text-lg">
            {String(currentImage + 1).padStart(2, '0')}
          </span>
          <span className="text-white/60 mx-2">/</span>
          <span className="text-white/60">
            {String(destinations.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        /* Smooth scrolling effect */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}