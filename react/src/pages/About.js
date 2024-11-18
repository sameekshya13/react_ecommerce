import React from "react";
import Models from "../assets/zaramodels.jpg"; // Update the path if necessary
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Models})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
        At KaaliPeeli Taxi (KPT), we redefine luxury fashion with a commitment to diversity and innovation. Our collections are more than mere garments; they are a celebration of individuality, a blend of cultures, and a bold statement of contemporary style. Born from the vibrant energy of city life, KPT merges traditional elegance with modern sophistication, offering a unique space where fashion transcends boundaries. Embracing a new mindset, we curate pieces that empower everyone to express their true selves, reflecting our belief that style should be as diverse and dynamic as the world we live in. Discover KPT—where each creation tells a story, and every story enriches the tapestry of high-end fashion.
        </p>
      </div>
    </div>
  );
}

export default About;
