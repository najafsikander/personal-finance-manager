import { z } from "zod";
const paymentCardSchema = z.object({
  id: z.string().max(50),
  name: z.string().max(50),
  number: z.string().max(50),
  expiry: z.string().max(20),
  vendor: z.string().max(20),
  color: z.string().max(200),
});

export { paymentCardSchema };
