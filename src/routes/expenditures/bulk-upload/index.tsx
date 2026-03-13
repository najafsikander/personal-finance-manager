import PageArea from "@/components/layout/PageArea";
import { createFileRoute } from "@tanstack/react-router";
import { FilePlus } from "lucide-react";

export const Route = createFileRoute("/expenditures/bulk-upload/")({
  component: RouteComponent,
});

function RouteComponent() {
  const icon = <FilePlus size={22} color="white" />;
  const mainAreaDescription = (
    <>
      <p>
        Record a new expense by filling out the form on the right. Provide the
        payment name, amount, date, payment method, and category to accurately
        track your transactions.
      </p>

      <p>
        Once submitted, the expense will be saved to your financial records.
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
    </>
  );

  return (
    <section className="w-full flex justify-center">
      <PageArea
        icon={icon}
        upperRowHeading="Bulk Expense Upload"
        mainAreaHeading="Bulk Upload Info"
        mainAreaDescription={mainAreaDescription}
        mainContent={
          <>
            <p>Add expenses using a file</p>
          </>
        }
      />
    </section>
  );
}
