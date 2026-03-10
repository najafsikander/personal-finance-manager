import ExpenseForm from "@/components/pages/Expenditures/Add/ExpenseForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expenditures/add/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ExpenseForm />;
}
