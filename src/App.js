import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import CrimeStats from "./component/CrimeStats";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<CrimeStats />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
