import {
  DateField,
  NumberField,
  SelectField,
  SubmitButton,
  TextField,
} from "@/components/ui";
import { createFormHook } from "@tanstack/react-form";

import { fieldContext, formContext, useFieldContext } from "./form-context";

const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    NumberField,
    DateField,
    SelectField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});

export { useAppForm, useFieldContext };
