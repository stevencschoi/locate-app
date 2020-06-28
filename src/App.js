import React from "react";
import "./App.scss";
import FormMap from "./components/FormMap";
import GoogleMapComponent from "./components/GoogleMapComponent";
import Form from "./components/Form";

import { MapContextProvider } from "./components/MapContext";

function App() {
  return (
    <MapContextProvider>
      {/*<FormMap />*/}
      <GoogleMapComponent />
      <Form />
    </MapContextProvider>
  );
}

export default App;
