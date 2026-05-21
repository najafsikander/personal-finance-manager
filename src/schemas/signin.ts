import { z } from "zod";
const signinSchema = z.object({
  email: z.email(),
  password: z.string().min(10).max(50),
});

export { signinSchema };
