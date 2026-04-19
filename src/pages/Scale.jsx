import React from "react";
import { motion } from "framer-motion";

const Scale = () => {
  return (
    <div>
      <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden">

        {/* BACKGROUND IMAGE WITH MOTION */}
        <motion.img
          src="public/images/scale/banner.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.15, x: 40 }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 px-6 md:px-12 max-w-5xl">

          {/* TOP TEXT */}
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-[#C9A96E] mb-4 md:mb-6">
            THE WORLD'S MOST VISITED LIFESTYLE DESTINATION
          </p>

          {/* HEADING */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight text-[#EAE7DF] mb-6">
            Unprecedented Scale
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Encompassing 12 million square feet in the heart of Downtown Dubai, we offer
            an unrivaled retail stage where global brands meet the world's most affluent
            audiences.
          </p>

        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-white"></div>


      </section>

      <section className="bg-black text-white py-16 md:py-24 px-6 md:px-16 -mt-20">

        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white">

        </div>

        <div className="max-w-7xl mx-auto">

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">

            {/* ITEM 1 */}
            <div>
  <h2 className="mt-6 sm:mt-0 text-4xl sm:text-5xl md:text-6xl font-serif text-[#C9A96E]">
    105M+
  </h2>

  <p className="mt-4 text-xs tracking-[0.3em] text-gray-400">
    ANNUAL TOTAL VISITORS
  </p>

  <div className="w-10 h-[1px] bg-gray-700 mx-auto mt-6"></div>
</div>

            {/* ITEM 2 */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#C9A96E]">
                1,200+
              </h2>
              <p className="mt-4 text-xs tracking-[0.3em] text-gray-400">
                WORLD-CLASS RETAIL STORES
              </p>
              <div className="w-10 h-[1px] bg-gray-700 mx-auto mt-6"></div>
            </div>

            {/* ITEM 3 */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#C9A96E]">
                #1
              </h2>
              <p className="mt-4 text-xs tracking-[0.3em] text-gray-400">
                GLOBAL RETAIL RANKING
              </p>
              <div className="w-10 h-[1px] bg-gray-700 mx-auto mt-6"></div>
            </div>

          </div>
        </div>
      </section>

 <section className="bg-black text-white px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#EAE7DF] mb-10">
            A Global Intersection
          </h2>

          {/* PROGRESS ITEMS */}
          <div className="space-y-8">

            {/* ITEM */}
            <div>
              <div className="flex justify-between text-xs tracking-[0.3em] text-gray-400 mb-2">
                <span>INTERNATIONAL TOURISTS</span>
                <span className="text-[#C9A96E] text-base tracking-normal">45%</span>
              </div>
              <div className="w-full h-[1px] bg-gray-800">
                <div className="h-[1px] bg-[#C9A96E] w-[45%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs tracking-[0.3em] text-gray-400 mb-2">
                <span>REGIONAL GCC ELITE</span>
                <span className="text-[#C9A96E] text-base tracking-normal">35%</span>
              </div>
              <div className="w-full h-[1px] bg-gray-800">
                <div className="h-[1px] bg-[#C9A96E] w-[35%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs tracking-[0.3em] text-gray-400 mb-2">
                <span>LOCAL AFFLUENT RESIDENTS</span>
                <span className="text-[#C9A96E] text-base tracking-normal">20%</span>
              </div>
              <div className="w-full h-[1px] bg-gray-800">
                <div className="h-[1px] bg-[#C9A96E] w-[20%]"></div>
              </div>
            </div>

          </div>

          {/* DESCRIPTION */}
          <p className="mt-10 text-gray-400 text-sm leading-relaxed max-w-lg">
            The Dubai Mall isn't just a shopping center; it is a global waypoint. 
            We attract a high-spending international demographic from every corner 
            of the globe, providing brands with exposure that transcends borders.
          </p>
        </div>

        {/* RIGHT IMAGE + QUOTE */}
        <div className="relative">

          {/* IMAGE */}
          <img
            src="/images/scale/modern-art.png"
            alt="statue"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* QUOTE CARD */}
         <div className="
            absolute 
            -bottom-12 md:-bottom-16 
            left-6 right-6 md:left-10 md:right-10
            bg-[#1a1a1a]
            p-6 md:p-10
            shadow-2xl
          ">
            <p className="text-white text-lg md:text-xl italic leading-relaxed mb-4">
              "The epicenter of modern retail and global luxury commerce."
            </p>

            <span className="text-[#C9A96E] text-xs tracking-widest">
              MIDDLE EAST RETAIL AWARDS
            </span>
          </div>
        </div>

      </div>
    </section>


<section className="bg-black text-white py-20 px-6 md:px-16">
      
      {/* TITLE */}
      <h2 className="text-center text-4xl tracking-[0.4em] text-gray-400 text-lg mb-16">
        
        THE CENTER OF THE WORLD
      </h2>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-10 items-stretch">

        {/* LEFT IMAGE */}
        <div className="relative h-[500px] md:h-[650px] lg:h-full overflow-hidden">
          
          <img
            src="/images/scale/location.png"
            alt="globe"
            className="
w-full h-full object-cover
     transition-transform duration-700 group-hover:scale-110 "
  />
        

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* TEXT */}
          <div className="absolute -bottom-1 left-8 right-8 z-10">
            <p className="text-[#C9A96E] text-xs tracking-[0.3em] mb-3">
              PRIME LOCATION
            </p>

            <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-2">
              Downtown Dubai Resonance
            </h3>

            <p className="text-gray-300 text-sm max-w-md">
              Connecting to the world's tallest building and the Dubai Fountain,
              ensuring constant high-value footfall.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between h-[500px] md:h-[650px]">

          {/* TOP CARD */}
          <div className="bg-[#1a1a1a] p-8 flex items-center justify-between h-[48%]">
            
            <div>
              <p className="text-[#C9A96E] text-xs tracking-[0.3em] mb-3">
                DIGITAL FOOTPRINT
              </p>

              <h3 className="font-serif text-3xl md:text-4xl">
                <span className="text-white font-medium">7.2M+</span>{" "}
                <span className="text-gray-300">Social Followers</span>
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                The most followed retail destination online
              </p>
            </div>

            {/* <div className="border border-gray-600 w-16 h-16 flex items-center justify-center">
              🌐
            </div> */}
          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-2 gap-6 h-[48%]">

            {/* BOX 1 */}
            <div className="bg-[#1a1a1a] flex flex-col items-center justify-center text-center p-6">
              <h3 className="font-serif text-3xl md:text-4xl text-[#C9A96E]">
                5.9M
              </h3>
              <p className="text-gray-400 text-xs tracking-widest mt-2">
                GROSS LEASABLE AREA
              </p>
            </div>

            {/* BOX 2 */}
            <div className="bg-[#1a1a1a] flex flex-col items-center justify-center text-center p-6">
              <h3 className="font-serif text-3xl md:text-4xl text-[#C9A96E]">
                200+
              </h3>
              <p className="text-gray-400 text-xs tracking-widest mt-2">
                F&B OUTLETS
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>


           <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">

      {/* TITLE */}
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6">
        Join the Landmark
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-12">
        Retail opportunities in our exclusive Fashion Avenue and New Expansion
        zones are strictly limited. Partner with the global leader in lifestyle
        and commerce.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

        {/* PRIMARY BUTTON */}
        <button className="bg-[#C9A96E] text-black px-8 py-3 text-xs md:text-sm tracking-[0.2em] font-semibold w-full sm:w-auto hover:opacity-90 transition">
          DOWNLOAD LEASING PROFILE
        </button>

        {/* SECONDARY BUTTON */}
        <button className="border border-gray-700 px-8 py-3 text-xs md:text-sm tracking-[0.2em] w-full sm:w-auto hover:border-white transition">
          REQUEST PARTNERSHIP
        </button>

      </div>

    </section>


    </div>
  );
};

export default Scale;