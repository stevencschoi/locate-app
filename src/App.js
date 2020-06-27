import React from "react";
import "./App.scss";
// import Form from "./components/Form";
import FormMap from "./components/FormMap";
import GoogleMapComponent from "./components/GoogleMapComponent";

import { MapContextProvider } from "./components/MapContext";

function App() {
  return (
    <MapContextProvider>
      <FormMap />
      {/*<GoogleMapComponent />*/}
    </MapContextProvider>
  );
}

export default App;
