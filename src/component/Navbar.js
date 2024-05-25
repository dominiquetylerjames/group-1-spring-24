import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap";

function Navbar() {
  return (
    <div>
      <nav className="navBar p-4 bg-gray-800 text-white">
        <Link to="/" className="text-xl font-bold">
          logo
        </Link>
        <div className="topnav-right">
          <Link to="/" className="ml-4">
            Home
          </Link>
          <Link to="/stats" className="ml-4">
            Stats
          </Link>
          <a href="#tips" className="ml-4">
            Useful Tips
          </a>
          <a href="#urgent-support" className="ml-4">
            Urgent Support
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
