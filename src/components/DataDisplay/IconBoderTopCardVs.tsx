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

export const IconBoderTopCardVsRow: React.FC<IconProps> = ({
  color = "#fff",
  style,
}) => {
  const lightColor = lightenColor(color);
  return (
    <svg
      viewBox="0 0 350 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M6.44171 14.5801H343.558C343.558 9.21186 339.206 4.86006 333.838 4.86006H16.1617C10.7935 4.86006 6.44171 9.21186 6.44171 14.5801Z"
        fill={lightColor}
      />
      <rect
        width="11.8098"
        height="9.72001"
        transform="matrix(1 0 0 -1 5.3681 24.3008)"
        fill={lightColor}
      />
      <rect
        width="11.8098"
        height="9.72001"
        transform="matrix(1 0 0 -1 10.7362 17.4961)"
        fill={lightColor}
      />
      <rect
        width="11.8098"
        height="9.72001"
        transform="matrix(1 0 0 -1 19.3252 14.5801)"
        fill={lightColor}
      />
      <rect
        x="344.632"
        y="24.3008"
        width="11.8098"
        height="9.72001"
        transform="rotate(-180 344.632 24.3008)"
        fill={lightColor}
      />
      <rect
        x="339.264"
        y="17.4961"
        width="11.8098"
        height="9.72001"
        transform="rotate(-180 339.264 17.4961)"
        fill={lightColor}
      />
      <rect
        x="330.675"
        y="14.5801"
        width="11.8098"
        height="9.72001"
        transform="rotate(-180 330.675 14.5801)"
        fill={lightColor}
      />
      <rect
        x="350"
        y="18.4688"
        width="9.66257"
        height="9.72001"
        transform="rotate(-180 350 18.4688)"
        fill="#212121"
      />
      <rect
        x="346.779"
        y="11.6641"
        width="11.8098"
        height="9.72001"
        transform="rotate(-180 346.779 11.6641)"
        fill="#212121"
      />
      <rect
        x="338.19"
        y="8.74805"
        width="11.8098"
        height="8.74801"
        transform="rotate(-180 338.19 8.74805)"
        fill="#212121"
      />
      <rect
        width="9.66258"
        height="9.72001"
        transform="matrix(1 0 0 -1 0 18.4688)"
        fill="#212121"
      />
      <rect
        width="11.8098"
        height="9.72001"
        transform="matrix(1 0 0 -1 3.22089 11.6641)"
        fill="#212121"
      />
      <rect
        width="11.8098"
        height="8.74801"
        transform="matrix(1 0 0 -1 11.8098 8.74805)"
        fill="#212121"
      />
    </svg>
  );
};
