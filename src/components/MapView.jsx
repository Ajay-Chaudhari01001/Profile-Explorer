import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Component to handle programmatic zoom
const UpdateMapView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      // Center and zoom to the selected location
      map.setView(center, 5, { animate: true });
    }
  }, [center, map]);
  return null;
};

const MapView = ({ selectedProfile}) => {
  return (
    <MapContainer
      // Default center India
      center={selectedProfile.location || [20.5937, 78.9629]}
      zoom={3}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedProfile.location && (
        <>
          <UpdateMapView center={selectedProfile.location} />
          <Marker position={selectedProfile.location}>
            <Popup>Location of Selected {selectedProfile.name}</Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
};

export default MapView;

// Note: Since Google Maps API and Mapbox require a purchase for usage,
//  I am using the Leaflet map library instead.
