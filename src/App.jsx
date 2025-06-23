import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import About from "./components/About";
import Contact from "./components/Contact";
import Stars from "./components/canvas/Stars";
import { StarsCanvas } from "./components/canvas";


const App = () => {
  return (
    <div className="relative z-0 bg-[#050816] ">
      <div className=" bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
      <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
