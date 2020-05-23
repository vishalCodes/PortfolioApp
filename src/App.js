import React from "react";
import Navbar from "./Navbar";
import "./styles.css";
import Masthead from "./Masthead";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import ProtfolioModels from "./ProtfolioModels";
import Contact from "./Contact";
import About from "./About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Masthead />
      <Portfolio />
      <ProtfolioModels />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
