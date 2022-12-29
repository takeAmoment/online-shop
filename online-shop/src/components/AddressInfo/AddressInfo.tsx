import MyInput from "components/UI/inputs/MyInput";
import React, { FC } from "react";
import { UserInfoProps } from "types/types";

const AddressInfo: FC<UserInfoProps> = ({ register, errors }) => {
  return (
    <div className="input__block">
      <div className="input__items">
        <div className="input__item">
          <MyInput
            type="text"
            text="City:"
            classname="city"
            name="address.city"
            register={register}
          />
          <p className="input__error">{errors.address?.city?.message}</p>
        </div>
        <div className="input__item">
          <MyInput
            type="text"
            text="Zip code: "
            name="address.zipcode"
            classname="zip"
            register={register}
          />
          <p className="input__error">{errors.address?.zipcode?.message}</p>
        </div>
      </div>
      <div className="input__items">
        <div className="input__item">
          <MyInput
            type="text"
            text="Street: "
            name="address.street"
            classname="street"
            register={register}
          />
          <p className="input__error">{errors.address?.street?.message}</p>
        </div>
        <div className="input__item">
          <MyInput
            type="text"
            text="Number: "
            name="address.number"
            classname="number"
            register={register}
          />
          <p className="input__error">{errors.address?.number?.message}</p>
        </div>
      </div>
      <div className="input__items">
        <div className="input__item">
          <MyInput
            type="text"
            text="Latitude: "
            classname="lat"
            name="address.geolocation.lat"
            register={register}
          />
          <p className="input__error">
            {errors.address?.geolocation?.lat?.message}
          </p>
        </div>
        <div className="input__item">
          <MyInput
            type="text"
            text="Longtitude: "
            classname="long"
            name="address.geolocation.long"
            register={register}
          />
          <p className="input__error">
            {errors.address?.geolocation?.long?.message}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AddressInfo;
