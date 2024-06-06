// Importing necessary libraries and stylesheets
import React from 'react';
import "./Home.css";
import "./Facts.css";

// Defining the Home component
function Home() {
  return (
    // Main container for the Home component with a class name "home"
    <div className="home">
      {/* Container for the content within the home section */}
      <div className="home-content">
        {/* Logo image with an ID "logo" */}
        <img id="logo" src="logo.png" alt="GeoSafe logo"></img>
        {/* Heading for the home section */}
        <h1>
          Welcome to{" "}
          {/* Span to style the GeoSafe text */}
          <span style={{ color: "rgb(255, 102, 0)" }}>GeoSafe</span>
        </h1>
        {/* Paragraph introducing the GeoSafe application */}
        <p className="homeIntro">
          Geosafe prioritizes the well-being of women in Cardiff by offering a comprehensive suite of safety tools. Our interactive map displays real-time crime statistics, highlighting high-risk areas to empower you make informed decisions about your surroundings. With Geosafe, you can locate nearby shelters, police stations, and other safe spaces with ease, ensuring you always have resources readily available.
        </p>
      </div>
      {/* Button to scroll to the top of the page smoothly */}
      <button id="scrollToTop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    </div>
  );
}

// Exporting the Home component as the default export
export default Home;
