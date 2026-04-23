// src/routes/settings/route.tsx
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Bell, CircleUser, Shield } from "lucide-react";

export const Route = createFileRoute("/settings")({
  component: SettingsLayout,
});

function SettingsLayout() {
  return (
    <div className="w-full bg-white mt-5 p-4 pb-6 rounded-lg border border-white/20">
      <h3 className="font-semibold text-xl mb-5">Settings</h3>

      <div className="w-full flex gap-3 mt-3">
        <aside className="w-64 border border-slate-300 bg-gray-100 p-2 rounded-md">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/settings/profile"
                className="block p-2 rounded-md hover:bg-gray-200 transition"
                activeProps={{ className: "block p-2 rounded-md bg-gray-300" }}
              >
                <div className="flex gap-2 items-center">
                  <CircleUser size={25} />
                  Profile
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/settings/security"
                className="block p-2 rounded-md hover:bg-gray-200 transition"
                activeProps={{ className: "block p-2 rounded-md bg-gray-300" }}
              >
                <div className="flex gap-2 items-center">
                  <Shield size={25} />
                  Security
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/settings/notifications"
                className="block p-2 rounded-md hover:bg-gray-200 transition"
                activeProps={{ className: "block p-2 rounded-md bg-gray-300" }}
              >
                <div className="flex gap-2 items-center">
                  <Bell size={25} />
                  Notification
                </div>
              </Link>
            </li>
          </ul>
        </aside>

        <section className="flex-1 border border-slate-300 bg-gray-100 p-2 rounded-md">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
