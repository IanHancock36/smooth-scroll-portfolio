import React from "react";
import "./App.css";
import Section from "./Section"
import SmoothScroll from "./SmoothScroll"

function App() {
  return (
    <SmoothScroll>
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

