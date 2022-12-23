import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loginSchemaType } from "utilits/loginSchema";
import { formSchemaType } from "../../utilits/schema";

interface UserResp {
  id: number;
}
interface LoginResp {
  tocken: string;
}

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    addUser: builder.mutation<UserResp, formSchemaType>({
      query: (payload: formSchemaType) => ({
        url: "/users",
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    userLogin: builder.mutation<LoginResp, loginSchemaType>({
      query: (payload: loginSchemaType) => ({
        url: "/auth/login",
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const { useAddUserMutation, useUserLoginMutation } = storeApi;
