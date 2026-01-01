'use client'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] overflow-hidden">

      {/* 🎬 BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src="/aboutus.mp4" type="video/mp4" />
        </video>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/40 to-slate-900/80" />
      </div>

      {/* 🌟 MAIN CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-6xl w-full">
          
          {/* ANIMATED BADGE */}
          <div className="flex justify-center mb-8">
            <div className="
              inline-flex items-center gap-2 px-4 py-2 
              bg-blue-600/20 backdrop-blur-sm 
              border border-blue-500/30 rounded-full
              animate-pulse
            ">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              <span className="text-sm text-blue-100 font-medium">
                Crafting Digital Excellence
              </span>
            </div>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="
            text-5xl md:text-7xl lg:text-8xl 
            font-bold text-white text-center mb-6
            leading-tight
          ">
            <span className="
              bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 
              bg-clip-text text-transparent
              drop-shadow-lg
            ">
              Digital Innovation
            </span>
            <br />
            <span className="text-white drop-shadow-lg">
              Meets Precision
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="
            text-xl md:text-2xl text-gray-200 
            text-center max-w-3xl mx-auto mb-10
            font-light leading-relaxed
          ">
            We transform visionary ideas into exceptional digital experiences 
            through cutting-edge web development solutions
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="
              group relative px-8 py-4 
              bg-gradient-to-r from-blue-600 to-cyan-500 
              text-white font-semibold rounded-lg
              hover:shadow-2xl hover:shadow-blue-500/30
              transition-all duration-300
              hover:-translate-y-1
            ">
              <span className="relative z-10">
                Start Your Project
              </span>
              <div className="
                absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 
                rounded-lg opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              " />
            </button>

            <button className="
              px-8 py-4 
              bg-white/10 backdrop-blur-sm
              border border-white/30
              text-white font-semibold rounded-lg
              hover:bg-white/20
              transition-all duration-300
              group
            ">
              <span className="flex items-center gap-2">
                View Our Portfolio
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* TECH STACK BADGES */}
          <div className="
            flex flex-wrap justify-center gap-3 
            mt-16 opacity-80
          ">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'AWS'].map((tech) => (
              <div 
                key={tech}
                className="
                  px-4 py-2 
                  bg-white/5 backdrop-blur-sm
                  border border-white/10
                  text-gray-300 text-sm rounded-full
                  hover:border-blue-400/50 hover:text-blue-300
                  transition-all duration-300
                "
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="
        absolute bottom-0 left-0 right-0 
        h-32 bg-gradient-to-t from-slate-900 to-transparent 
        pointer-events-none
      " />
      
      {/* ANIMATED GRID OVERLAY */}
      <div className="
        absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:50px_50px]
        opacity-30
        pointer-events-none
      " />

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="
          w-6 h-10 
          border-2 border-white/30 
          rounded-full
          flex justify-center
        ">
          <div className="
            w-1 h-3 
            bg-blue-400 
            rounded-full mt-2
            animate-bounce
          " />
        </div>
      </div>
    </section>
  )
}