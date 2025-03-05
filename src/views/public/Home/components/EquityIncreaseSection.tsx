/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import { Bar } from "@/components/Charts";
import { useMediaQuery } from "@/hooks";
import { darkenColor, lightenColor } from "@/utils/colors";

/* DATA */
import { getTopAssetIncreases } from "@/data/equity-increase.data";

/* STYLES */

interface EquityIncreaseSectionProps {
  initialYear: number;
  finalYear: number;
  nameCurrency: string;
}

export const EquityIncreaseSection: React.FC<EquityIncreaseSectionProps> = ({
  initialYear,
  finalYear,
  nameCurrency,
}) => {
  const [barLabels, setBarLabels] = useState<string[]>([]);
  const [barData, setBarData] = useState<number[]>([]);
  const [barBackgroundColor, setBackgroundColor] = useState<string[]>([]);
  const [barBorderColor, setBorderColor] = useState<string[]>([]);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const listAssetIncreases = getTopAssetIncreases(5);
    setBarLabels(listAssetIncreases.map((value) => value.abbreviatedName));
    setBarData(
      listAssetIncreases.map((value) =>
        Number((value.totalIncrease / 1000000).toFixed(2))
      )
    );
    setBackgroundColor(
      listAssetIncreases.map((value) => lightenColor(value.color, 0.1))
    );
    setBorderColor(listAssetIncreases.map((value) => darkenColor(value.color)));
  }, []);

  return (
    <div className="home-page__equity-increase">
      <div className="equity-increase__title">
        Políticos con más incremento patrimonial
        <br />
        <span style={{ display: "block", marginTop: "10px" }}>
          {initialYear} - {finalYear}
        </span>
      </div>
      <span className="equity-increase__subtitle">
        Patrimonio ({nameCurrency})
      </span>
      <div className="equity-increase__bar">
        <Bar
          labels={barLabels}
          dataBar={barData}
          backgroundColor={barBackgroundColor}
          borderColor={barBorderColor}
          isMobile={isMobile}
          scaleSymbol="M"
        />
      </div>
    </div>
  );
};
