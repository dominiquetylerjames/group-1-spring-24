import './Navbar.css'
import 'bootstrap'

function Navbar () {
    return (
        <nav className="navBar">
            <a href="#">logo</a>
            <div className="topnav-right">
                <a href="#stats">Stats</a>
                <a href="#tips">Useful Tips</a>
                <a href="#urgent-support">Urgent Support</a>
            </div>
        </nav>
    )
}

export default Navbar
