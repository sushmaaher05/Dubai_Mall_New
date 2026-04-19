import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-black text-white py-10 md:py-18 mt-5 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <h2 className="text-yellow-400 tracking-widest text-sm md:text-base">
          THE DUBAI MALL
        </h2>

        {/* CENTER LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-xs tracking-widest text-gray-400">
          <p className="hover:text-white cursor-pointer">PRIVACY POLICY</p>
          <p className="hover:text-white cursor-pointer">TERMS OF SERVICE</p>
          <p className="hover:text-white cursor-pointer">SUSTAINABILITY</p>
          <p className="hover:text-white cursor-pointer">PRESS CENTER</p>
        </div>

        {/* RIGHT */}
        <p className="text-[10px] text-gray-500 text-center md:text-right">
          © 2024 THE DUBAI MALL. EMAAR PROPERTIES.
        </p>

      </div>

    </footer>
  );
};

export default Footer;