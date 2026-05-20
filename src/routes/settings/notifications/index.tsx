import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/notifications/")({
  component: RouteComponent,
});
//TODO: Implement notifications settings page
//TODO: Add options for email notifications, push notifications, and in-app notifications
//TODO: Allow users to customize notification preferences for different events (e.g., budget updates, bill reminders, etc.)
//TODO: Implement a toggle for enabling/disabling notifications
function RouteComponent() {
  return <div>Hello "/settings/notifications/"!</div>;
}
