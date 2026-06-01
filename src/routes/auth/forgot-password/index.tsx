import { forgotPasswordDefault } from "@/data/default/forgotpassword";
import { useAppForm } from "@/lib/forms/useAppForm";
import { forgotPasswordSchema } from "@/schemas/forgotpassword";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/forgot-password/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: forgotPasswordDefault,
    validators: {
      onChange: forgotPasswordSchema,
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
      <h1 className="text-3xl font-medium mb-2">Forgot Password</h1>
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

        <p>
          You have an account?{" "}
          <a href="/auth/signin" className="text-blue-500 hover:underline mr-1">
            Sign In.
          </a>
        </p>

        <div className="text-center">
          <form.AppForm>
            <form.SubmitButton type="submit">Submit</form.SubmitButton>
          </form.AppForm>
        </div>
      </form>
    </div>
  );
}
