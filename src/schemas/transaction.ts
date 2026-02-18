import { z } from "zod";
const expenseSchema = z.object({
  payment_name: z.string(),
  amount: z.number().min(0).max(100000),
  currency: z.string(),
  date: z.string(),
  method: z.string(),
  category: z.string(),
});

export { expenseSchema };
