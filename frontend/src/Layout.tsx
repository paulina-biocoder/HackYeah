import { css } from "@emotion/css";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <div
        className={css`
          background: linear-gradient(241deg, #234e94 0%, #2c62b9 100%);
          color: white;
          height: 200px;
        `}
      >
        {children}
      </div>
      <div>Your content</div>
    </div>
  );
};
