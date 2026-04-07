import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import { FC, useState } from "react";

type Props = {
  data: any[];
  columns: any[];
  pageSize?: number;
};

const DataTable: FC<Props> = ({ data, columns, pageSize = 10 }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: pageSize, //default page size
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: { pagination },
  });

  const activeCss: string =
    "m-2 rounded hover:text-lg hover:cursor-pointer transition duration-200";
  const inactiveCss: string =
    "m-2 rounded hover:text-lg hover:cursor-pointer transition duration-200 opacity-50";

  return (
    <>
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
        <div>
          <button
            className={clsx({
              [activeCss]: table.getCanPreviousPage(),
              [inactiveCss]: !table.getCanPreviousPage(),
            })}
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className={clsx({
              [activeCss]: table.getCanPreviousPage(),
              [inactiveCss]: !table.getCanPreviousPage(),
            })}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className={clsx({
              [activeCss]: table.getCanNextPage(),
              [inactiveCss]: !table.getCanNextPage(),
            })}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className={clsx({
              [activeCss]: table.getCanNextPage(),
              [inactiveCss]: !table.getCanNextPage(),
            })}
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default DataTable;
