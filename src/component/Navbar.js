import "./Navbar.css";
import "bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navBar">
      <Link to="/">
        <img id="homepage-logo" src="logo.png" alt="GeoSafe logo" /> {/* Mini version of the logo serves as a permanently visible button back to the homepage, in addition to the Home button */}
      </Link>
      <div className="topnav-right"> {/* New div for remainder of nav bar so it can be right-aligned */}
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/stats" className="link">
          Stats
        </Link>
        <Link to="/map" className="link">
          Map
        </Link>
        <Link to="/tips" className="link">
          Useful Tips
        </Link>
        <Link to="/urgent-support" id="urgent-button">
          Urgent Support
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
