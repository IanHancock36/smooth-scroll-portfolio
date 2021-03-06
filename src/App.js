import React from "react";

import "./App.css";
import Section from "./Section"
import SmoothScroll from "./SmoothScroll"
import NavBar from "./Components/Navbar"

function App() {
  return (
    <SmoothScroll>
      <NavBar />
    <h2> Smooth Scroll </h2>
    <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
    
    </SmoothScroll>
  );
}

export default App;

