import { signupDefault } from "@/data/default/signup";
import { useAppForm } from "@/lib/forms/useAppForm";
import { signupSchema } from "@/schemas/signup";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signup/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: signupDefault,
    validators: {
      onChange: signupSchema,
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
      <h1 className="text-3xl font-medium mb-2">SignUp</h1>
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
          name="firstName"
          children={(field) => (
            <field.TextField
              label="First Name"
              placeholder="Add Name"
              required={true}
              size="lg"
            />
          )}
        />
        <form.AppField
          name="lastName"
          children={(field) => (
            <field.TextField
              label="Last Name"
              placeholder="Add Name"
              required={true}
              size="lg"
            />
          )}
        />
        <form.AppField
          name="phoneNumber"
          children={(field) => (
            <field.TextField
              label="Phone Number"
              placeholder="Add Phone Number"
              required={true}
              size="lg"
            />
          )}
        />

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

        <form.AppField
          name="confirmPassword"
          children={(field) => (
            <field.PasswordField
              label="Confirm Password"
              placeholder="Enter Password"
              required={true}
              size="lg"
            />
          )}
        />
        <p>
          Do you have an account?{" "}
          <a href="/auth/signin" className="text-blue-500 hover:underline">
            SignIn
          </a>
        </p>

        <div className="text-center">
          <form.AppForm>
            <form.SubmitButton type="submit">SignIn</form.SubmitButton>
          </form.AppForm>
        </div>
      </form>
    </div>
  );
}
