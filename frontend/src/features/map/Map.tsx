import GoogleMapReact from "google-map-react";
import { useMyCords } from "./hooks/useMyCords";
import { usePlaces } from "./api/usePlaces";
import { MyMarker } from "./components/markers/MyMarker";
import { PlacesMarker } from "./components/markers/PlacesMarker";

const apikey = "AIzaSyCKImaG10Oo2c-ETqEVlrQY553r25pWctI";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export type LatLng = {
  lat: number;
  lng: number;
};

const defaultZoom = 2;

export function Map() {
  const { coords, defaultCoords } = useMyCords();
  const { places } = usePlaces();
  console.log("--- laces", places);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apikey }}
        defaultCenter={defaultCoords}
        defaultZoom={defaultZoom}
        center={coords}
      >
        <MyMarker lat={coords.lat} lng={coords.lng} />
        {places?.map((place) => (
          <PlacesMarker key={place.id} lat={place.lat} lng={place.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
}
