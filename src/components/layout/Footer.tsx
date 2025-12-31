'use client'

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Connect With Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8">
            CONNECT WITH US
          </h1>
          
          <div className="max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">
              CONTACT US
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">ANTYRA SOLUTIONS (PVT) LTD</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">
                      418, 1 Battaramulla Parliament Road, 10120<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-amber-400 mr-3" />
                  <div>
                    <div className="text-lg font-semibold text-white">94 77 718 3746</div>
                    <div className="text-sm text-gray-400">Available 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-amber-400 mr-3" />
                  <div>
                    <div className="text-lg font-semibold text-white">hello@talesofceylon.com</div>
                    <div className="text-sm text-gray-400">General inquiries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Youtube, label: 'YouTube' }
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href="#"
                      className="h-12 w-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-gray-300" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">
              QUICK LINKS
            </h2>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-amber-400 mb-4">Destinations</h4>
                <ul className="space-y-3">
                  {['Colombo', 'Galle', 'Kandy', 'Sigiriya', 'Yala', 'Nuwara Eliya'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-amber-400 mb-4">Experiences</h4>
                <ul className="space-y-3">
                  {['Whale Watching', 'Wildlife Safari', 'Diving', 'Surfing', 'Ayurveda', 'Tea Trails'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400 mb-4">Get updates on new destinations and special offers.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-16"></div>

        {/* Bottom Section - Credits */}
        <div className="text-center">
          <div className="mb-8">
            <h5 className="text-xl font-serif text-white mb-2">CONCEPT AND DESIGN BY</h5>
            <div className="text-2xl font-serif font-bold text-amber-400">
              TALES OF CEYLON
            </div>
            <div className="text-gray-400 mt-2">
              © 2024 – Another Adventures (Pvt) Limited
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            <p className="mb-2">All rights reserved. Terms & Conditions | Privacy Policy</p>
            <p>Sri Lanka Tourism Development Authority Registration No: XXX-XXXX-XXXX</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Tales of Ceylon. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}