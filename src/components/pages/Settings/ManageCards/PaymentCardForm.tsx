import { paymentCardDefault } from "@/data/default/payment-card";
import { useAppForm } from "@/lib/forms/useAppForm";
import { paymentCardSchema } from "@/schemas/payment-card";

const PaymentCardForm = () => {
  const form = useAppForm({
    defaultValues: paymentCardDefault,
    validators: {
      onChange: paymentCardSchema,
    },
    onSubmit: ({ value }) => {
      console.log("Value: ", form.state.values);
      alert(JSON.stringify(value, null, 2));
    },
    onSubmitInvalid: ({ formApi }) => {
      console.log("INVALID submit", formApi.state.errors);
    },
  });

  return <></>;
};

export default PaymentCardForm;
