import { createColumnHelper } from "@tanstack/react-table";
import { Transaction } from "../../types/transaction";

const columnHelper = createColumnHelper<Transaction>();

export const TransactionTableColumns = [
  columnHelper.accessor("payment_name", {
    header: () => <span>Payment Name</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.amount, {
    id: "amount",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Amount</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("currency", {
    header: () => "Currency",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("date", {
    header: () => <span>Date</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("method", {
    header: () => <span>Method</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("category", {
    header: () => <span>Category</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("note", {
    header: () => <span>Note</span>,
    footer: (info) => info.column.id,
  }),
];
