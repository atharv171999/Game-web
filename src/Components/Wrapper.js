import React from "react";
import "../App.css";
import About from "./About";
import Tournament from "./Tournament";
import Gallery from "./Gallery";
import Team from "./Team";
import Gears from "./Gears";
import Subscribe from "./Subscribe";

const Wrapper = () => {
  return (
    <div className="wrapper-section pb-32 lg:pb-52">
      <About />
      <Tournament />
      <Gallery />
      <Team/>
      <Gears/>
      <Subscribe/>
    </div>
  );
};

export default Wrapper;
