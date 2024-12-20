/* REACT COMPONENTS */
import { useEffect, useState } from "react";

/* LIBRARIES */
import Select from "react-select";

/* STYLES */
import "@/styles/select-nes.scss";

interface SelectNesProps {
  label?: string;
  options: Record<string, any>[];
  valueKey?: string;
  labelKey?: string;
  isMulti?: boolean;
  value?: any;
  onChange?: (payload: any) => void;
}

export const SelectNes: React.FC<SelectNesProps> = ({
  label,
  options,
  valueKey = "value",
  labelKey = "label",
  isMulti,
  onChange,
}) => {
  const [value, setValue] = useState<any>();

  useEffect(() => {
    setValue(null);
  }, [options]);

  const CustomDropdownIndicator = () => null;
  return (
    <div className="select-nest">
      {label && <span>{label}</span>}
      <Select
        classNames={{
          control: () => "border-nes",
        }}
        components={{ DropdownIndicator: CustomDropdownIndicator }}
        options={options}
        getOptionLabel={(option) => option[labelKey]}
        getOptionValue={(option) => option[valueKey]}
        value={value}
        isMulti={isMulti}
        onChange={(payload) => {
          setValue(payload);
          if (onChange) onChange(payload);
        }}
      />
    </div>
  );
};
