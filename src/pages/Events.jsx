import React from 'react'

const Events = () => {
  return (
    <div>
      <section className="relative w-full min-h-[100dvh] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="/images/event/banner.png"
          alt="event"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full pt-34 md:pt-54">

          {/* TOP SMALL TEXT */}
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-[#C9A96E] mb-4">
            CENTER OF THE WORLD
          </p>

          {/* MAIN TITLE */}
          <h1 className="font-serif text-[#EAE7DF] leading-[1.1]">

            <span className="block text-[45px] md:text-[80px] lg:text-[110px] font-bold">
              The Grand
            </span>

            <span className="block italic font-medium text-[45px] md:text-[80px] lg:text-[110px]">
              Stage
            </span>

          </h1>

          {/* LINE */}
          <div className="w-16 h-[2px] bg-[#C9A96E] my-6"></div>

          {/* DESCRIPTION */}
          <p className="max-w-xl text-gray-300 text-sm md:text-base leading-relaxed">
            Discover the pinnacle of global entertainment at The Dubai Mall.
            A curated season of luxury fashion showcases, world-class musical
            performances, and avant-garde art.
          </p>

        </div>
      </section>

      <section className="bg-black text-white px-6 md:px-16 py-16 md:py-24">

        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">

          <div>
            <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] mb-3">
              THE SELECTION
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#EAE7DF]">
              THE EVENT CALENDAR
            </h2>
          </div>

          <button className="text-xs tracking-[0.3em] border-b border-[#C9A96E] pb-1 w-fit">
            REQUEST VIP ACCESS
          </button>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="relative group overflow-hidden">
            <img
              src="/images/event/fountain.png"
              alt="event"
              className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* TEXT OVER IMAGE */}
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-[10px] tracking-widest text-[#C9A96E] mb-2">
                PREMIERE NOV 24
              </p>
              <h3 className="text-2xl md:text-3xl font-serif">
                Symphony at the Fountain
              </h3>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-8">

            {/* DESCRIPTION */}
            <div className="flex gap-4">
              <div className="w-[2px] bg-[#C9A96E]"></div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                An extraordinary outdoor concert experience featuring a
                world-renowned philharmonic orchestra synchronizing with the
                iconic Dubai Fountain choreography.
              </p>
            </div>

            {/* NUMBER + LOCATION */}
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl text-[#EAE7DF] font-light">
                01
              </span>
              <div className="w-10 h-[1px] bg-[#C9A96E]"></div>
              <p className="text-xs tracking-[0.3em] text-gray-400">
                THE WATERFRONT PROMENADE
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="bg-black text-white px-6 md:px-16 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center text-center md:text-left">

            <p className="text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
              The pinnacle of the fashion calendar. A breathtaking showcase of the
              season's most prestigious haute couture brands on a monumental custom runway.
            </p>

            {/* LINE */}
            <div className="hidden md:block w-[1px] h-20 bg-[#C9A96E] my-8 mx-auto md:mx-0"></div>

            {/* FOOTER TEXT */}
            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-500 tracking-widest text-xs mt-4">
              <span>FASHION AVENUE CATWALK</span>
              <span className="w-10 h-[1px] bg-gray-600"></span>
              <span className="text-2xl text-[#C9A96E]">02</span>
            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="relative group overflow-hidden">
            <img
              src="/images/event/fashion.png"
              alt="fashion event"
              className="w-full h-[300px] md:h-[500px] object-cover 
        transition-transform duration-700 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* TEXT OVER IMAGE */}
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-[10px] tracking-[0.3em] text-yellow-500 mb-2">
                SPRING / SUMMER SHOWCASE
              </p>

              <h3 className="text-xl md:text-3xl font-serif text-[#EAE7DF]">
                Fashion Avenue Haute Week
              </h3>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-black text-white px-6 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ITEM */}
          <div className="group">
            <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-4">
              MASTERCLASS
            </p>

            <div className="w-full h-[1px] bg-gray-800 mb-6 group-hover:bg-[#C9A96E] transition"></div>

            <h3 className="font-serif text-lg md:text-xl text-[#EAE7DF] mb-2 group-hover:text-[#C9A96E] transition">
              Culinary Excellence
            </h3>

            <p className="text-gray-500 text-sm">
              The Terrace | Dining District
            </p>
          </div>

          {/* ITEM */}
          <div className="group">
            <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-4">
              EXCLUSIVE
            </p>

            <div className="w-full h-[1px] bg-gray-800 mb-6 group-hover:bg-[#C9A96E] transition"></div>

            <h3 className="font-serif text-lg md:text-xl text-[#EAE7DF] mb-2 group-hover:text-[#C9A96E] transition">
              The Luxury Watch Fair
            </h3>

            <p className="text-gray-500 text-sm">
              Grand Atrium
            </p>
          </div>

          {/* ITEM */}
          <div className="group">
            <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-4">
              ART
            </p>

            <div className="w-full h-[1px] bg-gray-800 mb-6 group-hover:bg-[#C9A96E] transition"></div>

            <h3 className="font-serif text-lg md:text-xl text-[#EAE7DF] mb-2 group-hover:text-[#C9A96E] transition">
              Digital Canvas Series
            </h3>

            <p className="text-gray-500 text-sm">
              Dubai Mall Arts Hub
            </p>
          </div>

          {/* ITEM */}
          <div className="group">
            <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-4">
              FAMILY
            </p>

            <div className="w-full h-[1px] bg-gray-800 mb-6 group-hover:bg-[#C9A96E] transition"></div>

            <h3 className="font-serif text-lg md:text-xl text-[#EAE7DF] mb-2 group-hover:text-[#C9A96E] transition">
              Underwater Spectacle
            </h3>

            <p className="text-gray-500 text-sm">
              Dubai Aquarium & Zoo
            </p>
          </div>

        </div>
      </section>


      <section className="bg-black text-white px-6 md:px-16 py-24 md:py-32 flex items-center justify-center text-center">

        <div className="max-w-4xl">

          {/* QUOTE */}
          <h2 className="font-serif italic text-2xl sm:text-3xl md:text-5xl lg:text-6xl 
          leading-snug md:leading-tight text-[#EAE7DF]">
            “Experience the extraordinary <br className="hidden md:block" />
            in the heart of Dubai.”
          </h2>

          {/* BUTTON */}
          <div className="mt-10">
            <button className="bg-[#C9A96E] text-black px-8 md:px-12 py-3 md:py-4 text-xs md:text-sm 
             tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#b8955c] hover:scale-105">

              Register for Event Alerts
            </button>
          </div>

        </div>

      </section>


    </div>
  )
}

export default Events