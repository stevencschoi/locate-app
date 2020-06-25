import React from "react";
import { useFormData } from "../helpers/useFormData";

import "../styles/Form.scss";

export default function Form() {
  const { state, handleFormSubmit, handleInputChange } = useFormData();

  // console.log(state);

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="address"
        placeholder="Street Address"
        value={state.address}
        required
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={state.city}
        required
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="province"
        placeholder="Province"
        value={state.province}
        required
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="postal"
        placeholder="Postal Code"
        value={state.postal}
        onChange={handleInputChange}
      />
      <button>Find!</button>
    </form>
  );
}
