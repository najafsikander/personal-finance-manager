import { useAppForm } from "@/lib/forms/useAppForm";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/expenditures/add/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: {
      payment_name: "",
      amount: "0",
      currency: "AED",
      date: "",
      method: "",
      category: "",
    },
    validators: {
      onChange: z.object({
        payment_name: z.string(),
        amount: z.string(),
        currency: z.string(),
        date: z.string(),
        method: z.string(),
        category: z.string(),
      }),
    },
    onSubmit: ({ value }) => {
      console.log("Value: ", form.state.values);
      alert(JSON.stringify(value, null, 2));
    },
    onSubmitInvalid: ({ formApi }) => {
      console.log("INVALID submit", formApi.state.errors);
    },
  });
  return (
    <>
      <div>Hello "/expenditures/add/"!</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log("handle submit called");
          form.handleSubmit();
        }}
      >
        <h1>Add Expense</h1>
        <form.AppField
          name="payment_name"
          children={(field) => (
            <field.TextField
              label="Payment Name"
              placeholder="Add Name"
              required={true}
            />
          )}
        />
        <form.AppField
          name="amount"
          children={(field) => (
            <field.TextField
              label="Amount"
              placeholder="Add Amount"
              required={true}
            />
          )}
        />
        <form.AppField
          name="currency"
          children={(field) => (
            <field.TextField
              label="Currency"
              placeholder="Add Currency"
              required={true}
            />
          )}
        />
        <form.AppField
          name="date"
          children={(field) => (
            <field.TextField
              label="Date"
              placeholder="Add Date"
              required={true}
            />
          )}
        />
        <form.AppField
          name="method"
          children={(field) => (
            <field.TextField
              label="Payment Method"
              placeholder="Add Method"
              required={true}
            />
          )}
        />
        <form.AppField
          name="category"
          children={(field) => (
            <field.TextField
              label="Category"
              placeholder="Add Category"
              required={true}
            />
          )}
        />

        <form.AppForm>
          <form.SubmitButton>ADD EXPENSE</form.SubmitButton>
        </form.AppForm>
      </form>
    </>
  );
}
