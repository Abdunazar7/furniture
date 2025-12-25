import * as React from "react";
const Right = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 39}
    height={props.height ?? 26}
    fill="none"
    viewBox="0 0 39 26"
    {...props}
  >
    <path stroke="#000" d="M28 13H11m17 0-5.037-5M28 13l-5.037 5" />
    <rect
      width={38}
      height={25}
      x={-0.5}
      y={0.5}
      stroke="#000"
      rx={12.5}
      transform="matrix(-1 0 0 1 38 0)"
    />
  </svg>
);
export default Right;
