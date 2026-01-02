'use client'

import { Mail, Phone, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gray-900">
      {/* Content */}
      <div className="relative z-10">
        {/* Main Navigation */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['HOME', 'ABOUT', 'SERVICES', 'TECHNOLOGIES', 'CONTACT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-sm font-medium tracking-wide hover:text-blue-400 transition-colors"
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
                      className="h-12 w-12 border-2 border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                  <img
                    src="/IMAGE16.png"
                    alt="Code 74 Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold">
                    CODE 74
                  </h3>
                  <p className="text-gray-400 text-sm">Software Solutions</p>
                </div>
              </div>
              <div className="text-white">
                <p className="text-sm leading-relaxed">
                  Transforming businesses through<br />
                  innovative software solutions
                </p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              <a 
                href="tel:+94777183746"
                className="flex items-center text-white hover:text-blue-400 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-lg font-semibold tracking-wide">+94 77 718 3746</span>
              </a>
              <a 
                href="mailto:hello@code74.com"
                className="text-white hover:text-blue-400 transition-colors text-base tracking-wide"
              >
                HELLO@CODE74.COM
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-white text-sm font-medium tracking-wide mb-2">
                CODE 74 SOFTWARE SOLUTIONS (PRIVATE) LIMITED
              </p>
              <p className="text-gray-400 text-xs tracking-wide">
                © {new Date().getFullYear()} Code 74 Software Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}