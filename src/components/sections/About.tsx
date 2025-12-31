'use client'

import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-amber-50/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex flex-col items-center mb-12">
              <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-2">
                Software Solutions
              </h1>
              <h2 className="text-5xl md:text-7xl font-serif text-gray-900 font-bold tracking-tight">
                CODE 74
              </h2>
            </div>
            
          <div className="max-w-3xl mx-auto space-y-6">
  <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed tracking-wide">
    Innovative technology, reliable solutions, and a passion for excellence define
    <span className="font-medium text-gray-800">
      {" "}Code 74 Software Solutions (Pvt) Ltd
    </span>.
    In a rapidly evolving digital world, we empower businesses to grow, adapt, and
    succeed through cutting-edge software and smart digital strategies. Mere lines
    of code cannot fully capture the impact of the solutions we create — they are
    designed to transform ideas into powerful realities.
  </p>

  <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed tracking-wide">
    Code 74 Software Solutions brings together creativity, technical expertise, and
    industry knowledge to deliver tailored software solutions for modern businesses.
    From custom web and mobile applications to enterprise systems, cloud solutions,
    and digital transformation services, we provide everything you need to build,
    scale, and optimize your digital presence.
  </p>

  <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed tracking-wide">
    So, partner with
    <span className="font-medium text-gray-800">
      {" "}Code 74 Software Solutions (Pvt) Ltd
    </span>{" "}
    and experience technology crafted with precision, innovation, and purpose.
  </p>
</div>

          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </section>

      {/* Separator Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-px w-full bg-gray-300"></div>
      </div>

      {/* About Us Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-12">
              ABOUT US
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Image placeholder */}
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50 border border-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl mb-4">🏝️</div>
                        <p className="text-gray-600 italic">Sri Lanka beauty</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-200/30 rounded-full -z-10"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-200/30 rounded-full -z-10"></div>
                </div>
                
                {/* Right side - Content */}
                <div className="text-left">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We are passionate storytellers and travel enthusiasts dedicated to showcasing the true essence of Sri Lanka. Our mission is to bridge the gap between travelers and the rich cultural heritage of this beautiful island.
                  </p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Through carefully curated content, authentic experiences, and reliable travel information, we help visitors discover the hidden gems and timeless stories that make Sri Lanka truly special.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Whether you're planning your first visit or are a seasoned traveler returning to explore more, Tales of Ceylon is your trusted companion for an unforgettable Sri Lankan journey.
                  </p>
                  
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Values</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Authenticity</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Cultural Respect</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Sustainable Tourism</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Quality Experiences</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="border-t border-gray-200 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tales of Ceylon. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}