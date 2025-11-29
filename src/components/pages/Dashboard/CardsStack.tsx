import PaymentCard from "@/components/cards/PaymentCard";

const CardsStack = () => {
  const cardVendor: string = "VISA";
  return (
    <>
      <PaymentCard cardVendor={cardVendor} />
    </>
  );
};

export default CardsStack;
