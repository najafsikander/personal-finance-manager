import SummaryCard from "@/components/SummaryCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-4xl font-medium text-white text-center">Dashboard</h1>
      {/* Summary Cards Grid */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {/* Example Card */}
        <SummaryCard header="Total Income" amount="$5000" percentage="35%" subtext="Increased from last month" bgColor="bg-purple-500" />
        <SummaryCard header="Total Spending" amount="$3500" percentage="75%" subtext="Increased from last month" bgColor="bg-orange-400" />
        <SummaryCard header="Spending Goal" amount="$9254" percentage="15%" subtext="Increased from last month" bgColor="bg-blue-400" />
        <SummaryCard header="Total Transaction" amount="$17000" percentage="85%" subtext="Increased from last month" bgColor="bg-green-400" />
      </section>
    </>
  );
}
