import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Facts from "./Facts";
import CrimeStats from "./CrimeStats";
import UrgentSupport from "./UrgentSupport";
import MapComponent from "./MapComponent";
import SafetyTips from "./SafetyTips";

const RoutesConfig = function() {
    return (
        <Routes>
        {" "}
        {/* This is where navigation (aka routing) is managed */}
        <Route
          path="/"
          element={
            <>
              {" "}
              {/* Displays one component above the other. 2 components because they use very different styling */}
              <Home />
              <Facts />
            </>
          }
        />
        <Route path="/stats" element={<CrimeStats />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/tips" element={<SafetyTips />} />
        <Route path="/urgent-support" element={<UrgentSupport />} />
      </Routes>)
}

export default RoutesConfig;
