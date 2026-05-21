import { z } from "zod";
const signupSchema = z.object({
  firstName: z.string().max(50),
  lastName: z.string().max(50),
  phoneNumber: z.string().max(20),
  email: z.email(),
  password: z.string().min(10).max(50),
  confirmPassword: z.string().min(10).max(50),
});

export { signupSchema };
