import { useContext } from "react";
import { MapContext } from "../components/MapContext";

export function useMapData() {
  const [state, setState] = useContext(MapContext);
  return {};
}
