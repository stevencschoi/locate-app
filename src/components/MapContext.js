import React, { useState } from "react";
// import Cookies from "js-cookie";

const MapContext = React.createContext([{}, () => {}]);

const MapContextProvider = props => {
  const [state, setState] = useState({
    address: "40 Bay Street",
    city: "Toronto",
    province: "Ontario",
    postal: "M5J 2X2",
  });

  return (
    <MapContext.Provider value={[state, setState]}>
      {props.children}
    </MapContext.Provider>
  );
};

export { MapContext, MapContextProvider };
