import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <div className="home-content">
          <img id="logo" src="logo.png" alt="GeoSafe logo"></img>
          <h1>
            Welcome to{" "}
            <span style={{ color: "rgb(255, 102, 0)" }}>GeoSafe</span> {/* Changes the font colour for part of the heading */}
          </h1>
          <p>
            Geosafe prioritizes the well-being of women in Cardiff by offering a comprehensive suite of safety tools. Our interactive map displays real-time crime statistics, highlighting high-risk areas to empower you make informed decisions about your surroundings. With Geosafe, you can locate nearby shelters, police stations, and other safe spaces with ease, ensuring you always have resources readily available.
          </p>
          <img id="arrow" src="arrow.png"></img> {/* A down arrow to indicate that the user should scroll down for more, disabled for now though for CSS reasons */}
        </div>
      </div>
    </div>
  );
}

export default Home;
