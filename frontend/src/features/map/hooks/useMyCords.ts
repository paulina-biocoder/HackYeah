import { useEffect, useState } from "react";
import { LatLng } from "../Map";

export function useMyCords() {
  const defaultProps = {
    center: {
      lat: 50.068304199011536,
      lng: 19.992152951830413,
    },
    zoom: 2,
  };
  const [coords, setCoords] = useState<LatLng>(defaultProps.center);

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        // x.innerHTML = "Geolocation is not supported by this browser.";
        console.log("lipa");
      }
    }

    function showPosition(position: any) {
      console.log("--- coords", position);
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }

    getLocation();
    console.log("coords", coords);
  }, []);


  return {
    // coords: coords1,
    coords,
    defaultCoords: defaultProps.center,
  };
}
