function Loader() {
  return (
    <div style={wrapperStyle}>
      <svg width="50" height="50" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#98a1b4"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

const wrapperStyle = {
  position: "fixed",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default Loader;