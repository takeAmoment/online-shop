import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchemaType } from "utilits/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "utilits/loginSchema";
import { useUserLoginMutation } from "redux/fakestore/fakestore.api";
import "./LoginPage.css";
import ModalWindow from "components/ModalWindow/ModalWindow";
import Spinner from "components/Spinner/Spinner";

export default function LoginPage() {
  const [userLogin, { data, isLoading, isSuccess, isError }] =
    useUserLoginMutation();
  const [isActive, setActive] = useState<boolean>(false);
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
    if (isSuccess || isError) {
      setActive(true);
    }
  }, [data, isSuccess, isError]);
  const closeWindow = () => {
    setActive(false);
  };

  const onSubmit: SubmitHandler<loginSchemaType> = (data: loginSchemaType) => {
    userLogin(data);
    reset();
  };
  return (
    <div className="login__container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
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
          <div className="warning__block">
            <p className="warning__message">
              <span className="warning__icon"></span>
              Unfortunatelly you can check login request only using the data of
              users who exist in the API.
            </p>
            <ul className="data__list">
              You can try use this data:
              <li>
                User 1: username: <span className="text_big"> johnd </span> ,
                password:
                <span className="text_big"> m38rmF$ </span>
              </li>
              <li>
                User 2: username: <span className="text_big"> mor_2314 </span> ,
                password:
                <span className="text_big"> 83r5^_ </span>
              </li>
            </ul>
          </div>
        </>
      )}
      <ModalWindow isActive={isActive} closeWindow={closeWindow}>
        {isError && (
          <p className="window__message">
            This user does not exist! Check data...
          </p>
        )}
        {isSuccess && data && (
          <p className="window__message">
            User logined successfully! Your token :
            <span className="text_small">{data.token}</span>
          </p>
        )}
      </ModalWindow>
    </div>
  );
}
