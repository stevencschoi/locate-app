import React from "react";
import "./App.scss";
import Form from "./components/Form";
import FormMap from "./components/FormMap";

import { MapContextProvider } from "./components/MapContext";

function App() {
  return (
    <MapContextProvider>
      <FormMap />
      <Form />
    </MapContextProvider>
  );
}

export default App;
