import { FC } from "react";

type Props = {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  value?: string;
  required?: boolean;
  readonly?: boolean;
  min?: string;
  max?: string;
};

const TextField: FC<Props> = ({
  id,
  name,
  placeholder,
  label,
  value,
  required = false,
  readonly = false,
  min = "01/01/2000",
  max = "12/31/2099",
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type="date"
        placeholder={placeholder}
        value={value}
        required={required}
        readOnly={readonly}
        min={min}
        max={max}
      />
    </>
  );
};

export default TextField;
