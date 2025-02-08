import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Feather } from "lucide-react";
import Feature from "./components/Feature";
import Workflow from "./components/Workflow";
import Price from "./components/Price";
function App() {


  return(
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <Feature/>
      <Workflow/>
      <Price/>
      </div>
      
    </>
  )
}

export default App;
