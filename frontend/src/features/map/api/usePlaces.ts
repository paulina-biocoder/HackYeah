import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";

export type PlaceServer = {
  name: string;
  latitude: number;
  longitude: number;
  added_by: number;
  is_visible: boolean;
  price: string;
  category: number;
  id: number;
};

export type PlaceClient = {
  lat: number;
  lng: number;
  id: number;
};

function trasformIntoPlaces(data: PlaceServer[] | null): PlaceClient[] | null {
  if (!data) {
    return null;
  }
  const transformed = data.map((x) => ({
    lat: Number(x.latitude),
    lng: Number(x.longitude),
    id: x.id,
  }));
  return transformed;
}

const api = "http://127.0.0.1:8000";
export function usePlaces() {
  const { data, error, isLoading } = useSWR<PlaceServer[]>(
    `${api}/places`,
    fetcher
  );
  const places: PlaceClient[] | null = trasformIntoPlaces(data || null);
  return {
    places,
    error,
    isLoading,
  };
}
