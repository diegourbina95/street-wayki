/* REACT COMPONENTS */
import { useEffect, useState } from "react";

import { SelectNes } from "@/components/Inputs";
import { Line } from "@/components/Charts";
import { useMediaQuery } from "@/hooks";

/* LIBRARIES */

/* STYLES */
import "@/styles/equity-increase-comparator.scss";

interface EquityIncreaseComparatorProps {
  officials: Datasets[];
  years: number[];
}

interface Datasets {
  data: number[];
  tension: number;
  borderColor: string;
  personName: string;
  personCode: number;
  label: string;
}

export const EquityIncreaseComparator: React.FC<
  EquityIncreaseComparatorProps
> = (payload) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [years, setYears] = useState<number[]>([]);
  const [datasets, setDatasets] = useState<Datasets[]>([]);
  const [officials, setOfficials] = useState<Datasets[]>([]);

  useEffect(() => {
    setYears(payload.years);
    setOfficials(payload.officials);
  }, [payload]);

  const handleChange = (payload: Datasets[]) => {
    setDatasets(payload);
  };

  return (
    <div className="equity-increase-comparator">
      <div className="equity-increase-comparator__select-container">
        <div className="equity-increase-comparator__label">
          Selecciona hasta 10 funcionarios
        </div>
        <SelectNes
          options={officials}
          labelKey="personName"
          valueKey="personCode"
          isMulti
          onChange={handleChange}
        />
      </div>
      <div className="equity-increase-comparator__line-container">
        <div className="equity-increase-comparator__line-title">
          Patrimonio (dólares)
        </div>
        <div className="equity-increase-comparator__line-chart">
          <Line labels={years} datasets={datasets} isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};
