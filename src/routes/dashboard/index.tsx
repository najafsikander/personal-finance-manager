import SummaryCards from "@/components/pages/Dashboard/SummaryCards";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-4xl font-medium text-white text-center">Dashboard</h1>
      {/* Summary Cards Grid */}
      <SummaryCards/>
    </>
  );
}
