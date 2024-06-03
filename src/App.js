import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Facts from "./component/Facts";
import CrimeStats from "./component/CrimeStats";
import UrgentSupport from "./component/UrgentSupport";
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
              />
              <Route path="/stats" element={<CrimeStats />} />
              <Route path="/map" element={<MapComponent />} />
              <Route path="/tips" element={<p>test tips</p>} />
              <Route path="/urgent-support" element={<UrgentSupport />}></Route>
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
