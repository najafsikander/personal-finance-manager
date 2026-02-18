import { expenseDefault } from "@/data/default/expense";
import { useAppForm } from "@/lib/forms/useAppForm";
import { expenseSchema } from "@/schemas/transaction";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expenditures/add/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: expenseDefault,
    validators: {
      onChange: expenseSchema,
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
            <field.NumberField
              label="Amount"
              placeholder="Add Amount"
              required={true}
            />
          )}
        />
        <form.AppField
          name="currency"
          children={(field) => (
            <field.SelectField label="Currency" required={true}>
              <option value="AED">AED</option>
              <option value="USD">USD</option>
            </field.SelectField>
          )}
        />
        <form.AppField
          name="date"
          children={(field) => (
            <field.DateField
              label="Date"
              placeholder="Add Date"
              required={true}
            />
          )}
        />
        <form.AppField
          name="method"
          children={(field) => (
            <field.SelectField label="Payment Method" required={true}>
              <option value="cash">Cash</option>
              <option value="debitCard">Debit Card</option>
              <option value="creditCard">Credit Card</option>
            </field.SelectField>
          )}
        />
        <form.AppField
          name="category"
          children={(field) => (
            <field.SelectField label="Category" required={true}>
              <option value="electricity">Electricity</option>
              <option value="grocery">Grocery</option>
            </field.SelectField>
          )}
        />

        <form.AppForm>
          <form.SubmitButton>ADD EXPENSE</form.SubmitButton>
        </form.AppForm>
      </form>
    </>
  );
}
