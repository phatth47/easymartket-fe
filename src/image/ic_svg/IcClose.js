import * as React from "react";
function SvgComponent({ width = 24, height = 24, size, ...props }) {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width}
      height={size || height}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
}
export default SvgComponent;
