import { useFieldContext } from "@/lib/forms/form-context";
import { FC } from "react";
import FormError from "../message-box/FormError";
import FormLabel from "../labels/FormLabel";
import clsx from "clsx";

type Props = {
  placeholder?: string;
  label?: string;
  required?: boolean;
  readOnly?: boolean;
  size?: "sm" | "lg";
};

const TextField: FC<Props> = ({
  placeholder,
  label,
  required = false,
  readOnly = false,
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
        className={inputClass}
      />
      <FormError
        isFieldValid={field.state.meta.isValid}
        errors={field.state.meta.errors}
      />
    </div>
  );
};

export default TextField;
