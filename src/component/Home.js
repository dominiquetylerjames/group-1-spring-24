import React from 'react';
import "./Home.css";
import "./Facts.css";
import Facts from './Facts'; // Assuming Facts component is in the same directory

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <img id="logo" src="logo.png" alt="GeoSafe logo"></img>
        <h1>
          Welcome to{" "}
          <span style={{ color: "rgb(255, 102, 0)" }}>GeoSafe</span>
        </h1>
        <p className="homeIntro">
          Geosafe prioritizes the well-being of women in Cardiff by offering a comprehensive suite of safety tools. Our interactive map displays real-time crime statistics, highlighting high-risk areas to empower you make informed decisions about your surroundings. With Geosafe, you can locate nearby shelters, police stations, and other safe spaces with ease, ensuring you always have resources readily available.
        </p>
      </div>
      <button id="scrollToTop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    </div>
  );
}

export default Home;
