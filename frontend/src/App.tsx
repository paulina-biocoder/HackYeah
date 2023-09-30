// import GoogleMapReact from 'google-map-react'
import "./App.css";
import { Map } from "./features/map/Map3";
// import { Drawer } from "./features/map/components/drawer/Drawer";
// import { MapContainer, TileLayer, useMap } from "react-leaflet";

// const apikey = 'AIzaSyCKImaG10Oo2c-ETqEVlrQY55j3r25pWctI'

function App() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <>
      {/* <div style={{ border: "1px solid red", height: "300px" }}> */}
      {/* asdf drawer */}
      <Map />
      {/* <Drawer /> */}
      {/* </div> */}
    </>
  );
}

export default App;
