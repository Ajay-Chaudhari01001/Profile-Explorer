import React, { useState } from "react";
import { profiles } from "./data/profiles";
import MapView from "./components/MapView";
import "./App.css";

const App = () => {
  // State to store the selected profile with name and location
  const [selectedProfile, setSelectedProfile] = useState({
    name: "",
    location: null,
    address: "",
  });

  // Function to update the selected profile and its location
  const handleSummaryClick = (name, lat, lng, address) => {
    setSelectedProfile({ name, location: [lat, lng], address });
  };

  return (
    <div className="app">
      <header>
        <h1>Profile Viewer with Interactive Map</h1>
      </header>

      {/* List of profiles */}
      <div className="profile-list">
        {profiles.map((profile) => (
          <div className="profile-card" key={profile.id}>
            <img src={profile.photo} alt={profile.name} />{" "}
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <button
              onClick={() =>
                handleSummaryClick(
                  profile.name,
                  profile.lat,
                  profile.lng,
                  profile.address
                )
              }
            >
              View Map
            </button>
          </div>
        ))}
      </div>

      {/* Conditionally render map header when a profile is selected  */}
      <div className="map-container">
        {selectedProfile.name && (
          <h2 style={{ marginBottom: "10px" }}>
            {selectedProfile.name} from {selectedProfile.address}
          </h2>
        )}

        <MapView selectedProfile={selectedProfile} />
      </div>
    </div>
  );
};

export default App;
