import React from "react";

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

export default function Search() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestion,
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
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            console.log("Lat lng", lat, lng);
            console.log("Results", results[0]);
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
          {status === "OK" &&
            data.map(({ id, description }) => {
              <ComboboxOption key={id} value={description} />;
            })}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
