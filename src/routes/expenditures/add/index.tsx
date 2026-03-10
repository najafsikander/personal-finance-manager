import BackButton from "@/components/ui/buttons/BackButton";
import { createFileRoute } from "@tanstack/react-router";
import { FilePlus } from "lucide-react";

export const Route = createFileRoute("/expenditures/add/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="w-full text-center border border-stone-50">
        <div className="w-full flex justify-between items-center p-2 mb-2">
          <div className="flex justify-start items-baseline gap-2">
            <FilePlus size={22} color="white" />
            <h3 className="font-medium text-xl text-white mb-2">Add Expense</h3>
          </div>
          <BackButton />
        </div>
      </section>
    </>
  );
}
