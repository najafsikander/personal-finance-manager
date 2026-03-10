import { useFieldContext } from "@/lib/forms/useAppForm";
import { FC } from "react";
import FormError from "../message-box/FormError";
import FormLabel from "../labels/FormLabel";

type Props = {
  placeholder?: string;
  label?: string;
  required?: boolean;
  readOnly?: boolean;
};

const DateField: FC<Props> = ({
  placeholder,
  label,
  required = false,
  readOnly = false,
}) => {
  const field = useFieldContext<string>();
  return (
    <div className="flex flex-col mt-2 mb-6">
      <FormLabel labelName={field.name} isRequired={required}>
        {label}
      </FormLabel>
      <input
        id={field.name}
        name={field.name}
        type="date"
        placeholder={placeholder}
        value={field.state.value ?? ""}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        required={required}
        readOnly={readOnly}
        className="text-xl border border-gray-200 bg-gray-50 rounded-sm text-neutral-800 font-medium px-2 py-1"
      />
      <FormError
        isFieldValid={field.state.meta.isValid}
        errors={field.state.meta.errors}
      />
    </div>
  );
};

export default DateField;
