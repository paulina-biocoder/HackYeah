import { useMyCords } from "./hooks/useMyCords";
import { PlaceClient, usePlaces } from "./api/usePlaces";
import { MyMarker } from "./components/markers/MyMarker";
import { PlacesMarker } from "./components/markers/PlacesMarker";
import GoogleMapReact from "google-maps-react-markers";
import { useRef, useState } from "react";
import { PlaceTile } from "./components/places/PlaceTile";

const apikey = "your_api_key";

export type LatLng = {
  lat: number;
  lng: number;
};

const defaultZoom = 12;

export function Map() {
  const { coords, defaultCoords } = useMyCords();

  const { places } = usePlaces();
  console.log("--- laces", places);
  const mapRef = useRef(null);
  const [_mapReady, setMapReady] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<PlaceClient>();

  /**
   * @description This function is called when the map is ready
   * @param {Object} map - reference to the map instance
   * @param {Object} maps - reference to the maps library
   */
  const onGoogleApiLoaded = ({ map}: any) => {
    mapRef.current = map;
    setMapReady(true);
  };

  // const onMarkerClick = (e, { markerId, lat, lng }) => {
  //   console.log("This is ->", markerId);

  //   // inside the map instance you can call any google maps method
  //   mapRef?.current?.setCenter({ lat, lng });
  //   // rif. https://developers.google.com/maps/documentation/javascript/reference?hl=it
  // };

  return (
    // Important! Always set the container height explicitly
    <>
      <div
        style={{
          height: "calc(100vh - 57.6px)",
          width: "100%",
          marginBottom: "57.6px",
        }}
      >
        <GoogleMapReact
          apiKey={apikey}
          defaultCenter={defaultCoords}
          defaultZoom={defaultZoom}
          options={{ center: coords }}
          onGoogleApiLoaded={onGoogleApiLoaded}
          onChange={(map) => console.log("Map moved", map)}
          // center={coords}
        >
          {places?.map((place) => (
            <PlacesMarker
              onClick={() => setSelectedPlace(place)}
              key={place.id}
              lat={place.lat}
              lng={place.lng}
            />
          ))}
          <MyMarker lat={coords.lat} lng={coords.lng} />
        </GoogleMapReact>
      </div>
      {selectedPlace && <PlaceTile place={selectedPlace} />}
    </>
  );
}
