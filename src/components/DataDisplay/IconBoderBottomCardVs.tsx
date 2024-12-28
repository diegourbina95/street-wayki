/* REACT COMPONENTS */
import React from "react";

import { darkenColor } from "@/utils/colors";

/* LIBRARIES */

/* STYLES */

interface IconProps {
  color?: string;
  style?: any;
}

export const IconBoderBottomCardVs: React.FC<IconProps> = ({
  color = "#fff",
  style,
}) => {
  const darkColor = darkenColor(color);
  return (
    <svg
      viewBox="0 0 326 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M6 10.0007H320C320 15.5233 315.523 20.0003 310 20.0003H15.9995C10.477 20.0003 6 15.5233 6 10.0007Z"
        fill={darkColor}
      />
      <rect x="5" y="0.0012207" width="11" height="9.99954" fill={darkColor} />
      <rect x="10" y="7.00085" width="11" height="9.99954" fill={darkColor} />
      <rect x="18" y="10.0007" width="11" height="9.99954" fill={darkColor} />
      <rect
        width="11"
        height="9.99954"
        transform="matrix(-1 0 0 1 321 0.0012207)"
        fill={darkColor}
      />
      <rect
        width="11"
        height="9.99954"
        transform="matrix(-1 0 0 1 316 7.00085)"
        fill={darkColor}
      />
      <rect
        width="11"
        height="9.99954"
        transform="matrix(-1 0 0 1 308 10.0007)"
        fill={darkColor}
      />
      <rect
        width="9"
        height="9.99954"
        transform="matrix(-1 0 0 1 326 6.00092)"
        fill="#212121"
      />
      <rect
        width="11"
        height="9.99954"
        transform="matrix(-1 0 0 1 323 13.0006)"
        fill="#212121"
      />
      <rect
        width="11"
        height="8.99958"
        transform="matrix(-1 0 0 1 315 16.0004)"
        fill="#212121"
      />
      <rect y="6.00092" width="9" height="9.99954" fill="#212121" />
      <rect x="3" y="13.0006" width="11" height="9.99954" fill="#212121" />
      <rect x="11" y="16.0004" width="11" height="8.99958" fill="#212121" />
    </svg>
  );
};

export const IconBoderBottomCardVsRow: React.FC<IconProps> = ({
  color = "#fff",
  style,
}) => {
  const darkColor = darkenColor(color);
  return (
    <svg
      viewBox="0 0 350 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M6.44171 8.58008H343.558C343.558 13.153 339.851 16.8601 335.278 16.8601H14.7217C10.1488 16.8601 6.44171 13.153 6.44171 8.58008Z"
        fill={darkColor}
      />
      <rect
        x="5.3681"
        y="0.300781"
        width="11.8098"
        height="8.28001"
        fill={darkColor}
      />
      <rect
        x="10.7362"
        y="6.0957"
        width="11.8098"
        height="8.27998"
        fill={darkColor}
      />
      <rect
        x="19.3252"
        y="8.58008"
        width="11.8098"
        height="8.28001"
        fill={darkColor}
      />
      <rect
        width="11.8098"
        height="8.28001"
        transform="matrix(-1 0 0 1 344.632 0.300781)"
        fill={darkColor}
      />
      <rect
        width="11.8098"
        height="8.27998"
        transform="matrix(-1 0 0 1 339.264 6.0957)"
        fill={darkColor}
      />
      <rect
        width="11.8098"
        height="8.28001"
        transform="matrix(-1 0 0 1 330.675 8.58008)"
        fill={darkColor}
      />
      <rect
        width="9.66257"
        height="8.28001"
        transform="matrix(-1 0 0 1 350 5.26953)"
        fill="#212121"
      />
      <rect
        width="11.8098"
        height="8.28001"
        transform="matrix(-1 0 0 1 346.779 11.0664)"
        fill="#212121"
      />
      <rect
        width="11.8098"
        height="7.452"
        transform="matrix(-1 0 0 1 338.19 13.5488)"
        fill="#212121"
      />
      <rect y="5.26953" width="9.66258" height="8.28001" fill="#212121" />
      <rect
        x="3.22089"
        y="11.0664"
        width="11.8098"
        height="8.28001"
        fill="#212121"
      />
      <rect
        x="11.8098"
        y="13.5488"
        width="11.8098"
        height="7.452"
        fill="#212121"
      />
    </svg>
  );
};
