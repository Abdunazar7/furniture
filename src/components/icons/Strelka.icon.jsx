import * as React from "react";
const Strelka = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 18}
    height={props.height ?? 18}
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path stroke="#000" strokeWidth={2} d="M.707 1h16m0 0v16m0-16-16 16" />
  </svg>
);
export default Strelka;
