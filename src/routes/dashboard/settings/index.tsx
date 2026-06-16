// src/routes/settings/index.tsx
import CategoryOptionsCard from "@/components/cards/CategoryOptionsCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/settings/")({
  component: SettingsIndexPage,
});

function SettingsIndexPage() {
  const profilePills = [
    {
      name: "View Profile",
      path: "/dashboard/settings/profile/?readOnly=true",
    },
    {
      name: "Edit Profile",
      path: "/dashboard/settings/profile/?readOnly=false",
    },
  ];
  const securityPills = [
    {
      name: "Update Password",
      path: "/dashboard/settings/security/",
    },
  ];
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center">Settings</h2>
      <p className="text-gray-600 text-center">
        Please select a settings category from the left to manage your account
        preferences.
      </p>

      {/*Grid of cards for each settings category*/}
      <div className="w-full grid grid-cols-2 gap-5 mt-5 p-4">
        <CategoryOptionsCard title="Profile" pills={profilePills} />
        <CategoryOptionsCard title="Security" pills={securityPills} />
      </div>
    </div>
  );
}
