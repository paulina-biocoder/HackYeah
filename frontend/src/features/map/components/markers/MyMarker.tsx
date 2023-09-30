export type LatLng = {
  lat: number;
  lng: number;
};
export function MyMarker({ lat, lng }: LatLng) {
  console.log({ lat, lng });
  return (
    <div
      style={{
        background: "darkblue",
        border: '1px solid red',
        borderRadius: "50px",
        width: "20px",
        height: "30px",
      }}
    />
  );
}
