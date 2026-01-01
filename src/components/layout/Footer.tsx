'use client'

import { Mail, Phone, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000)',
    }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Main Navigation */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
              {['HOME', 'ABOUT US', 'DESTINATIONS', 'EXPERIENCES', 'PLAN YOUR VISIT TO SRI LANKA', 'CONTACT US'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white text-sm font-medium tracking-wide hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            
            {/* Connect With Us */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white text-lg font-semibold tracking-wide mb-6">
                CONNECT WITH US
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Youtube, label: 'YouTube' }
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href="#"
                      className="h-12 w-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-white hover:text-gray-900" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col items-center">
              <h3 className="text-white text-lg font-semibold tracking-wide mb-6">
                CONTACT US
              </h3>
              <div className="space-y-3 text-white">
                <p className="font-semibold text-base">
                  ANTYRA SOLUTIONS (PVT) LTD
                </p>
                <p className="text-sm leading-relaxed">
                  419, 1, BATTARAMULLA, PANNIPITIYA RD, 12138<br />
                  SRI LANKA
                </p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              <a 
                href="tel:+94777183746"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-xl font-semibold tracking-wide">+94 77 718 3746</span>
              </a>
              <a 
                href="mailto:hello@talesofceylon.com"
                className="text-white hover:text-gray-300 transition-colors text-base tracking-wide"
              >
                HELLO@TALESOFCEYLON.COM
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-white text-sm font-medium tracking-wide mb-2">
                CONCEPT AND DESIGN BY
              </p>
              <p className="text-white text-xs tracking-wide">
                COPYRIGHTS 2024 - ANTYRA SOLUTIONS (PRIVATE) LIMITED
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}