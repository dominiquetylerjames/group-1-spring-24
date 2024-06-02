import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Facts from "./component/Facts";
import CrimeStats from "./component/CrimeStats";
<<<<<<< HEAD
import UrgentSupport from "./component/UrgentSupport";
=======
import SafetyTips from "./component/SafetyTips";
>>>>>>> 8a4bf3b8411d3bcc2be63d549fd8e3f5997beba6
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
              <Route path="/stats" element={<CrimeStats />}></Route>
              <Route path="/tips" element={<SafetyTips />}></Route>
              <Route
                path="/urgent-support"
                element={<UrgentSupport />}
              ></Route>
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
