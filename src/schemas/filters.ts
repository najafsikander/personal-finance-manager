import { z } from "zod";
const filterSchema = z.object({
  payment_name: z.string().max(50),
  startDate: z.string(),
  endDate: z.string(),
  method: z.string(),
  category: z.string(),
});

export { filterSchema };
