import Select from "react-select";
import "../../styles/select-nes.scss";

export const SelectNes = () => {
  const CustomDropdownIndicator = () => null;
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    {
      value: "vanilla",
      label: "Vanilla",
    },
  ];
  return (
    <div>
      <Select
        classNames={{
          control: () => "border-nes",
        }}
        components={{ DropdownIndicator: CustomDropdownIndicator }}
        options={options}
      />
    </div>
  );
};
