import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./style/index.css";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import About from "./components/About";
import Contact from "./components/Contact";
import Stars from "./components/canvas/Stars";


const App = () => {
  return (
    <div className="relative z-0 bg-red-400">
      <div className=" bg-hero-pattern bg-blue-600 bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <Contact />
      <Stars />
    </div>
  );
};

export default App;
