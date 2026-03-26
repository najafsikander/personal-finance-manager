import { TransactionTableColumns } from "@/data/default/columns";
import TransactionTable from "./TransactionTable";
import { TransactionsData } from "@/data/transactions";

const TransactionsOverview = () => {
  return (
    <>
      <div className="w-full bg-white mt-5 p-4 pb-6 rounded-lg border border-white/20">
        <h3 className="font-semibold text-xl mb-5">Transactions Overview</h3>
        <TransactionTable
          columns={TransactionTableColumns}
          transactions={TransactionsData}
        />
      </div>
    </>
  );
};

export default TransactionsOverview;
