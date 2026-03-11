import ExpenseForm from "@/components/pages/Expenditures/Add/ExpenseForm";
import BackButton from "@/components/ui/buttons/BackButton";
import { createFileRoute } from "@tanstack/react-router";
import { FilePlus } from "lucide-react";

export const Route = createFileRoute("/expenditures/add/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="w-full flex justify-center">
        <div className="w-2/3 text-center">
          {/*Upper Row*/}
          <div className="w-full flex justify-between items-center p-2 mb-1">
            <div className="flex justify-start items-baseline gap-2 pt-3">
              <FilePlus size={22} color="white" />
              <h3 className="font-medium text-xl text-white mb-2">
                Add Expense
              </h3>
            </div>
            <BackButton />
          </div>

          {/*Form Area*/}
          <div className="w-full rounded-md bg-white">
            <div className="pt-2 rounded-t-md bg-slate-500"></div>
            <div className="w-full p-2 bg-white flex text-left">
              <div className="px-5 basis-1/3 mt-2">
                <h1 className="font-bold text-xl">Expense Information</h1>
                <div className="text-sm text-gray-600 space-y-3">
                  <p>
                    Record a new expense by filling out the form on the right.
                    Provide the payment name, amount, date, payment method, and
                    category to accurately track your transactions.
                  </p>

                  <p>
                    Once submitted, the expense will be saved to your financial
                    records.
                  </p>

                  <p>
                    If you have multiple transactions, you can also{" "}
                    <a
                      href="/expenditures/bulk-upload"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      upload them using a file
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="basis-2/3">
                <ExpenseForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
