'use client'

import Hero from '@/components/sections/Hero'
import Navbar from '@/components/layout/Navbar'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Technologies from '@/components/sections/Technologies'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import { ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <Navbar />
      <Hero/>
      <About />
      <Services />
      <Technologies />
      <Contact />
      <Chatbot />


      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  )
}