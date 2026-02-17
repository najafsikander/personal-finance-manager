import { useFieldContext } from "@/lib/forms/useAppForm";
import { FC } from "react";

type Props = {
  placeholder?: string;
  label?: string;
  required?: boolean;
  readOnly?: boolean;
};

const TextField: FC<Props> = ({
  placeholder,
  label,
  required = false,
  readOnly = false,
}) => {
  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col my-2">
      <label htmlFor={field.name} className="text-sm text-white font-medium">
        {label}
      </label>
      <input
        id={field.name}
        name={field.name}
        type="text"
        placeholder={placeholder}
        value={field.state.value ?? ""}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        required={required}
        readOnly={readOnly}
        className="text-xl border border-white rounded-md text-white font-medium"
      />
    </div>
  );
};

export default TextField;
