import { useMyCords } from "./hooks/useMyCords";
import { usePlaces } from "./api/usePlaces";
import { MyMarker } from "./components/markers/MyMarker";
import { PlacesMarker } from "./components/markers/PlacesMarker";
import GoogleMapReact from "google-maps-react-markers";
import { useRef, useState } from "react";

const apikey = "AIzaSyCKImaG10Oo2c-ETqEVlrQY553r25pWctI";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export type LatLng = {
  lat: number;
  lng: number;
};

const defaultZoom = 8;

export function Map() {
  const { coords, defaultCoords } = useMyCords();
  const { places } = usePlaces();
  console.log("--- laces", places);
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  /**
   * @description This function is called when the map is ready
   * @param {Object} map - reference to the map instance
   * @param {Object} maps - reference to the maps library
   */
  const onGoogleApiLoaded = ({ map, maps }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  const onMarkerClick = (e, { markerId, lat, lng }) => {
    console.log("This is ->", markerId);

    // inside the map instance you can call any google maps method
    mapRef?.current?.setCenter({ lat, lng });
    // rif. https://developers.google.com/maps/documentation/javascript/reference?hl=it
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        apiKey={apikey}
        defaultCenter={defaultCoords}
        defaultZoom={defaultZoom}
        options={{ center: coords }}
        mapMinHeight="100vh"
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={(map) => console.log("Map moved", map)}
        // center={coords}
      >
        <MyMarker lat={coords.lat} lng={coords.lng} />
        {places?.map((place) => (
          <PlacesMarker key={place.id} lat={place.lat} lng={place.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
}
