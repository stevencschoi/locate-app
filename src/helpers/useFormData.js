import { useContext } from "react";
import { MapContext } from "../components/MapContext";

import axios from "axios";

export function useFormData() {
  const [state, setState] = useContext(MapContext);

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log("Clicked!");
  };

  return {
    state,
    handleFormSubmit,
  };
}
