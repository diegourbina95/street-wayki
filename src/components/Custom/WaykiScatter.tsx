/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import { Scatter } from "@/components/Charts";

/* LIBRARIES */

/* STYLES */
import "@/styles/wayki-scatter.scss";

interface WaykiScatterProps {
  patrimonyData: any[];
  nameCurrency: string;
  orientation?: "x" | "y";
  tooltipBgColor?: string;
}

export const WaykiScatter: React.FC<WaykiScatterProps> = ({
  patrimonyData = [],
  nameCurrency,
  orientation,
  tooltipBgColor,
}) => {
  const [patrimonialData, setPatrimonialData] = useState<any>([]);

  useEffect(() => {
    setPatrimonialData(patrimonyData);
  }, [patrimonyData]);

  return (
    <div className="wayki-scatter">
      <div className="wayki-scatter__scatter-container">
        <div className="wayki-scatter__scatter-title">
          Patrimonio ({nameCurrency})
        </div>

        <div className="wayki-scatter__scatter-chart">
          <Scatter
            datasets={patrimonialData}
            orientation={orientation}
            tooltipBgColor={tooltipBgColor}
          />
        </div>
      </div>
    </div>
  );
};
