'use client'

import { Phone, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Footer background"
          className="w-full h-full object-cover opacity-45"
        />
        {/* Dark overlay (soft, not too dark) */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">

        {/* ===== TOP NAV ===== */}
        <div className="border-b border-white/20">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <nav className="flex flex-wrap justify-center gap-6">
              {['HOME', 'ABOUT', 'SERVICES', 'TECHNOLOGIES', 'CONTACT'].map(item => (
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

        {/* ===== MAIN FOOTER ===== */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

            {/* ===== SOCIAL ===== */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white text-lg font-semibold mb-6">
                CONNECT WITH US
              </h3>

              <div className="flex space-x-4">
                {[
                  { icon: Facebook, url: 'https://www.facebook.com/share/1FajfGFfqt/' },
                  { icon: Instagram, url: 'https://www.instagram.com/' },
                  { icon: Linkedin, url: 'https://www.linkedin.com/' },
                  { icon: Youtube, url: 'https://www.youtube.com/' }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center
                                 hover:bg-white transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-white group-hover:text-gray-900" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* ===== LOGO & TEXT ===== */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/40">
                  <Image
                    src="/IMAGE16.png"
                    alt="Code 74 Logo"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-white text-lg font-bold">
                    CODE 74
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Software Solutions
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Transforming businesses through <br />
                innovative software solutions
              </p>
            </div>

            {/* ===== CONTACT ===== */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              <a
                href="tel:+94752004019"
                className="flex items-center text-white hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-lg font-semibold">
                  +94 75 200 4019
                </span>
              </a>

              <a
                href="mailto:navodadevinfo1014@gmail.com"
                className="text-white hover:text-blue-400 transition-colors"
              >
                navodadevinfo1014@gmail.com
              </a>
            </div>

          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center">
            <p className="text-white text-sm font-medium">
              CODE 74 SOFTWARE SOLUTIONS (PVT) LIMITED
            </p>
            <p className="text-gray-400 text-xs mt-1">
              © {new Date().getFullYear()} Code 74 Software Solutions. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
