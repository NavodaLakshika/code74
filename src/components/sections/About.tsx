'use client'

export default function About() {
  return (
    <div id="about" className="min-h-screen bg-white">
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/aboutvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div>
              <div className="mb-10">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  ABOUT US
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-2">
                  Software Solutions
                </h1>
                <h2 className="text-5xl md:text-7xl font-serif text-gray-900 font-bold tracking-tight">
                  CODE 74
                </h2>
              </div>

              <div className="space-y-6 max-w-xl">
                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed tracking-wide">
                  Innovative technology, reliable solutions, and a passion for excellence define
                  <span className="font-medium text-gray-800">
                    {' '}Code 74 Software Solutions (Pvt) Ltd
                  </span>.
                  In a rapidly evolving digital world, we empower businesses to grow, adapt, and
                  succeed through cutting-edge software and smart digital strategies.
                </p>

                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed tracking-wide">
                  Code 74 Software Solutions brings together creativity, technical expertise, and
                  industry knowledge to deliver tailored software solutions for modern businesses.
                  From web and mobile applications to enterprise systems and cloud platforms.
                </p>

                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed tracking-wide">
                  Partner with
                  <span className="font-medium text-gray-800">
                    {' '}Code 74 Software Solutions (Pvt) Ltd
                  </span>{' '}
                  and experience technology crafted with precision, innovation, and purpose.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="inline-block px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Contact Us Today
                </a>
                <a href="#services" className="inline-block px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-px w-full bg-gray-300" />
      </div>
    </div>
  )
}