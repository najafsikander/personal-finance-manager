import { useFieldContext } from "@/lib/forms/form-context";
import { FC } from "react";
import FormError from "../message-box/FormError";
import FormLabel from "../labels/FormLabel";
import clsx from "clsx";

type Props = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  size?: "sm" | "lg";
};

const NumberField: FC<Props> = ({
  label,
  placeholder,
  required,
  size = "sm",
}) => {
  const field = useFieldContext<number>();

  const inputClass = clsx(
    "border border-gray-200 bg-gray-50 rounded-sm text-neutral-800 font-medium px-2 py-1",
    {
      "text-xl": size == "lg",
      "text-sm": size == "sm",
    },
  );

  return (
    <div className="flex flex-col mt-2 mb-6">
      {label ? (
        <FormLabel labelName={field.name} isRequired={required} size={size}>
          {label}
        </FormLabel>
      ) : null}
      <input
        id={field.name}
        name={field.name}
        type="number"
        placeholder={placeholder}
        value={Number.isFinite(field.state.value) ? field.state.value : 0}
        onBlur={field.handleBlur}
        onChange={(e) => {
          const raw = e.target.value;
          field.handleChange(raw == "" ? 0 : Number(raw));
        }}
        required={required}
        className={inputClass}
      />
      <FormError
        isFieldValid={field.state.meta.isValid}
        errors={field.state.meta.errors}
      />
    </div>
  );
};

export default NumberField;
