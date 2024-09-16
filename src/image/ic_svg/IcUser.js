import * as React from "react";
function SvgComponent({ width = 24, height = 24, size, ...props }) {
  return (
    <svg
      className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
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
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
}
export default SvgComponent;
