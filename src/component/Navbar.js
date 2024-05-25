import './Navbar.css';
import 'bootstrap';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav className="navBar">
            <Link to="/">
                <img id="homepage-logo" src="logo.png" alt="GeoSafe logo" />
            </Link>
            <div className="topnav-right">
                <Link to="/"className="link">Home</Link>
                <Link to="/stats"className="link">Stats</Link>
                <Link to="/tips" className="link">Useful Tips</Link>
                <Link to="/urgent-support" id="urgent-button">Urgent Support</Link>
            </div>
        </nav>
    );
}

export default Navbar;
