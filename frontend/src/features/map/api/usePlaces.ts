import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";
import mockedPlaces from "./mockedPlaces.json";

export type PlaceServer = {
  name: string;
  latitude: number;
  longitude: number;
  added_by: number;
  is_visible: boolean;
  price: string;
  category: number;
  id: number;
  project_value: string;
  eu_funding: string;
  images: {
    id: number;
    image: string;
    description: string | null;
  }[];
  reviews: {
    id: number;
    user: number;
    place: number;
    comment: string;
    rating: number;
    created_at: string;
  }[];
};

export type PlaceClient = {
  lat: number;
  lng: number;
  id: number;
  name: string;
  images: PlaceServer["images"];
  reviews: {
    rating: number;
  }[];
  project_value: string;
  eu_funding: string;
};

function trasformIntoPlaces(data: PlaceServer[] | null): PlaceClient[] | null {
  if (!data) {
    return null;
  }
  const transformed: PlaceClient[] = data.map((x) => ({
    lat: Number(x.latitude),
    lng: Number(x.longitude),
    id: x.id,
    name: x.name,
    images: x.images,
    reviews: x.reviews.map((review) => ({
      rating: review.rating,
    })),
    project_value: x.project_value,
    eu_funding: x.eu_funding,
  }));
  return transformed;
}

const api = "http://127.0.0.1:8000";
export function usePlaces() {
  const { data, error, isLoading } = useSWR<PlaceServer[]>(
    `${api}/places`,
    fetcher
  );
  console.log("--- data", data);
  const response: PlaceServer[] =
    data || (mockedPlaces as unknown as PlaceServer[]);
  const places: PlaceClient[] | null = trasformIntoPlaces(response || null);

  return {
    places,
    error,
    isLoading,
  };
}
