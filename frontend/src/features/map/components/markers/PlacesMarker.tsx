export type LatLng = {
  lat: number;
  lng: number;
};
export function PlacesMarker({ lat, lng }: LatLng) {
  console.log({ lat, lng });
  return (
    // <div
    //   style={{
    //     background: "green",
    //     border: '1px solid blue',
    //     borderRadius: "10px",
    //     width: "20px",
    //     height: "20px",
    //   }}
    // />
    <svg
      width="27"
      height="43"
      viewBox="0 0 27 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_2703_22310)">
        <ellipse
          cx="13.5"
          cy="39.5"
          rx="4.5"
          ry="2.5"
          fill="black"
          fill-opacity="0.12"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.3135 33.3552C12.3586 33.3813 12.394 33.4015 12.4191 33.4156L12.4608 33.4389C12.7934 33.6215 13.2059 33.6201 13.5389 33.4395L13.5816 33.4156C13.6067 33.4015 13.6421 33.3813 13.6872 33.3552C13.7774 33.303 13.9062 33.2268 14.0681 33.1271C14.3919 32.9277 14.849 32.6337 15.395 32.248C16.4851 31.4779 17.9397 30.3353 19.3974 28.8428C22.2987 25.8723 25.3123 21.4091 25.3123 15.6693C25.3123 8.86964 19.8 3.35742 13.0004 3.35742C6.2007 3.35742 0.688477 8.86964 0.688477 15.6693C0.688477 21.4091 3.70201 25.8723 6.60334 28.8428C8.06106 30.3353 9.5156 31.4779 10.6057 32.248C11.1517 32.6337 11.6088 32.9277 11.9326 33.1271C12.0945 33.2268 12.2234 33.303 12.3135 33.3552ZM13.0004 20.1464C15.473 20.1464 17.4774 18.1419 17.4774 15.6693C17.4774 13.1967 15.473 11.1923 13.0004 11.1923C10.5278 11.1923 8.52332 13.1967 8.52332 15.6693C8.52332 18.1419 10.5278 20.1464 13.0004 20.1464Z"
        fill="#22C55E"
      />
      <defs>
        <filter
          id="filter0_f_2703_22310"
          x="7"
          y="35"
          width="13"
          height="9"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_2703_22310"
          />
        </filter>
      </defs>
    </svg>
  );
}
