import DataTable from "@/components/tables/DataTable";
import { Transaction } from "@/types/transaction";
import { ColumnDef } from "@tanstack/react-table";
import { FC, useState } from "react";

type Props = {
  transactions: Transaction[];
  columns: ColumnDef<any, any>[];
  pageSize?: number;
};

const TransactionTable: FC<Props> = ({
  transactions,
  columns,
  pageSize = 2,
}) => {
  const [data, _setData] = useState(() => [...transactions]);

  return (
    <div className="p-4">
      <DataTable data={data} columns={columns} pageSize={pageSize} />
    </div>
  );
};

export default TransactionTable;
