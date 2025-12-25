import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 18}
    height={props.height ?? 18}
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.444 13.444a1.778 1.778 0 1 0 0 3.556 1.778 1.778 0 0 0 0-3.556Zm0 0H7.222a2.666 2.666 0 0 1-2.666-1.777L2.778 1H1m12.444 12.444a2.666 2.666 0 0 0 2.667-1.777L17 5.444H3.489m4.622 9.778a1.778 1.778 0 1 1-3.555 0 1.778 1.778 0 0 1 3.555 0Z"
    />
  </svg>
);
export default SvgComponent;
