import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 51.4816, // Latitude for Cardiff
  lng: -3.1791, // Longitude for Cardiff
};

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDNhYmHsA5MyUQbkoY8zIKCBAgoVJuSc80",
    libraries: ["places"],
  });

  const [policeStations, setPoliceStations] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      const map = new window.google.maps.Map(document.createElement("div"));
      const service = new window.google.maps.places.PlacesService(map);

      const request = {
        location: center,
        radius: "10000", // Search within 10km radius
        type: ["police"],
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPoliceStations(results);
        }
      });
    }
  }, [isLoaded]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
      {policeStations.map((station) => (
        <Marker
          key={station.place_id}
          position={{
            lat: station.geometry.location.lat(),
            lng: station.geometry.location.lng(),
          }}
          title={station.name}
        />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
