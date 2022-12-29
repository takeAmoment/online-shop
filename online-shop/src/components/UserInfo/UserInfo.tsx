import MyInput from "components/UI/inputs/MyInput";
import React, { FC } from "react";
import { UserInfoProps } from "types/types";

const UserInfo: FC<UserInfoProps> = ({ register, errors }) => {
  return (
    <div className="input__block">
      <div className="input__item">
        <MyInput
          type="text"
          text="E-mail:"
          name="email"
          register={register}
          classname="email"
        />
        <p className="input__error">{errors.email?.message}</p>
      </div>
      <div className="input__item">
        <MyInput
          type="text"
          text="User name:"
          name="username"
          classname="username"
          register={register}
        />
        <p className="input__error">{errors.username?.message}</p>
      </div>
      <div className="input__item">
        <MyInput
          type="password"
          text="Password:"
          name="password"
          classname="password"
          register={register}
        />
        <p className="input__error">{errors.password?.message}</p>
      </div>
    </div>
  );
};

export default UserInfo;
