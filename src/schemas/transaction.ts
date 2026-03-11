import { z } from "zod";
const expenseSchema = z.object({
  payment_name: z.string().max(50),
  amount: z.number().min(0).max(10),
  currency: z.string(),
  date: z.string(),
  method: z.string(),
  category: z.string(),
  note: z.string(),
});

export { expenseSchema };
