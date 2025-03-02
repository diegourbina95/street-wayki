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
  maxOptions?: number;
  value?: any;
  closeMenuOnSelect?: boolean;
  onChange?: (payload: any) => void;
}

export const SelectNes: React.FC<SelectNesProps> = ({
  label,
  options,
  valueKey = "value",
  labelKey = "label",
  isMulti,
  maxOptions = 1,
  closeMenuOnSelect = false,
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
        closeMenuOnSelect={!closeMenuOnSelect}
        isClearable={false}
        onChange={(payload) => {
          if (!isMulti || payload.length <= maxOptions) {
            setValue(payload);
            if (onChange) onChange(payload);
          }
        }}
      />
    </div>
  );
};
