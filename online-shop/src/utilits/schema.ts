import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "* E-mail is required" })
    .email({ message: "* Must be a valid e-mail" }),
  username: z
    .string()
    .nonempty({ message: "* Username is required" })
    .min(4, { message: "* Min length 4 symbols" }),
  password: z
    .string()
    .nonempty({ message: "* Password is required" })
    .min(6, { message: "* Min length 6 symbols" }),
  name: z.object({
    firstname: z
      .string()
      .nonempty({ message: "* Firstname is required" })
      .min(2, { message: "* Min length 2 symbols" }),
    lastname: z
      .string()
      .nonempty({ message: "* Lastname is required" })
      .min(2, { message: "* Min length 2 symbols" }),
  }),
  address: z.object({
    city: z.string().nonempty({ message: "* City is required" }),
    zipcode: z
      .string()
      .min(1, { message: "* Zipcode is required" })
      .regex(/\d+/, { message: "* Only numbers" }),
    street: z.string().nonempty({ message: "* Street is required" }),
    number: z
      .string()
      .min(1, { message: "* Number is required" })
      .regex(/\d+/, { message: "* Only numbers" }),
    geolocation: z.object({
      lat: z
        .string()
        .min(1, { message: "* Lat is required" })
        .regex(/\d+/, { message: "* Only numbers" }),
      long: z
        .string()
        .min(1, { message: "* Long is required" })
        .regex(/\d+/, { message: "* Only numbers" }),
    }),
  }),
  phone: z
    .string()
    .min(1, { message: "* Phone is required" })
    .regex(/\d+/, { message: "* Only numbers" }),
});

export type formSchemaType = z.infer<typeof schema>;
