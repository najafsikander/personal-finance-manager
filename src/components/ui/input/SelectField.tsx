import { useFieldContext } from "@/lib/forms/form-context";
import { FC, ReactNode } from "react";
import FormError from "../message-box/FormError";
import FormLabel from "../labels/FormLabel";
import clsx from "clsx";

type Props = {
  label?: string;
  readOnly?: boolean;
  required?: boolean;
  children: ReactNode;
  size?: "sm" | "lg";
};

const SelectField: FC<Props> = ({
  label,
  readOnly = false,
  required = false,
  children,
  size = "sm",
}) => {
  const field = useFieldContext<string>();

  const inputClass = clsx(
    "border border-gray-200 bg-gray-50 rounded-sm text-neutral-800 font-medium px-2 py-1",
    {
      "text-xl": size == "lg",
      "text-sm": size == "sm",
    },
  );

  return (
    <div className="flex flex-col mt-2 mb-6">
      <FormLabel labelName={field.name} isRequired={required} size={size}>
        {label}
      </FormLabel>
      <select
        id={field.name}
        name={field.name}
        disabled={readOnly}
        required={required}
        value={field.state.value ?? ""}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        className={inputClass}
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
