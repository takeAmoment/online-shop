import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { formSchemaType } from "utilits/schema";

type MyInputProps = {
  type: string;
  text: string;
  name: string;
  classname: string;
  register: UseFormRegister<formSchemaType>;
};

const MyInput: FC<MyInputProps> = ({
  type,
  text,
  name,
  classname,
  register,
}) => {
  return (
    <>
      <label className={`label__${classname}`} htmlFor={name}>
        {text}
      </label>
      <input
        id={name}
        type={type}
        className={classname}
        {...register(name as keyof formSchemaType)}
      />
    </>
  );
};

export default MyInput;
