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
  maxNumberOfficials: number;
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
  const [numberOfficials, setNumberOfficials] = useState<number>(0);

  useEffect(() => {
    setNumberOfficials(payload.maxNumberOfficials);
  }, []);

  useEffect(() => {
    setYears(payload.years);
    setOfficials(payload.officials);
  }, [payload]);

  const handleChange = (datasets: Datasets[]) => {
    setNumberOfficials(payload.maxNumberOfficials - datasets.length);
    setDatasets(datasets);
  };

  return (
    <div className="equity-increase-comparator">
      <div className="equity-increase-comparator__select-container">
        <div className="equity-increase-comparator__label">
          Selecciona hasta {numberOfficials} funcionarios
        </div>
        <SelectNes
          options={officials}
          labelKey="personName"
          valueKey="personCode"
          isMulti
          closeMenuOnSelect
          maxOptions={payload.maxNumberOfficials}
          onChange={handleChange}
        />
      </div>
      <div className="equity-increase-comparator__line-container">
        <div className="equity-increase-comparator__line-title">
          Patrimonio (soles)
        </div>
        <div className="equity-increase-comparator__line-chart">
          <Line labels={years} datasets={datasets} isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};
