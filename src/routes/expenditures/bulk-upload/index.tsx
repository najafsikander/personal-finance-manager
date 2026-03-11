import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expenditures/bulk-upload/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/expenditures/bulk-upload/"!</div>;
}
