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



    </div>
  )
}