import { z } from "zod";
const profileSchema = z.object({
  firstName: z.string().max(50),
  lastName: z.string().max(50),
  phoneNumber: z.string().max(20),
  email: z.email(),
  bio: z.string().max(200),
});

export { profileSchema };
