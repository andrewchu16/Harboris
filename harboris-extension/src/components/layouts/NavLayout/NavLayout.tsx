import { Outlet } from "react-router";
import Header from "../../header/Header";

export default function NavLayout() {
  return (
    <div
      style={{
        margin: 0,
        display: "flex",
        padding: "24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px",
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        boxSizing: "border-box",
        background: "rgba(242, 247, 251, 0.80)",
        color: "#000",
        fontFamily: "Helvetica, sans-serif",
        position: "relative",
      }}
    >
      <svg
        width="400"
        height="720"
        viewBox="0 0 400 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          filter: "blur(25px)",
        }}
      >
        <ellipse
          opacity="0.3"
          cx="181.411"
          cy="101.198"
          rx="181.411"
          ry="101.198"
          transform="matrix(-0.986256 0.165225 -0.148823 -0.988864 387.956 263.681)"
          fill="url(#paint0_angular_8_1991)"
        />
        <g filter="url(#filter0_b_8_1991)">
          <rect width="400" height="720" fill="#F2F7FB" fillOpacity="0.8" />
        </g>
        <defs>
          <filter
            id="filter0_b_8_1991"
            x="-50"
            y="-50"
            width="500"
            height="820"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_8_1991"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_8_1991"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_angular_8_1991"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(181.411 101.198) rotate(-23.604) scale(236.004 583.052)"
          >
            <stop stopColor="#DDDF00" />
            <stop offset="1" stopColor="#FF5C8A" />
          </radialGradient>
        </defs>
      </svg>

      <Header />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: "12px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
