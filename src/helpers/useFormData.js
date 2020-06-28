import { useContext } from "react";
import { MapContext } from "../components/MapContext";

export function useFormData() {
  const [state, setState] = useContext(MapContext);

  const clearInputs = () => {
    setState(prev => ({
      ...prev,
      inputs: {
        address: "",
        city: "",
        province: "",
        postal: "",
      },
    }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log("submit inputs", state.inputs);
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
