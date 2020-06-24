import React from "react";
import "./App.scss";
import Form from "./components/Form";
// import FormMap from "./components/Map;"

import { MapContextProvider } from "./components/MapContext";

function App() {
  return (
    <MapContextProvider>
      <Form />
    </MapContextProvider>
  );
}

export default App;

// <FormMap />
