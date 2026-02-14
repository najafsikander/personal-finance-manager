import { FC } from "react";

type Props = {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  value?: string;
  required?: boolean;
  readOnly?: boolean;
};

const TextField: FC<Props> = ({
  id,
  name,
  placeholder,
  label,
  value,
  required = false,
  readOnly = false,
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
        readOnly={readOnly}
      />
    </>
  );
};

export default TextField;
