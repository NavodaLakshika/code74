'use client'

import { useState, useRef } from 'react'
import { Play, Pause, Volume2, Maximize } from 'lucide-react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime
      const duration = videoRef.current.duration
      setProgress((currentTime / duration) * 100)
    }
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const width = rect.width
      const percentage = x / width
      videoRef.current.currentTime = percentage * videoRef.current.duration
      setProgress(percentage * 100)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/videos/ceylon-hero.mp4" // Replace with your video path
          muted={isMuted}
          loop
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
        {/* EPIC TALES Text */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 tracking-tight">
            EPIC TALES
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="text-xl text-amber-300 font-light italic">of Sri Lanka</div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        </div>

        {/* COME ALIVE Text */}
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-12 leading-none">
          COME ALIVE
        </h2>

        {/* Play Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={togglePlay}
            className="group relative bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
            {isPlaying ? (
              <Pause className="relative h-12 w-12 text-white" />
            ) : (
              <Play className="relative h-12 w-12 text-white ml-1" />
            )}
          </button>
        </div>

        {/* WATCH THE VIDEO Text */}
        <div className="mb-16">
          <div className="inline-flex items-center bg-black/30 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <span className="text-white text-lg font-semibold tracking-widest uppercase mr-4">
              WATCH THE VIDEO
            </span>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            {/* Progress Bar */}
            <div 
              className="relative h-1.5 bg-gray-700 rounded-full mb-4 cursor-pointer group"
              onClick={handleSeek}
            >
              <div 
                className="absolute h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="flex items-center text-white hover:text-amber-300 transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-5 w-5 mr-2" />
                      <span className="text-sm">Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5 mr-2" />
                      <span className="text-sm">Play</span>
                    </>
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="flex items-center text-white hover:text-amber-300 transition-colors"
                >
                  <Volume2 className="h-5 w-5 mr-2" />
                  <span className="text-sm">{isMuted ? 'Unmute' : 'Mute'}</span>
                </button>
              </div>

              <div className="text-white text-sm">
                {videoRef.current ? 
                  `${Math.floor(videoRef.current.currentTime || 0)}:${Math.floor((videoRef.current.currentTime || 0) % 60).toString().padStart(2, '0')} / 
                   ${Math.floor(videoRef.current.duration || 0)}:${Math.floor((videoRef.current.duration || 0) % 60).toString().padStart(2, '0')}` 
                  : '0:00 / 0:00'
                }
              </div>

              <button
                onClick={toggleFullscreen}
                className="flex items-center text-white hover:text-amber-300 transition-colors"
              >
                <Maximize className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-amber-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
    </section>
  )
}