import { profileDefault } from "@/data/default/profile";
import { useAppForm } from "@/lib/forms/useAppForm";
import { profileSchema } from "@/schemas/profile";

const ProfileForm = () => {
  const form = useAppForm({
    defaultValues: profileDefault,
    validators: {
      onChange: profileSchema,
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
    <div className="w-full mt-3 p-4 bg-gray-100 rounded-md border border-slate-300">
      <h1 className="font-medium text-lg">Update Profile</h1>
      <p className="text-sm text-slate-500 font-medium">
        This section allows you to update your profile information, including
        your name, email, and profile picture. Keeping your profile up to date
        helps us provide you with a personalized experience.
      </p>
      <form
        className="mt-5"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log("handle submit called");
          form.handleSubmit();
        }}
      >
        <div className="w-full flex flex-row gap-4 justify-between">
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
                placeholder="Add Email"
                required={true}
                size="lg"
              />
            )}
          />
        </div>
        <form.AppField
          name="bio"
          children={(field) => (
            <field.TextField
              label="Bio"
              placeholder="Add Bio"
              required={true}
              size="lg"
            />
          )}
        />
        <form.AppForm>
          <form.SubmitButton type="submit">Update Profile</form.SubmitButton>
        </form.AppForm>
      </form>
    </div>
  );
};
export default ProfileForm;
