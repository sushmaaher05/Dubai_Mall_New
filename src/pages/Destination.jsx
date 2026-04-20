import React from 'react'

const Destination = () => {
  return (
    <div>

    <section className="relative h-screen w-full overflow-hidden bg-black text-white">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/destination/banner.png"
        alt="Dubai Mall"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

        {/* BOTTOM MERGE FADE */}
  <div className="absolute bottom-0 left-0 w-full h-40 
                  bg-gradient-to-b from-transparent to-black"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* SMALL TOP TEXT */}
        <p className="text-[#C9A96E] text-xs md:text-sm tracking-[0.4em] mb-6">
          A NEW PARADIGM
        </p>

        {/* MAIN TITLE */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-8xl leading-tight">
          The <br />
          Dubai Mall
        </h1>

        {/* LINE */}
        <div className="w-[1px] h-16 bg-[#C9A96E] mt-10"></div>

      </div>
    </section>


     <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Iconic <br />
            <span className="italic text-[#C9A96E]">
              Architecture.
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mb-8">
            Standing as the heart of Downtown Dubai, The Dubai Mall is a
            global icon of retail and leisure. From the soaring heights of
            the Burj Khalifa to the intricate design of the Fashion Avenue,
            every detail is crafted to offer an unparalleled sensory journey.
          </p>

          <button className="flex items-center gap-2 text-xs tracking-[0.3em] text-[#C9A96E] border-b border-[#C9A96E] pb-1 hover:gap-4 transition-all">
            EXPLORE THE LANDMARKS →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <img
            src="/images/destination/iconic.png"
            alt="architecture"
            className="w-full h-[400px] md:h-[550px] object-cover"
          />

          {/* FLOATING CARD */}
          <div className="absolute bottom-[-30px] left-6 md:left-10 
          bg-[#2a2a2a] p-5 md:p-6 w-[220px] md:w-[260px] shadow-xl">

            <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-2">
              01 — FASHION AVENUE
            </p>

            <h3 className="font-serif text-xl md:text-2xl italic text-[#C9A96E]">
              Elegance.
            </h3>

          </div>

        </div>

      </div>
    </section>



    <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-16">

      {/* TOP TEXT AREA */}
      <div className="grid lg:grid-cols-2 gap-10 mb-12 items-start">

        {/* LEFT */}
        <div>
          <p className="text-[#C9A96E] text-xs tracking-[0.3em] mb-4">
            A GLOBAL EPICENTER
          </p>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
            The Pulse of Dubai
          </h2>
        </div>

        {/* RIGHT */}
        <div className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
          Where the world comes to shop, dine, and be entertained.
          The Dubai Mall brings together the finest brands and
          cultural attractions in a space defined by light, luxury,
          and scale.
        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* LEFT LARGE IMAGE */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden">

          <img
            src="/images/destination/atrium.png"
            alt="Grand Atrium"
            className="w-full h-full object-cover
              transition-transform duration-700 ease-in-out 
               group-hover:scale-110"
          />

          {/* bottom fade effect */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

          {/* TEXT */}
          <p className="absolute bottom-6 left-6 text-[#C9A96E] text-xl md:text-2xl italic font-serif">
            The Grand Atrium
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px] lg:h-[650px]">

          {/* TOP LEFT */}
          <div className="overflow-hidden">
            <img
              src="/images/destination/img1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* TOP RIGHT */}
          <div className="overflow-hidden">
            <img
              src="/images/destination/img2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* BOTTOM FULL */}
          <div className="col-span-2 overflow-hidden">
            <img
              src="/images/destination/img3.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>


   <section className="relative bg-black text-white px-6 md:px-12 lg:px-20 py-32 md:py-50  overflow-hidden">

  {/* BACKGROUND TEXT */}
  <h1 className="absolute inset-0 flex items-center justify-center 
                 text-[120px] md:text-[220px] lg:text-[320px]
                 font-serif text-white/10 tracking-widest
                 pointer-events-none select-none">
    DUBAI
  </h1>

  
  {/* CENTER QUOTE */}
  <div className="absolute inset-0 flex items-center justify-center z-10 px-6">

    <div className="max-w-2xl text-center">
      <p className="italic text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6">
        "The Dubai Mall is more than a shopping destination; it is a
        monument to human ambition and design excellence, connecting
        the tradition of the souk with the future of global luxury."
      </p>

      <p className="text-[#C9A96E] text-sm tracking-[0.3em]">
        — MBS
      </p>
    </div>

  </div>

</section>


    </div>
  )
}

export default Destination