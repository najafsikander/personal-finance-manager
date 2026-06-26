export type PaymentCard = {
  id: string;
  number: string;
  name: string;
  expiry: string;
  vendor: "VISA" | "MC" | "AMEX" | "DISCOVER";
  color: string;
};
