import { useFieldContext } from "@/lib/forms/useAppForm";
import { FC } from "react";
import FormError from "../message-box/FormError";

type Props = {
  label?: string;
  placeholder?: string;
  required?: boolean;
};

const NumberField: FC<Props> = ({ label, placeholder, required }) => {
  const field = useFieldContext<number>();

  return (
    <div className="flex flex-col my-2">
      {label ? (
        <label
          htmlFor={field.name}
          className="text-sm text-slate-800 font-medium"
        >
          {label}
        </label>
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
        className="text-xl border border-slate-800 rounded-md text-slate-800 font-medium"
      />
      <FormError
        isFieldValid={field.state.meta.isValid}
        errors={field.state.meta.errors}
      />
    </div>
  );
};

export default NumberField;
