import MyInput from "components/UI/inputs/MyInput";
import React, { FC } from "react";
import { UserInfoProps } from "types/types";

const PersonalInfo: FC<UserInfoProps> = ({ register, errors }) => {
  return (
    <div className="input__block">
      <div className="input__item">
        <MyInput
          type="text"
          text="First name:"
          name="name.firstname"
          classname="firstname"
          register={register}
        />
        <p className="input__error">{errors.name?.firstname?.message}</p>
      </div>
      <div className="input__item">
        <MyInput
          type="text"
          text="Last name: "
          name="name.lastname"
          classname="lastname"
          register={register}
        />
        <p className="input__error">{errors.name?.lastname?.message}</p>
      </div>
      <div className="input__item">
        <MyInput
          type="text"
          text="Phone number: "
          name="phone"
          classname="phone"
          register={register}
        />
        <p className="input__error">{errors.phone?.message}</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
