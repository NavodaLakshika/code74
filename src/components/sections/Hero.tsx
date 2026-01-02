'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const services = [
    { 
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600',
      title: 'WEB DEVELOPMENT',
      description: 'Custom web solutions built with modern technologies'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600',
      title: 'MOBILE APPLICATIONS',
      description: 'Native and cross-platform mobile experiences'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600',
      title: 'ENTERPRISE SOFTWARE',
      description: 'Powerful solutions for business needs'
    },
    { 
      bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600',
      title: 'CLOUD SOLUTIONS',
      description: 'Scalable cloud infrastructure and services'
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
    
    autoPlayRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % services.length)
    }, 8000)
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, services.length])

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentImage((prev) => (prev + 1) % services.length)
    setTimeout(() => setIsAutoPlaying(true), 12000)
  }

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentImage((prev) => (prev - 1 + services.length) % services.length)
    setTimeout(() => setIsAutoPlaying(true), 12000)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentImage(index)
    setTimeout(() => setIsAutoPlaying(true), 12000)
  }

  return (
    <div id="home" className="relative w-full min-h-screen overflow-hidden bg-black">
      {services.map((service, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)]`}
          style={{
            opacity: index === currentImage ? 1 : 0,
            transform: index === currentImage ? 'scale(1)' : 'scale(1.05)',
            transitionDelay: index === currentImage ? '0ms' : '0ms',
          }}
        >
          <div className={`absolute inset-0 transition-opacity duration-[3000ms] ease-out`}
               style={{
                 opacity: index === currentImage ? 1 : 0,
               }}>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${service.bgImage})`,
                animation: index === currentImage ? 'slowZoom 20s ease-in-out infinite alternate' : 'none'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
        </div>
      ))}

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full text-center">
          <h1 
            key={`title-${currentImage}`}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6"
            style={{ 
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              animation: `fadeIn 1.5s ease-out forwards`,
              opacity: 0 
            }}
          >
            {services[currentImage].title}
          </h1>

          <p 
            key={`desc-${currentImage}`}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto"
            style={{ 
              textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
              animation: `fadeIn 1.5s ease-out 0.3s forwards`,
              opacity: 0 
            }}
          >
            {services[currentImage].description}
          </p>

          <div 
            key={`btn-${currentImage}`}
            className="mt-10"
            style={{ 
              animation: `fadeIn 1.5s ease-out 0.6s forwards`,
              opacity: 0 
            }}
          >
            <a href="#services" className="inline-block px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore Services
            </a>
          </div>
        </div>
      </div>

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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {services.map((_, index) => (
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

      <div className="absolute top-8 right-8 z-20">
        <div className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transition-all duration-500 hover:bg-white/20">
          <span className="text-white font-medium text-lg">
            {String(currentImage + 1).padStart(2, '0')}
          </span>
          <span className="text-white/60 mx-1">/</span>
          <span className="text-white/60">
            {String(services.length).padStart(2, '0')}
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

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}