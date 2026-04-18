import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";



const Navbar = () => {
     const [open, setOpen] = useState(false);

      const linkClass = ({ isActive }) =>
    isActive ? "text-yellow-400 " : "text-white";


  return (
  <div className="fixed  top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[85%] lg:w-[70%] text-white">

  <div className="bg-white/10 backdrop-blur-xl flex items-center justify-between px-12 md:px-6 py-6 h-[40px]
   rounded-full shadow-lg border border-white/20  before:absolute before:inset-0  before:bg-white/5  before:blur-xl before:-z-10 ">

{/* <div className="bg-white/10 backdrop-blur-md flex items-center justify-between px-12 md:px-6 py-6 h-[40px] 
rounded-full shadow-lg"> */}

        <h1 className="font-bold tracking-wide ">  DUBAI MALL </h1>

    <ul className="hidden md:flex gap-7 ">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/destination" className={linkClass}>The Destination </NavLink></li>
          <li><NavLink to="/scale" className={linkClass}>Scale & Reach </NavLink></li>
          <li><NavLink to="/experiences" className={linkClass}>Experiences </NavLink></li>
          <li><NavLink to="/events" className={linkClass}>Events</NavLink></li>  
           {/* <span className='absolute left-0 bottom-[-5] w-0 h-1 rounded-xl bg-green-400 transition-all
           duration-300 group-hover:w-full'></span>   */}
        </ul>


        <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}>
        ☰
      </button>

        {open && (
        <div className="absolute top-16 left-0 w-full bg-black rounded-xl p-5 md:hidden">
          <ul className="flex flex-col gap-4">
            <li><Link onClick={() => setOpen(false)} to="/" >Home</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/destination" className={linkClass}>The Destination</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/scale" className={linkClass}>Scale & Reach</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/experiences" className={linkClass}>Experiences</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/events" className={linkClass}>Events</Link></li>  
            
          </ul>
        </div>
      )}
        </div>
        </div>
  )
}
export default Navbar;