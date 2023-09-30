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
        borderRadius: "10px",
        width: "10px",
        height: "10px",
      }}
    />
  );
}
