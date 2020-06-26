import React, { useState, useCallback, useRef } from "react";

// import Search from "./Search";

import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

import { formatRelative } from "date-fns";

// use places autocmoplete library for map search
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

// styling from @reach/combobox
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import mapStyles from "./mapStyles";

import { useFormData } from "../helpers/useFormData";

const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
// additional libraries needed for search capacity
const libraries = ["places"];
const mapContainerStyle = {
  width: "50vw",
  height: "50vh",
};
const center = {
  lat: 43.653225,
  lng: -79.383186,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
};

export default function FormMap() {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback(e => {
    setMarkers(current => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  });

  const mapRef = useRef();
  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
    options,
  });

  //if error loading maps
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <>
      <h1>Locator Map</h1>
      <Search panTo={panTo} />
      <Locate panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map(marker => (
          <Marker
            key={marker.index}
            position={{ lat: marker.lat, lng: marker.lng }}
            /* icon={{
              url: "iconUrl",
              scaledSize: new window.google.maps.Size(30,30),
              origin: new windonw.google.maps.Point(0,0),
              anchor: new window.google.maps.Point(15,15),
            }} */
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <>
              <h2>Clicked Location</h2>
            </>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </>
  );
}

function Locate({ panTo }) {
  return <button>Locate Me</button>;
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    // prefer locations near this location in search
    requestOptions: {
      location: { lat: () => 43.653225, lng: () => -79.383186 },
      radius: 200 * 1000, // must be in metres; radius is 200km
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={async address => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            console.log("Lat lng", lat, lng);
            console.log("Results", results[0]);
            panTo({ lat, lng });
          } catch (err) {
            console.error("Error!", err);
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter an address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
