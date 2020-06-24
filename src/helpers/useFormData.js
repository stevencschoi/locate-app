import { useContext } from "react";
import { MapContext } from "../components/MapContext";

import axios from "axios";

const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;

export function useFormData() {
  const [state, setState] = useContext(MapContext);

  const clearInputs = () => {
    setState(prev => ({ ...prev, inputs: {} }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log("inputs", state.inputs);
    clearInputs();
  };

  const handleInputChange = e => {
    const inputValues = { ...state.inputs, [e.target.name]: e.target.value };
    setState(prev => ({
      ...prev,
      inputs: inputValues,
    }));
  };

  return {
    state,
    handleFormSubmit,
    handleInputChange,
  };
}
