import Select from "react-select";
import "../../styles/select-nes.scss";
import { useEffect, useState } from "react";

interface SelectNesProps {
  options: Record<string, any>[];
  valueKey?: string;
  labelKey?: string;
  value?: any;
  onChange?: (payload: any) => void;
}

export const SelectNes: React.FC<SelectNesProps> = ({
  options,
  valueKey = "value",
  labelKey = "label",
  onChange,
}) => {
  const [value, setValue] = useState<any>();

  useEffect(() => {
    setValue(null);
  }, [options]);

  const CustomDropdownIndicator = () => null;
  return (
    <div>
      <Select
        classNames={{
          control: () => "border-nes",
        }}
        components={{ DropdownIndicator: CustomDropdownIndicator }}
        options={options}
        getOptionLabel={(option) => option[labelKey]}
        getOptionValue={(option) => option[valueKey]}
        value={value}
        onChange={(payload) => {
          setValue(payload);
          onChange && onChange(payload);
        }}
      />
    </div>
  );
};
