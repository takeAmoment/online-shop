import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchemaType } from "utilits/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "utilits/loginSchema";
import { useUserLoginMutation } from "redux/fakestore/fakestore.api";
import "./LoginPage.css";

export default function LoginPage() {
  const [userLogin, { data, isLoading, isSuccess }] = useUserLoginMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "mor_2314",
      password: "83r5^_",
    },
  });
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [data, isSuccess]);

  const onSubmit: SubmitHandler<loginSchemaType> = (data: loginSchemaType) => {
    userLogin(data);
    reset();
  };
  return (
    <div className="login__container">
      {isLoading && <p>Loading...</p>}
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input__username">
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" {...register("username")} />
          <p className="input__error">{errors.username?.message}</p>
        </div>
        <div className="input__password">
          <label htmlFor="password">Password:</label>
          <input id="password" type="text" {...register("password")} />
          <p className="input__error">{errors.password?.message}</p>
        </div>
        <button className="login__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
