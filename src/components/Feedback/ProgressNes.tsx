/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import {
  IconProgressBarTop,
  IconProgressBarBottom,
} from "@/components/DataDisplay";
import { formatAmount } from "@/utils/amounts";

/* LIBRARIES */

/* STYLES */
import "@/styles/progress-nes.scss";

interface ProgressNesProps {
  quantity1: number | null | undefined;
  quantity2: number | null | undefined;
  currency?: string;
}

export const ProgressNes: React.FC<ProgressNesProps> = ({
  quantity1,
  quantity2,
  currency,
}) => {
  const [barPercentage, setBarPercentage] = useState(0);

  useEffect(() => {
    if (
      quantity1 !== null &&
      quantity1 !== undefined &&
      quantity2 !== null &&
      quantity2 !== undefined
    )
      setBarPercentage((quantity1 / (quantity1 + quantity2)) * 100);
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
          {`${currency || ""} ${
            quantity1 !== null && quantity1 !== undefined
              ? formatAmount(quantity1)
              : "N/A"
          }`}
        </div>
        <div className="progress-nes__icon">
          <img src="./img/fire.png" alt="fire" />
        </div>
        <div
          className="progress-nes__right"
          style={{ width: `${100 - barPercentage}%` }}
        >
          {`${currency || ""} ${
            quantity2 !== null && quantity2 !== undefined
              ? formatAmount(quantity2)
              : "N/A"
          }`}
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
