import { SelectNes } from "../Inputs/SelectNes";

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
    <div>
      <span>Filtra por partido:</span>
      <SelectNes options={options} isMulti onChange={handleChange} />
    </div>
  );
};
