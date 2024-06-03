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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img id="arrow" src="arrow.png"></img> {/* A down arrow to indicate that the user should scroll down for more, disabled for now though for CSS reasons */}
        </div>
      </div>
    </div>
  );
}

export default Home;
