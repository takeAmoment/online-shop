import { Inputs } from "pages/AddUserPage/AddUserPage";
import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { formSchemaType } from "utilits/schema";

type MyInputProps = {
  type: string;
  text: string;
  name: string;
  register: UseFormRegister<formSchemaType>;
};

const MyInput: FC<MyInputProps> = ({ type, text, name, register }) => {
  return (
    <>
      <label className={`label__${name}`} htmlFor={name}>
        {text}
      </label>
      <input
        id={name}
        type={type}
        className={name}
        {...register(name as keyof Inputs)}
      />
    </>
  );
};

export default MyInput;
