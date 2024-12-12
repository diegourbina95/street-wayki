import { SelectNes } from "../Inputs/SelectNes";
import { Line } from "../Charts/Line";

import { labelsLine, datasetsLine } from "../../_mock/equity-increase.data";

import "../../styles/equity-increase-comparator.scss";
import { useEffect, useState } from "react";

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
        <SelectNes
          label="Selecciona hasta 10 funcionarios:"
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
          <Line labels={years} datasets={datasets} />
        </div>
      </div>
    </div>
  );
};
