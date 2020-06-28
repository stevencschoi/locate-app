import React from "react";

import Search from "./Search";
import { useMapData } from "../helpers/useMapData";

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
  const { onMapLoad, panTo } = useMapData();

  // load scripts
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  //if error loading maps
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <>
      <h1>Two Points Map</h1>
      <Search panTo={panTo} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={8}
        center={center}
        onLoad={onMapLoad}
      ></GoogleMap>
    </>
  );
}
