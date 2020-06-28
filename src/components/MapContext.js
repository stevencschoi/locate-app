import React, { useState } from "react";
// import Cookies from "js-cookie";

const MapContext = React.createContext([{}, () => {}]);

const MapContextProvider = props => {
  const [state, setState] = useState({
    inputs: {
      address: "40 Bay Street",
      city: "Toronto",
      province: "Ontario",
      postal: "",
    },
    origin: {
      address: "",
      city: "",
      province: "",
      postal: "",
    },
    markers: {},
  });

  return (
    <MapContext.Provider value={[state, setState]}>
      {props.children}
    </MapContext.Provider>
  );
};

export { MapContext, MapContextProvider };
