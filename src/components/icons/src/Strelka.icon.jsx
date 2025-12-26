import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 15}
    height={props.height ?? 11}
    fill="none"
    viewBox="0 0 15 11"
    {...props}
  >
    <path stroke="#454545" d="M0 5.354h14m0 0-5 5m5-5-5-5" />
  </svg>
);
export default SvgComponent;
