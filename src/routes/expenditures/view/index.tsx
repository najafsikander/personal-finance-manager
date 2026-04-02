import TransactionTable from "@/components/pages/Dashboard/TransactionTable";
import { TransactionTableColumns } from "@/data/default/columns";
import { filterDefault } from "@/data/default/filters";
import { TransactionsData } from "@/data/transactions";
import { useAppForm } from "@/lib/forms/useAppForm";
import { filterSchema } from "@/schemas/filters";
import { createFileRoute } from "@tanstack/react-router";

// TODO: ADD FILTER AND A PROP TO HIDE SHOW FILTER
// TODO: ADD PAGINATION AND SORTING AND PROPS TO HIDE SHOW THEM

export const Route = createFileRoute("/expenditures/view/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: filterDefault,
    validators: {
      onChange: filterSchema,
    },
    onSubmit: ({ value }) => {
      console.log("Filter Value: ", form.state.values);
      alert(JSON.stringify(value, null, 2));
    },
    onSubmitInvalid: ({ formApi }) => {
      console.log("INVALID submit", formApi.state.errors);
    },
  });

  return (
    <>
      <div className="w-full bg-white mt-5 p-4 pb-6 rounded-lg border border-white/20">
        <h3 className="font-semibold text-xl mb-5">Transactions</h3>
        <section className="w-full">
          <form
            className="w-full flex flex-row flex-wrap gap-2 items-center"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("handle submit called");
              form.handleSubmit();
            }}
          >
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
              name="startDate"
              children={(field) => (
                <field.DateField
                  label="Start Date"
                  placeholder="Add Date"
                  required={true}
                />
              )}
            />

            <form.AppField
              name="endDate"
              children={(field) => (
                <field.DateField
                  label="End Date"
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
              <div className="flex items-end">
                <form.SubmitButton className="h-12 my-0">
                  FILTER
                </form.SubmitButton>
              </div>
            </form.AppForm>
          </form>
        </section>
        <TransactionTable
          columns={TransactionTableColumns}
          transactions={TransactionsData}
        />
      </div>
    </>
  );
}
