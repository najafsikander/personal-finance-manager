import TransactionTable from "@/components/pages/Dashboard/TransactionTable";
import { TransactionTableColumns } from "@/data/default/columns";
import { TransactionsData } from "@/data/transactions";
import { createFileRoute } from "@tanstack/react-router";

// TODO: ADD FILTER AND A PROP TO HIDE SHOW FILTER
// TODO: ADD PAGINATION AND SORTING AND PROPS TO HIDE SHOW THEM

export const Route = createFileRoute("/expenditures/view/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="w-full bg-white mt-5 p-4 pb-6 rounded-lg border border-white/20">
        <h3 className="font-semibold text-xl mb-5">Transactions</h3>
        <TransactionTable
          columns={TransactionTableColumns}
          transactions={TransactionsData}
        />
      </div>
    </>
  );
}
