import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Experiences = () => {
  const textRef = useRef(null);

  return (
    <div>
      <div className="bg-black text-white min-h-screen">

        <div className="relative w-full min-h-[100dvh] overflow-hidden">


          <motion.img
            src="/images/experiences/banner.png"
            alt="fashion"
            className="absolute top-0 left-0 w-full h-full object-cover"

            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div
            ref={textRef}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">

            <p className="text-[9px] md:text-[11px] tracking-[0.5em] text-yellow-500 mb-4 uppercase">
              EVERYTHING YOU DESIRE
            </p>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-gray-200 text-center tracking-tight">

              <span className="italic font-medium text-[50px] md:text-[90px] lg:text-[130px]">
                Curation of the
              </span>
              <br />


              <span className="not-italic font-extrabold text-[50px] md:text-[90px] lg:text-[120px]">
                Infinite
              </span>

            </h1>
            <p className="text-gray-300 mt-7 max-w-2xl text-sm md:text-base leading-relaxed" >
              Step into the epicenter of luxury. The Dubai Mall brings together the world's most prestigious fashion houses and culinary masters in one legendary destination.
            </p>
          </div>

        </div>
      </div>



      {/*  FASHION SECTION */}
      <div className="bg-black text-white py-20 px-6 md:px-16">

        <div className="grid md:grid-cols-2 gap-10 items-center relative">


          <div className="relative">
            <img
              src="/images/experiences/fashion.png"
              alt="fashion"
              className="w-full h-[500px] object-cover"
            />
          </div>


          <div className="z-10">
            <p className="text-[9px] md:text-[11px] tracking-[0.5em] tracking-[0.3em] text-yellow-500 mb-4">
              — THE HAUTE COUTURE CORE
            </p>

            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
              Mastery in<br />Movement
            </h2>

            <p className="text-gray-400 max-w-md leading-relaxed">
              From the runways of Milan to the heart of Dubai. Every brand at Fashion Avenue is handpicked to provide a sensory experience that goes beyond traditional retail therapy.
            </p>
          </div>

          <div className="absolute left-[15%] top-[50%] -translate-y-1/2 bg-white/10 backdrop-blur-lg border border-white/5 
                    p-4 w-[240px] shadow-lg rounded-lg">

            <h3 className="font-serif text-lg mb-2">
              Fashion Avenue
            </h3>

            <p className="text-gray-300 text-xs leading-relaxed mb-3">
              Discover exclusive flagship boutiques and private viewing suites.
            </p>

            <button className="text-yellow-400 text-xs tracking-widest border-b border-yellow-400 pb-1">
              EXPLORE
            </button>

          </div>

        </div>
      </div>


      <section className="relative min-h-[100dvh] w-full">

        <img
          src="/images/experiences/culinary.png"
          alt="culinary"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

          <div className="w-[1px] h-16 bg-[#C9A96E] mb-6"></div>

          <h1 className="font-serif italic text-[#EAE7DF] text-[40px] md:text-[70px] lg:text-[90px] leading-tight">
            Culinary Distinction
          </h1>

          <p className="mt-4 text-[10px] md:text-xs tracking-[0.4em] text-yellow-500">
            EXCLUSIVELY AT THE DUBAI MALL
          </p>

        </div>
      </section>

      <section className="bg-black text-white py-16 md:py-24 px-6 md:px-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6 text-[#EAE7DF]">
              Palate <br /> Evolved
            </h2>

            <p className="text-gray-400 max-w-md leading-relaxed text-sm md:text-base">
              Dining at The Dubai Mall is a global journey. We curate flavors
              from every corner of the earth, delivered by masters of the craft
              in environments designed to enchant and inspire.
            </p>
          </div>

          <div className="relative">

            <img
              src="/images/experiences/drink.png"
              alt="drink"
              className="w-full h-[350px] md:h-[500px] object-cover"
            />

            <div className="md:absolute md:left-[-80px] md:top-1/2 md:-translate-y-1/2 bg-black p-6 md:p-10 mt-6 md:mt-0
               max-w-md shadow-xl ">

              <p className="text-[10px] tracking-[0.3em] text-yellow-500 mb-4">
                WORLD CLASS SELECTION
              </p>

              <h3 className="font-serif text-2xl md:text-4xl mb-4 text-[#EAE7DF]">
                The Gourmet District
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Over 200 dining experiences ranging from Michelin-starred fine
                dining to artisanal concepts, set against the backdrop of the
                iconic Dubai Fountain.
              </p>

              <div className="flex items-center gap-3 text-xs tracking-widest text-gray-300">
                <span className="w-8 h-[1px] bg-yellow-500"></span>
                RESERVATIONS VIA CONCIERGE
              </div>

            </div>

          </div>

        </div>
      </section>



      <section className="bg-black text-white px-6 md:px-16 py-16">

        {/* TITLE */}
        <div className="mb-10">
          <h2 className="font-serif text-3xl md:text-5xl text-[#EAE7DF]">
            Mall Icons
          </h2>
          <div className="w-16 h-[2px] bg-yellow-500 mt-3"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* BIG CARD (LEFT) */}
          <div className="md:col-span-2 relative group overflow-hidden">
            <img
              src="/images/experiences/dino.png"
              className="w-full h-[300px] md:h-[400px] object-cover 
        transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-xs tracking-widest text-yellow-500 mb-2">
                HERITAGE & ART
              </p>
              <h3 className="text-2xl md:text-3xl font-serif">
                The Dubai Dino
              </h3>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative group overflow-hidden">
            <img
              src="/images/experiences/rink.png"
              className="w-full h-[300px] md:h-[400px] object-cover 
        transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-xs tracking-widest text-yellow-500 mb-2">
                LEISURE
              </p>
              <h3 className="text-2xl font-serif">
                Dubai Ice Rink
              </h3>
            </div>
          </div>

          {/* BOTTOM LEFT */}
          <div className="relative group overflow-hidden">
            <img
              src="/images/experiences/cinemas.png"
              className="w-full h-[300px] object-cover 
        transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-xs tracking-widest text-yellow-500 mb-2">
                ENTERTAINMENT
              </p>
              <h3 className="text-2xl font-serif">
                Reel Cinemas
              </h3>
            </div>
          </div>

          {/* BOTTOM RIGHT (WIDE) */}
          <div className="md:col-span-2 relative group overflow-hidden">
            <img
              src="/images/experiences/aquarium.png"
              className="w-full h-[300px] object-cover 
        transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-xs tracking-widest text-yellow-500 mb-2">
                SPECTACLE
              </p>
              <h3 className="text-2xl md:text-3xl font-serif">
                The Dubai Aquarium
              </h3>
            </div>
          </div>

        </div>
      </section>


      <section className="bg-black text-white py-20 px-6 md:px-16 text-center">

        {/* TITLE */}
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#EAE7DF] mb-12">
          Plan Your Visit
        </h2>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* PRIMARY BUTTON */}
          <button className="
      bg-[#C9A96E] text-black 
      px-10 py-4 
      text-sm tracking-[0.3em] 
      uppercase
      transition-all duration-300
      hover:bg-[#b8955c]
    ">
            Book a Tour
          </button>

          {/* SECONDARY BUTTON */}
          <button className="
      border border-gray-600 
      text-white 
      px-10 py-4 
      text-sm tracking-[0.3em] 
      uppercase
      transition-all duration-300
      hover:bg-white hover:text-black
    ">
            Download Map
          </button>

        </div>

      </section>

    </div>
  )
}

export default Experiences;