import { Transaction } from "@/types/transaction";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const transactions: Transaction[] = [
  {
    payment_name: "Netflix Subscription",
    amount: "55 AED",
    currency: "AED",
    date: "2026-02-01",
    method: "Credit Card",
    category: "Entertainment",
  },
  {
    payment_name: "Carrefour Grocery",
    amount: "230 AED",
    currency: "AED",
    date: "2026-02-03",
    method: "Debit Card",
    category: "Groceries",
  },
  {
    payment_name: "Dubai Taxi Ride",
    amount: "35 AED",
    currency: "AED",
    date: "2026-02-05",
    method: "Cash",
    category: "Transport",
  },
  {
    payment_name: "Gym Membership",
    amount: "150 AED",
    currency: "AED",
    date: "2026-02-06",
    method: "Bank Transfer",
    category: "Health & Fitness",
  },
  {
    payment_name: "Amazon Electronics Purchase",
    amount: "899 AED",
    currency: "AED",
    date: "2026-02-08",
    method: "Credit Card",
    category: "Shopping",
  },
];

const columnHelper = createColumnHelper<Transaction>();

const columns = [
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
];

const TransactionTable = () => {
  const [data, _setData] = useState(() => [...transactions]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="p-4">
      {/* Table Wrapper */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm text-left">
          {/* Header */}
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-4 font-semibold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Body */}
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className={`
                    border-t border-gray-200
                    ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    hover:bg-slate-500 transition
                  `}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 text-gray-800">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
