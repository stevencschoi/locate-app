import React from "react";
import { useFormData } from "../helpers/useFormData";

import "../styles/Form.scss";

export default function Form() {
  const { state, handleFormSubmit } = useFormData();

  // console.log(state);

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="address" placeholder="Street Address" required />
      <input type="text" name="city" placeholder="City" required />
      <input type="text" name="province" placeholder="Province" required />
      <button>Find!</button>
    </form>
  );
}
