import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, useLoadScript, HeatmapLayer } from "@react-google-maps/api";
import axios from "axios";
import MarkerClustererPlus from "marker-clusterer-plus";
import "./MapComponent.css";

// Coordinates for Cardiff city center
const center = {
  lat: 51.4816,
  lng: -3.1791,
};

const MapComponent = () => {
  // Load the Google Maps API script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places", "visualization"],
  });

  // Define state variables
  const [crimeData, setCrimeData] = useState([]);
  const [postcode, setPostcode] = useState("");
  const [mapCenter, setMapCenter] = useState(center);
  const [zoom, setZoom] = useState(14);
  const [selectedCrime, setSelectedCrime] = useState(null);
  const [selectedClusterData, setSelectedClusterData] = useState(null);
  const mapRef = useRef(null);
  const clustererRef = useRef(null);

  // Fetch crime data when the map script is loaded
  useEffect(() => {
    if (isLoaded) {
      fetchCrimeData(center.lat, center.lng);
    }
  }, [isLoaded]);

  // Update map markers and clusterer when crime data changes
  useEffect(() => {
    if (mapRef.current && crimeData.length > 0) {
      const markers = crimeData.map((crime) => {
        const marker = new window.google.maps.Marker({
          position: {
            lat: parseFloat(crime.location.latitude),
            lng: parseFloat(crime.location.longitude),
          },
          title: crime.category,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 6,
            fillColor: "#007bff",
            fillOpacity: 1,
            strokeWeight: 0,
          },
        });
        marker.addListener("click", () => handleMarkerClick(crime));
        return marker;
      });

      clustererRef.current = new MarkerClustererPlus(mapRef.current, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });

      // Change marker icons on cluster hover
      clustererRef.current.addListener("mouseover", (cluster) => {
        handleClusterHover(cluster);
        cluster.getMarkers().forEach((marker) => {
          marker.setIcon({
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#ff0000",
            fillOpacity: 1,
            strokeWeight: 0,
          });
        });
      });

      // Reset marker icons on cluster hover out
      clustererRef.current.addListener("mouseout", (cluster) => {
        setSelectedClusterData(null);
        cluster.getMarkers().forEach((marker) => {
          marker.setIcon({
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 6,
            fillColor: "#007bff",
            fillOpacity: 1,
            strokeWeight: 0,
          });
        });
      });
    }
  }, [crimeData]);

  // Format crime categories for better readability
  const formatCrimeCategory = (category) => {
    switch (category) {
      case "other-theft":
        return "Other Theft";
      case "burglary":
        return "Burglary";
      case "violent-crime":
        return "Violence and sexual offences";
      case "criminal-damage-arson":
      case "drugs":
      case "theft-from-the-person":
      case "bicycle-theft":
      case "vehicle-crime":
        return "All Other Crime";
      case "anti-social-behaviour":
        return "Anti social behaviour";
      case "public-order":
        return "Public Order";
      case "shoplifting":
        return "Shoplifting";
      case "robbery":
        return "Robbery";
      default:
        return category;
    }
  };

  // Fetch crime data from the API
  const fetchCrimeData = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}`
      );
      const formattedData = response.data.map((crime) => ({
        ...crime,
        category: formatCrimeCategory(crime.category),
      }));
      setCrimeData(formattedData);
    } catch (error) {
      console.error("Failed to fetch crime data", error);
    }
  };

  // Handle the postcode search form submission
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      const location = response.data.results[0].geometry.location;
      setMapCenter({ lat: location.lat, lng: location.lng });
      fetchCrimeData(location.lat, location.lng);
    } catch (error) {
      console.error("Failed to fetch geocode data", error);
    }
  };

  // Handle zoom level changes
  const handleZoomChanged = () => {
    if (mapRef.current) {
      setZoom(mapRef.current.getZoom());
    }
  };

  // Handle map load event
  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  // Handle marker click event
  const handleMarkerClick = (crime) => {
    setSelectedCrime(crime);
    setSelectedClusterData(null); // Clear cluster data when an individual crime is selected
  };

  // Handle cluster hover event
  const handleClusterHover = (cluster) => {
    const markers = cluster.getMarkers();
    console.log("Markers in cluster:", markers); // Debugging: log markers

    const crimesInCluster = markers
      .map((marker) =>
        crimeData.find(
          (crime) =>
            parseFloat(crime.location.latitude) ===
              marker.getPosition().lat() &&
            parseFloat(crime.location.longitude) === marker.getPosition().lng()
        )
      )
      .filter((crime) => crime !== undefined); // Filter out undefined values

    console.log("Crimes in cluster:", crimesInCluster); // Debugging: log crimes in cluster

    if (crimesInCluster.length === 0) {
      setSelectedClusterData({
        total: 0,
        details: [],
      });
      return;
    }

    const aggregatedData = crimesInCluster.reduce((acc, crime) => {
      if (crime && crime.category) {
        if (!acc[crime.category]) {
          acc[crime.category] = 0;
        }
        acc[crime.category]++;
      }
      return acc;
    }, {});

    const crimeDetails = Object.entries(aggregatedData).map(
      ([type, count]) => ({
        type,
        count,
      })
    );

    setSelectedClusterData({
      total: crimesInCluster.length,
      details: crimeDetails,
    });

    setSelectedCrime(null); // Clear individual crime data when a cluster is selected
  };

  // Display loading or error message if applicable
  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div>
      <div className="header-text">
        <h1>Crime Map</h1>
        <p>Search for crime data in your area</p>
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          placeholder="Enter postcode"
        />
        <button type="submit">Search</button>
      </form>
      <div className="map-container">
        <div className="map">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={mapCenter}
            zoom={zoom}
            onZoomChanged={handleZoomChanged}
            onLoad={handleMapLoad}
          >
            {zoom < 15 && (
              <HeatmapLayer
                data={crimeData.map((crime) => ({
                  location: new window.google.maps.LatLng(
                    crime.location.latitude,
                    crime.location.longitude
                  ),
                  weight: 1,
                }))}
              />
            )}
          </GoogleMap>
        </div>
        <div className="sidebar">
          {selectedCrime && (
            <div className="individual-crime-details">
              <h2>Crime Details</h2>
              <p>Type: {selectedCrime.category}</p>
              <p>Date: {selectedCrime.month}</p>
              <p>
                State:{" "}
                {selectedCrime.outcome_status
                  ? selectedCrime.outcome_status.category
                  : "Unknown"}
              </p>
              <p>Location: {selectedCrime.location.street.name}</p>
            </div>
          )}
          {selectedClusterData && (
            <div className="crime-list">
              <h2>{selectedClusterData.total} crimes were reported here</h2>
              <table>
                <thead>
                  <tr>
                    <th>Crime type</th>
                    <th>Instances</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedClusterData.details.map((crime) => (
                    <tr key={crime.type}>
                      <td>{crime.type}</td>
                      <td>{crime.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
