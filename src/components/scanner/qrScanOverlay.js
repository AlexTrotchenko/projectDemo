import * as React from "react";

const QrScannerOverlay = (props) => (
  <svg
    id="QRscan"
    aria-labelledby="title"
    role="presentation"
    viewBox="0 0 185.204 185.204"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title id="title" lang="en">
      {"QRscan"}
    </title>
    <defs>
      <linearGradient
        id="linearGradient878"
        x1={93.736}
        x2={93.736}
        y1={92.686}
        y2={75.581}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          style={{
            stopColor: "#e00000",
          }}
          offset={0}
        />
        <stop
          style={{
            stopColor: "#fff",
            stopOpacity: 0.02,
          }}
          offset={1}
        />
      </linearGradient>
    </defs>
    <rect
      id="blackBorder"
      x={14.307}
      y={14.307}
      width={156.59}
      height={156.59}
      style={{
        fill: "none",
        paintOrder: "stroke fill markers",
        strokeLinecap: "square",
        strokeOpacity: 0.75,
        strokeWidth: 28.614,
        stroke: "#000",
      }}
    />
    <path
      id="whiteBorder"
      d="m123.98 28.726h31.75v31.75m0 63.5v31.75h-31.75m-63.5 0h-31.75v-31.75m0-63.5v-31.75h31.75"
      style={{
        fill: "none",
        paintOrder: "stroke fill markers",
        strokeLinecap: "round",
        strokeWidth: 1.3229,
        stroke: "#fff",
      }}
    />
    <g id="line">
      <path
        id="blackLine"
        d="m19.844 92.604h145.52"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeWidth: 1.3229,
          stroke: "#000",
        }}
      />
      <path
        id="redLine"
        style={{
          fill: "url(#linearGradient878)",
        }}
      >
        <animate
          attributeName="d"
          values="                      m19.844 92.604 13.532-17.204h118.46l13.532 17.204h-145.52;                       m19.844 92.604 13.532-20.448h118.46l13.532 20.448h-145.52;                       m19.844 92.604 13.532-17.204h118.46l13.532 17.204h-145.52;                      m19.844 92.604 13.532-15.726h118.46l13.532 15.726h-145.52;                       m19.844 92.604 13.532-17.204h118.46l13.532 17.204h-145.52;"
          keyTimes="0; 0.30; 0.60; 0.80; 1"
          dur="6s"
          begin="0s"
          repeatCount="indefinite"
        />
      </path>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        values="0,0; 0,75; 0,0; 0,-50; 0,0"
        keyTimes="0; 0.30; 0.60; 0.80; 1"
        dur="6s"
        begin="0s"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);

export default QrScannerOverlay;
