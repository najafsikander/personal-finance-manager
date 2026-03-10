import { useFieldContext } from "@/lib/forms/useAppForm";
import { FC, ReactNode } from "react";
import FormError from "../message-box/FormError";

type Props = {
  label?: string;
  readOnly?: boolean;
  required?: boolean;
  children: ReactNode;
};

const SelectField: FC<Props> = ({
  label,
  readOnly = false,
  required = false,
  children,
}) => {
  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col my-2">
      <label
        htmlFor={field.name}
        className="text-sm text-slate-800 font-medium"
      >
        {label}
      </label>
      <select
        id={field.name}
        name={field.name}
        disabled={readOnly}
        required={required}
        value={field.state.value ?? ""}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        className="text-xl border border-slate-800 rounded-md text-slate-800 font-medium"
      >
        <option value="">Select an option</option>
        {children}
      </select>
      <FormError
        isFieldValid={field.state.meta.isValid}
        errors={field.state.meta.errors}
      />
    </div>
  );
};

export default SelectField;
