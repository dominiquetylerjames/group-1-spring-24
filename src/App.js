import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Facts from "./component/Facts";
import CrimeStats from "./component/CrimeStats";

{
  /* These are how comments are made in JSX! */
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Facts />
                  </>
                }
              ></Route>
              <Route path="/stats" element={<p>CrimeStats /</p>}></Route>
              <Route path="/tips" element={<p>test tips</p>}></Route>
              <Route
                path="/urgent-support"
                element={<p>test urgent support</p>}
              ></Route>
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
