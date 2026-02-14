import { FC } from "react";

type Props = {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  value?: string;
  readOnly?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
};

const NumberField: FC<Props> = ({
  id,
  name,
  placeholder,
  label,
  value,
  readOnly = false,
  required = false,
  min = 0,
  max = 1000000,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type="number"
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
        readOnly={readOnly}
        required={required}
      />
    </>
  );
};

export default NumberField;
