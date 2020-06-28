import { useContext, useCallback, useRef } from "react";
import { MapContext } from "../components/MapContext";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

export function useMapData() {
  const [state, setState] = useContext(MapContext);

  // set reference for map to prevent re-rendering
  const mapRef = useRef();
  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  // pan to location
  const panTo = useCallback(({ lat, lng }, address) => {
    mapRef.current.panTo({ lat, lng, address });
    mapRef.current.setZoom(14);
  }, []);

  return { state, mapRef, onMapLoad, panTo };
}
