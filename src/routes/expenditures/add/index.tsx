import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expenditures/add/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/expenditures/add/"!</div>;
}
