import { FC } from "react";

type Props = {
  id: string;
  name: string;
  label?: string;
  value?: string;
  readOnly?: boolean;
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
  readOnly = false,
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
        disabled={readOnly}
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
