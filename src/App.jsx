import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Feather } from "lucide-react";
import Feature from "./components/Feature";
import Workflow from "./components/Workflow";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {


  return(
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <Feature/>
      <Workflow/>
      <Price/>
      <Testimonials/>
      <Footer/>
      </div>
      
    </>
  )
}

export default App;
