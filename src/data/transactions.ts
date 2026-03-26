import { Transaction } from "@/types/transaction";

export const TransactionsData: Transaction[] = [
  {
    payment_name: "Netflix Subscription",
    amount: "55 AED",
    currency: "AED",
    date: "2026-02-01",
    method: "Credit Card",
    category: "Entertainment",
    note: "Test Note",
  },
  {
    payment_name: "Carrefour Grocery",
    amount: "230 AED",
    currency: "AED",
    date: "2026-02-03",
    method: "Debit Card",
    category: "Groceries",
    note: "Test Note",
  },
  {
    payment_name: "Dubai Taxi Ride",
    amount: "35 AED",
    currency: "AED",
    date: "2026-02-05",
    method: "Cash",
    category: "Transport",
    note: "Test Note",
  },
  {
    payment_name: "Gym Membership",
    amount: "150 AED",
    currency: "AED",
    date: "2026-02-06",
    method: "Bank Transfer",
    category: "Health & Fitness",
    note: "Test Note",
  },
  {
    payment_name: "Amazon Electronics Purchase",
    amount: "899 AED",
    currency: "AED",
    date: "2026-02-08",
    method: "Credit Card",
    category: "Shopping",
    note: "Test Note",
  },
];
