/* REACT COMPONENTS */
import React from "react";

import { lightenColor } from "@/utils/colors";

/* LIBRARIES */

/* STYLES */

interface IconProps {
  color?: string;
  style?: any;
}

export const IconBoderTopCardVs: React.FC<IconProps> = ({
  color = "#fff",
  style,
}) => {
  const lightColor = lightenColor(color);
  return (
    <svg
      viewBox="0 0 326 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M6 15.9525H320C320 10.4297 315.523 5.95251 310 5.95251H16C10.4771 5.95251 6 10.4297 6 15.9525Z"
        fill={lightColor}
      />
      <rect
        width="11"
        height="10"
        transform="matrix(1 0 0 -1 5 25.9525)"
        fill={lightColor}
      />
      <rect
        width="11"
        height="10"
        transform="matrix(1 0 0 -1 10 18.9525)"
        fill={lightColor}
      />
      <rect
        width="11"
        height="10"
        transform="matrix(1 0 0 -1 18 15.9525)"
        fill={lightColor}
      />
      <rect
        x="321"
        y="25.9525"
        width="11"
        height="10"
        transform="rotate(-180 321 25.9525)"
        fill={lightColor}
      />
      <rect
        x="316"
        y="18.9525"
        width="11"
        height="10"
        transform="rotate(-180 316 18.9525)"
        fill={lightColor}
      />
      <rect
        x="308"
        y="15.9525"
        width="11"
        height="10"
        transform="rotate(-180 308 15.9525)"
        fill={lightColor}
      />
      <rect
        x="326"
        y="19.9525"
        width="9"
        height="10"
        transform="rotate(-180 326 19.9525)"
        fill="#2B2B2B"
      />
      <rect
        x="323"
        y="12.9525"
        width="11"
        height="10"
        transform="rotate(-180 323 12.9525)"
        fill="#2B2B2B"
      />
      <rect
        x="315"
        y="9.95251"
        width="11"
        height="9"
        transform="rotate(-180 315 9.95251)"
        fill="#2B2B2B"
      />
      <rect
        width="9"
        height="10"
        transform="matrix(1 0 0 -1 0 19.9525)"
        fill="#2B2B2B"
      />
      <rect
        width="11"
        height="10"
        transform="matrix(1 0 0 -1 3 12.9525)"
        fill="#2B2B2B"
      />
      <rect
        width="11"
        height="9"
        transform="matrix(1 0 0 -1 11 9.95251)"
        fill="#2B2B2B"
      />
      <rect
        width="11"
        height="10"
        transform="matrix(-1 0 0 1 38 20.9525)"
        fill="#F8F8F8"
      />
      <rect
        width="11"
        height="10"
        transform="matrix(-1 0 0 1 33 27.9525)"
        fill="#F8F8F8"
      />
      <rect
        width="11"
        height="10"
        transform="matrix(-1 0 0 1 25 30.9525)"
        fill="#F8F8F8"
      />
    </svg>
  );
};
