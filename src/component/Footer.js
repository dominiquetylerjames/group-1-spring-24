import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-container">
        <div className="footer-left-col"> {/* Splitting the footer content into 2 columns for different styling */}
          <div className="footer-section" id="about-us">
            <h4>About Us</h4>
            <p>This app is to help people feel safe in their local area. We hope you find it useful.</p>
          </div>
          <div className="footer-section" id="contact-us">
            <h4>Contact Us</h4>
            <div id="contact-content">
              <p>Email: KeepSafe@Guardify.co.uk</p>
              <p id="solidus"> | </p>
              <p>Phone: 0800 123456</p>
            </div>
          </div>
        </div>
        <div className="footer-right-col">
          <div className="footer-section" id="take-me-to">
            <h4>Take me to</h4>
            <ul id="footer-list">
            <Link to="/">
              <li className="col col-a"><a href="#">Home</a></li>
            </Link>
            <Link to="/stats">
              <li className="col col-a"><a href="#">Stats</a></li>
            </Link>
            <Link to="/map">
              <li className="col col-a"><a href="#">Map</a></li>
            </Link>
            <Link to="/tips">
              <li className="col col-b"><a href="#">Useful Tips</a></li>
            </Link>
            <Link to="/urgent-support">
              <li className="col col-b"><a href="#">Urgent Support</a></li>
            </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
