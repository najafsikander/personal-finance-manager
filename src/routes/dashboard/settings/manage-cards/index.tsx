import CardsStack from "@/components/pages/Dashboard/CardsStack";
import PaymentCardForm from "@/components/pages/Settings/ManageCards/PaymentCardForm";
import { PaymentCardsData } from "@/data/payment-cards";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/settings/manage-cards/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-1 gap-5 mt-5">
      {/*Left Side*/}
      <div className="w-full bg-white p-4 pb-6 rounded-lg border border-white/20">
        <h3 className="font-semibold text-xl mb-5">Manage Cards</h3>
        <p className="text-gray-600">
          Here you can manage your credit and debit cards. You can add new
          cards, remove existing ones, and update card details.
        </p>
        <PaymentCardForm />
      </div>
      <div className="w-full bg-white p-4 pb-6 rounded-lg border border-white/20">
        <CardsStack cardsData={PaymentCardsData} />
      </div>
    </div>
  );
}
