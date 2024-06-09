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
            GeoSafe prioritizes the well-being of women in Cardiff by offering a comprehensive suite of safety tools. Our interactive map displays real-time crime statistics, highlighting high-risk areas to empower you to make informed decisions about your surroundings. With GeoSafe, you can find information about nearby shelters, police stations, and other safe spaces with ease, ensuring you always have resources readily available.
          </p>
          <p>
          It takes about 5-10 minutes to report a crime on the South Wales Police website directly on this <a href="https://www.south-wales.police.uk/ro/report/ocr/af/how-to-report-a-crime/">link</a>. There is a "Leave this site" button that closes the site and opens Google if you need to or are worried someone may be watching you. Your form won't be saved or sent.
          </p>
          <p>
          If you want to report anonymously, you can contact Crimestoppers, either online or on their free helpline 0800555111.
          </p>
          <img id="arrow" src="arrow.png"></img> {/* A down arrow to indicate that the user should scroll down for more, disabled for now though for CSS reasons */}
        </div>
      </div>
    </div>
  );
}

export default Home;
