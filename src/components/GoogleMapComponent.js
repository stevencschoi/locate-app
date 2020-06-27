import React from "react";

import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript,
  useLoadScript,
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;

const libraries = ["places"];
const containerStyle = {
  width: "50vw",
  height: "50vh",
};

const center = {
  lat: 43.653225,
  lng: -79.383186,
};

export default function GoogleMapComponent() {
  return (
    <>
      <h1>Two Points Map</h1>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={8}
          center={center}
        ></GoogleMap>
      </LoadScript>
    </>
  );
}
