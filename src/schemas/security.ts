import { z } from "zod";
const securitySchema = z.object({
  oldPassword: z.string().min(10).max(50),
  newPassword: z.string().min(10).max(50),
});

export { securitySchema };
