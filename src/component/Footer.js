import './Footer.css';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>This app is to help people feel safe in their local area. We hope you find it useful.</p>
        </div>
        <div className="footer-section">
          <h4>Take me to</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Stats</a></li>
            <li><a href="#">Useful Tips</a></li>
            <li><a href="#">Urgent Support</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: KeepSafe@Guardify.co.uk</p>
          <p>Phone: 0800 123456</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;