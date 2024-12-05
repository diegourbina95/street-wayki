import { SelectNes } from "../Inputs/SelectNes";
import { Line } from "../Charts/Line";

import { labelsLine, datasetsLine } from "../../_mock/equity-increase.data";

export const EquityIncreaseComparator = () => {
  const handleChange = (payload: any) => {
    console.log("payload: ", payload);
  };
  const options = [
    {
      value: 1,
      label: "Sofía Sánchez",
    },
    {
      value: 2,
      label: "Carlos Villanueva",
    },
    {
      value: 3,
      label: "Daniela Flores",
    },
    {
      value: 4,
      label: "Pedro Álvarez",
    },
  ];
  return (
    <div className="equity-increase-comparator">
      <div className="equity-increase-comparator__select-container">
        <SelectNes
          label="Selecciona hasta 10 funcionarios:"
          options={options}
          isMulti
          onChange={handleChange}
        />
      </div>
      <div className="equity-increase-comparator__select-container">
        <div className="equity-increase-comparator__line-title">
          Patrimonio (dólares)
        </div>

        <div className="equity-increase-comparator__line-chart">
          <Line labels={labelsLine} datasets={datasetsLine} />
        </div>
      </div>
    </div>
  );
};
