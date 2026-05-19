import { securityDefault } from "@/data/default/security";
import { useAppForm } from "@/lib/forms/useAppForm";
import { securitySchema } from "@/schemas/security";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/security/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: securityDefault,
    validators: {
      onChange: securitySchema,
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
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl font-medium mb-5">Update Password</h1>
      <form
        className="w-1/2"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log("handle submit called");
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="oldPassword"
          children={(field) => (
            <field.PasswordField
              label="Old Password"
              placeholder="Put your old password here"
              required={true}
              size="lg"
            />
          )}
        />

        <form.AppField
          name="newPassword"
          children={(field) => (
            <field.PasswordField
              label="New Password"
              placeholder="Put your new password here"
              required={true}
              size="lg"
            />
          )}
        />

        <div className="text-center">
          <form.AppForm>
            <form.SubmitButton type="submit">Update Password</form.SubmitButton>
          </form.AppForm>
        </div>
      </form>
    </div>
  );
}
