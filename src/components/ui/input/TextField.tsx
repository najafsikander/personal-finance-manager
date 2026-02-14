import { FC } from "react";

type Props = {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  value?: string;
  required?: boolean;
  readonly?: boolean;
};

const TextField: FC<Props> = ({
  id,
  name,
  placeholder,
  label,
  value,
  required = false,
  readonly = false,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        required={required}
        readOnly={readonly}
      />
    </>
  );
};

export default TextField;
