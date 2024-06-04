import React from "react";
import { LoadScript } from "@react-google-maps/api";

const MapLoader = ({ apiKey, children }) => {
  return <LoadScript googleMapsApiKey={apiKey}>{children}</LoadScript>;
};

export default MapLoader;
