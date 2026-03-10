import { useFieldContext } from "@/lib/forms/useAppForm";
import { FC } from "react";
import FormError from "../message-box/FormError";
import FormLabel from "../labels/FormLabel";

type Props = {
  label?: string;
  placeholder?: string;
  required?: boolean;
};

const NumberField: FC<Props> = ({ label, placeholder, required }) => {
  const field = useFieldContext<number>();

  return (
    <div className="flex flex-col mt-2 mb-6">
      {label ? (
        <FormLabel labelName={field.name} isRequired={required}>
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
        className="text-xl border border-gray-200 bg-gray-50 rounded-sm text-neutral-800 font-medium px-2 py-1"
      />
      <FormError
        isFieldValid={field.state.meta.isValid}
        errors={field.state.meta.errors}
      />
    </div>
  );
};

export default NumberField;
