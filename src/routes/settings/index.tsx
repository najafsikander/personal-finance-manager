// src/routes/settings/index.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/")({
  component: SettingsIndexPage,
});

function SettingsIndexPage() {
  return <div>Select a settings section.</div>;
}
