import TransactionsOverview from "@/components/pages/Dashboard/TransactionsOverview";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expenditures/view/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <TransactionsOverview />
    </>
  );
}
