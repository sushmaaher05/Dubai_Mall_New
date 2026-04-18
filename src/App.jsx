import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Scale from "./pages/Scale";
import Experiences from "./pages/Experiences";
import Events from "./pages/Events";


const App = () => {
  return (
    <>
      <Navbar />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/scale" element={<Scale />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/events" element={<Events />} /> 

      </Routes>
      <Footer/>
    </>
  );
  
}

export default App