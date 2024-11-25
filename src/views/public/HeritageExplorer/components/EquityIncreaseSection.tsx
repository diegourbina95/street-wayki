import { useEffect, useState } from "react";

import { Bar } from "../../../../components/Charts/Bar";

import {
  labels,
  data,
  backgroundColor,
  borderColor,
} from "../../../../_mock/equity-increase.data";

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

  useEffect(() => {
    setBarLabels(labels);
    setBarData(data);
    setBackgroundColor(backgroundColor);
    setBorderColor(borderColor);
  }, []);

  return (
    <div className="heritage-explorer-page__equity-increase">
      <div className="equity-increase__title">
        Top {labels.length || 0} Incremento Patrimonial {initialYear} -{" "}
        {finalYear}
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
        />
      </div>
    </div>
  );
};
