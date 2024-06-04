import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Facts from "./component/Facts";
import CrimeStats from "./component/CrimeStats";
import UrgentSupport from "./component/UrgentSupport";
import MapComponent from "./component/MapComponent";
import SafetyTips from "./component/SafetyTips";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className="content">
            <Routes> {/* This is where navigation (aka routing) is managed */}
              <Route
                path="/"
                element={
                  <> {/* Displays one component above the other. 2 components because they use very different styling */}
                    <Home />
                    <Facts />
                  </>
                }
              />
              <Route path="/stats" element={<CrimeStats />} />
              <Route path="/map" element={<MapComponent />} />
              <Route path="/tips" element={<SafetyTips />} />
              <Route path="/urgent-support" element={<UrgentSupport />}></Route>
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
