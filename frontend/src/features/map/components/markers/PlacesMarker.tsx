export type LatLng = {
  lat: number;
  lng: number;
};
export function PlacesMarker({ lat, lng }: LatLng) {
  console.log({ lat, lng });
  return (
    <div
      style={{
        background: "green",
        border: '1px solid blue',
        borderRadius: "10px",
        width: "20px",
        height: "20px",
      }}
    />
  );
}
