import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";

const apikey = "AIzaSyCKImaG10Oo2c-ETqEVlrQY553r25pWctI";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

const defaultProps = {
  center: {
    lat: 50.068304199011536,
    lng: 19.992152951830413,
  },
  zoom: 5,
};

export type LatLng = {
  lat: number;
  lng: number;
};
export function Map() {
  const [coords, setCords] = useState<LatLng>(defaultProps.center);

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        // x.innerHTML = "Geolocation is not supported by this browser.";
        console.log("lipa");
      }
    }

    function showPosition(position) {
      console.log("--- coords", position);
      setCords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }

    getLocation();
    console.log('coords', coords)
  }, []);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apikey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={coords}
      >
        <AnyReactComponent
          lat={coords.lat}
          lng={coords.lng}
          // lat={coords.lat}
          // lng={coords.lng}
          text={"to tu"}
        />
        <AnyReactComponent

          lat={coords.lat+1}
          lng={coords.lng+1}
          // lat={coords.lat}
          // lng={coords.lng}
          text={"to tu 11"}
        />
        {/* <div lat={59.955413} lng={30.337844}>
          sdf{" "}
        </div> */}
      </GoogleMapReact>
    </div>
  );
}
