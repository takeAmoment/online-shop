import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartProduct, IProduct, IUser } from "types/types";
import { loginSchemaType } from "utilits/loginSchema";
import { formSchemaType } from "../../utilits/schema";

interface UserResp {
  id: number;
}
interface LoginResp {
  token: string;
}

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], string>({
      query: (sort: string) => ({
        url: "/products",
        params: {
          sort: sort,
        },
      }),
    }),
    getProduct: builder.query<IProduct, number>({
      query: (id: number) => ({
        url: `/products/${id}`,
      }),
    }),
    getByCategory: builder.query<IProduct[], string>({
      query: (category: string) => ({
        url: `/products/category/${category}`,
      }),
    }),
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: "/users",
      }),
    }),
    getUserCart: builder.query<CartProduct[], number>({
      query: (id: number) => ({
        url: `/carts/user/${id}`,
      }),
    }),
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

export const {
  useAddUserMutation,
  useUserLoginMutation,
  useGetProductsQuery,
  useLazyGetByCategoryQuery,
  useGetUsersQuery,
  useLazyGetUserCartQuery,
  useGetProductQuery,
} = storeApi;
