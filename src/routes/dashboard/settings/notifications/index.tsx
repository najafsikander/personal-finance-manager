import NotificationCard from "@/components/cards/NotificationCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/settings/notifications/")({
  component: RouteComponent,
});
//TODO: Implement notifications settings page
//TODO: Add options for email notifications, push notifications, and in-app notifications
//TODO: Allow users to customize notification preferences for different events (e.g., budget updates, bill reminders, etc.)
//TODO: Implement a toggle for enabling/disabling notifications
function RouteComponent() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl font-medium mb-5">Notifications</h1>
      {/*Full Grid*/}
      <section className="w-full grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-5">
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </section>
    </div>
  );
}
