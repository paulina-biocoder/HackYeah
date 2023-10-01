import { css } from "@emotion/css";
import { PlaceClient } from "../../api/usePlaces";
import { useNavigate } from "react-router-dom";

export const PlaceTile = ({ place }: { place: PlaceClient }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/place/${place.id}`);
  }
  return (
    <div
      onClick={handleClick}
      className={css`
        width: 100%;
        height: 106px;
        background: white;
        position: fixed;
        bottom: 61px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
      `}
    >
      <div
        className={css`
          display: flex;
          padding: 1rem 1rem 1rem 0rem;
          align-items: center;
          gap: 0.75rem;
          align-self: stretch;
        `}
      >
        <img
          className={css`
            width: 3.36894rem;
            height: 5.05656rem;
            flex-shrink: 0;
          `}
          src={place.images[0].image}
        />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.1875rem;
            flex: 1 0 0;
          `}
        >
          <div
            className={css`
              color: #000;
              text-align: center;
              /* text-md/Semibold */
              font-size: 1rem;
              font-style: normal;
              font-weight: 600;
              line-height: 1.5rem; /* 150% */
            `}
          >
            {" "}
            {place.name}
          </div>
          <div
            className={css`
              color: #868782;
              text-align: center;
              /* text-sm/Regular */
              font-size: 0.875rem;
              font-style: normal;
              font-weight: 400;
              line-height: 1.25rem; /* 142.857% */
            `}
          >
            Kultura
          </div>
        </div>
      </div>
    </div>
  );
};
