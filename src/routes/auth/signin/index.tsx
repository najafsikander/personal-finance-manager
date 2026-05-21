import { signinDefault } from "@/data/default/signin";
import { useAppForm } from "@/lib/forms/useAppForm";
import { signinSchema } from "@/schemas/signin";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signin/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: signinDefault,
    validators: {
      onChange: signinSchema,
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
    <div className="w-1/2 flex flex-col items-center bg-white p-2 rounded-sm">
      <h1 className="text-3xl font-medium mb-2">SignIn</h1>
      <form
        className="w-1/2 text-left"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log("handle submit called");
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="email"
          children={(field) => (
            <field.TextField
              label="Email"
              placeholder="Enter Email"
              required={true}
              size="lg"
            />
          )}
        />

        <form.AppField
          name="password"
          children={(field) => (
            <field.PasswordField
              label="Password"
              placeholder="Enter Password"
              required={true}
              size="lg"
            />
          )}
        />

        <div className="text-center">
          <form.AppForm>
            <form.SubmitButton type="submit">SignIn</form.SubmitButton>
          </form.AppForm>
        </div>
      </form>
    </div>
  );
}
