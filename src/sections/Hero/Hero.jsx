import React from 'react'
import VideoBackground from "../../components/ui/VideoBackground.jsx";

const Hero = () => {
  return (
    <section id="hero" className="h-screen relative">

      <VideoBackground src="/videos/dubai.mp4" />

      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-semibold text-white">
          Dubai Mall</h1>
        </div>
     </section>
  )
}

export default Hero