/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import {
  IconProgressBarTop,
  IconProgressBarBottom,
} from "@/components/DataDisplay";
import { formatNumber } from "@/utils/amounts";

/* LIBRARIES */

/* STYLES */
import "@/styles/progress-nes.scss";

interface ProgressNesProps {
  quantity1: number | null | undefined;
  quantity2: number | null | undefined;
  currency?: string;
  decimals?: number;
}

export const ProgressNes: React.FC<ProgressNesProps> = ({
  quantity1,
  quantity2,
  currency,
  decimals,
}) => {
  const [barPercentage, setBarPercentage] = useState(0);

  useEffect(() => {
    if (
      quantity1 !== null &&
      quantity1 !== undefined &&
      quantity2 !== null &&
      quantity2 !== undefined
    ) {
      if (quantity1 === 0 && quantity2 === 0) {
        setBarPercentage(50);
      } else {
        setBarPercentage((quantity1 / (quantity1 + quantity2)) * 100);
      }
    }
  }, [quantity1, quantity2]);
  return (
    <div className="progress-nes">
      <IconProgressBarTop
        style={{
          position: "absolute",
          top: "-4px",
          zIndex: 1,
          margin: "0 2.5px",
        }}
      />
      <div className="progress-nes__content">
        <div
          className="progress-nes__left"
          style={{ width: `${barPercentage}%` }}
        >
          <div className="progress-nes__textL">
            {`${currency || ""} ${
              quantity1 !== null && quantity1 !== undefined
                ? formatNumber(quantity1, decimals !== undefined ? decimals : 2)
                : "N/A"
            }`}
          </div>
        </div>
        <div className="progress-nes__icon">
          <img src="./img/fire.png" alt="fire" />
        </div>
        <div
          className="progress-nes__right"
          style={{ width: `${100 - barPercentage}%` }}
        >
          <div className="progress-nes__textR">
            {`${currency || ""} ${
              quantity2 !== null && quantity2 !== undefined
                ? formatNumber(quantity2, decimals !== undefined ? decimals : 2)
                : "N/A"
            }`}
          </div>
        </div>
      </div>
      <IconProgressBarBottom
        style={{
          position: "absolute",
          bottom: "-4px",
          zIndex: 1,
          margin: "0 2.5px",
        }}
      />
    </div>
  );
};
