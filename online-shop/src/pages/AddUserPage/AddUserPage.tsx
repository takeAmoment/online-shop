import MyInput from "components/UI/inputs/MyInput";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaType, schema } from "utilits/schema";
import "./AddUserPage.css";

export type Inputs = {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

const LoginPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitted },
  } = useForm<formSchemaType>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: "",
      username: "",
      password: "",
      name: {
        firstname: "",
        lastname: "",
      },
      address: {
        city: "",
        street: "",
        number: "",
        zipcode: "",
        geolocation: {
          lat: "0",
          long: "0",
        },
      },
      phone: "",
    },
  });
  useEffect(() => {
    if (isValid) {
      setIsDisabled(false);
    } else if (!isValid && isSubmitted) {
      setIsDisabled(false);
    }
  }, [isValid, isDirty, isSubmitted]);

  const onSubmit: SubmitHandler<formSchemaType> = (data: formSchemaType) => {
    console.log(data);
    reset();
  };
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    });
  };
  getLocation();

  return (
    <div className="login__container">
      <h2 className="title">Create User</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input__first-block">
          <div className="input__item">
            <MyInput
              type="text"
              text="E-mail:"
              name="email"
              register={register}
            />
            <p className="input__error">{errors.email?.message}</p>
          </div>
          <div className="input__item">
            <MyInput
              type="text"
              text="User name:"
              name="username"
              register={register}
            />
            <p className="input__error">{errors.username?.message}</p>
          </div>
          <div className="input__item">
            <MyInput
              type="text"
              text="Password:"
              name="password"
              register={register}
            />
            <p className="input__error">{errors.password?.message}</p>
          </div>
        </div>
        <div className="input__second-block">
          <div className="input__block">
            <div className="input__item">
              <MyInput
                type="text"
                text="First name:"
                name="name.firstname"
                register={register}
              />
              <p className="input__error">{errors.name?.firstname?.message}</p>
            </div>
            <div className="input__item">
              <MyInput
                type="text"
                text="Last name: "
                name="name.lastname"
                register={register}
              />
              <p className="input__error">{errors.name?.lastname?.message}</p>
            </div>
          </div>
          <div className="input__block">
            <div className="input__item">
              <MyInput
                type="text"
                text="City:"
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
                register={register}
              />
              <p className="input__error">{errors.address?.zipcode?.message}</p>
            </div>
          </div>
          <div className="input__block">
            <div className="input__item">
              <MyInput
                type="text"
                text="Street: "
                name="address.street"
                register={register}
              />
              <p className="input__error">{errors.address?.street?.message}</p>
            </div>
            <div className="input__item">
              <MyInput
                type="text"
                text="Number: "
                name="address.number"
                register={register}
              />
              <p className="input__error">{errors.address?.number?.message}</p>
            </div>
          </div>
          <div className="input__block">
            <div className="input__item">
              <MyInput
                type="text"
                text="Lat: "
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
                text="Long: "
                name="address.geolocation.long"
                register={register}
              />
              <p className="input__error">
                {errors.address?.geolocation?.long?.message}
              </p>
            </div>
          </div>
          <div className="input__item">
            <MyInput
              type="text"
              text="Phone number: "
              name="phone"
              register={register}
            />
            <p className="input__error">{errors.phone?.message}</p>
          </div>
          <button type="submit" className="submit" disabled={isDisabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
