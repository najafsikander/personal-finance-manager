import { filterDefault } from "@/data/default/filters";
import { useAppForm } from "@/lib/forms/useAppForm";
import { filterSchema } from "@/schemas/filters";

const FilterTransactions = () => {
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
    <section className="w-full ml-5">
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
            <form.SubmitButton className="h-12 my-0">FILTER</form.SubmitButton>
          </div>
        </form.AppForm>
      </form>
    </section>
  );
};

export default FilterTransactions;
