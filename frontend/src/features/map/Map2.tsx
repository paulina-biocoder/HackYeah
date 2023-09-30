import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useMyCords } from './hooks/useMyCords';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };
const apikey = "AIzaSyCKImaG10Oo2c-ETqEVlrQY553r25pWctI";

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:apikey
  })
  const {coords, setCoords} = useMyCords()
  const center = coords

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        // zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <AnyReactComponent
          lat={coords.lat}
          key={2}
          lng={coords.lng}
          text={"to tu"}
        />
        <AnyReactComponent
  key={1}
          lat={coords.lat+1}
          lng={coords.lng+1}
          text={"to tu 11"}
        />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)