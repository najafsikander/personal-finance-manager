import { FC } from "react";

type Props = {
  id: string;
  name: string;
  label?: string;
  value?: string;
  readonly?: boolean;
  required?: boolean;
  options: {
    value: string;
    label: string;
  }[];
};

const SelectField: FC<Props> = ({
  id,
  name,
  label,
  value,
  readonly = false,
  required = false,
  options,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        disabled={readonly}
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectField;
