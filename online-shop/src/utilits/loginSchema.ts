import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .nonempty({ message: "* Username is required" })
    .min(4, { message: "* Min length 4 symbols" }),
  password: z
    .string()
    .nonempty({ message: "* Password is required" })
    .min(6, { message: "* Min length 6 symbols" }),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
