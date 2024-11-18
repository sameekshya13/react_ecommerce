import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/firstpagemodel1.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> KAALI PEELI TAXI </h1>
        <p> Elevate Your Style, Embrace the Elegance </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
