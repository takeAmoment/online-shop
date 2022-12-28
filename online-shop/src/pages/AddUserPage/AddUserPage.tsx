import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaType, schema } from "utilits/schema";
import "./AddUserPage.css";
import { useAddUserMutation } from "redux/fakestore/fakestore.api";
import UserInfo from "components/UserInfo/UserInfo";
import PersonalInfo from "components/PersonalInfo/PersonalInfo";
import AddressInfo from "components/AddressInfo/AddressInfo";
import Spinner from "components/Spinner/Spinner";
import ModalWindow from "components/ModalWindow/ModalWindow";

const MAX_INDEX = 3;

const AddUserPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [addUser, { isLoading, isSuccess, data, isError }] =
    useAddUserMutation();
  const [isActive, setActive] = useState<boolean>(false);
  const [formIndex, setFormIndex] = useState<number>(0);
  let latitude = "0";
  let longitude = "0";
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitted, isSubmitSuccessful },
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
          lat: latitude,
          long: longitude,
        },
      },
      phone: "",
    },
  });

  useEffect(() => {
    if (isValid && isSubmitSuccessful) {
      setIsDisabled(false);
    } else if (!isValid && isSubmitted && !isSubmitSuccessful) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isValid, isSubmitSuccessful, isSubmitted]);

  useEffect(() => {
    if (isSuccess || isError) {
      setActive(true);
    }
  }, [data, isSuccess, isError]);

  const onSubmit: SubmitHandler<formSchemaType> = (data: formSchemaType) => {
    addUser(data);
    reset();
  };
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position) {
        longitude = `${position.coords.longitude}`;
        latitude = `${position.coords.latitude}`;
        setValue("address.geolocation.lat", latitude);
        setValue("address.geolocation.long", longitude);
      }
    });
  };
  getLocation();

  if (isLoading) {
    return <Spinner />;
  }

  const prevSlide = () => {
    if (formIndex > 0) {
      setFormIndex((formIndex) => formIndex - 1);
    }
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormIndex((formIndex) => formIndex + 1);
  };

  const closeWindow = () => {
    setActive(false);
  };

  return (
    <div className="form__container">
      <h2 className="title">Create User</h2>
      <div className="form__block">
        <p className="steps">
          <button className="prev__step" onClick={prevSlide}></button>
          Step {formIndex + 1} from {MAX_INDEX}
        </p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {formIndex === 0 && <UserInfo register={register} errors={errors} />}
          {formIndex === 1 && (
            <PersonalInfo register={register} errors={errors} />
          )}
          {formIndex === 2 && (
            <AddressInfo register={register} errors={errors} />
          )}
          {formIndex < 2 ? (
            <button
              type="button"
              className="submit"
              onClick={(e) => nextSlide(e)}
            >
              Next button
            </button>
          ) : (
            <button type="submit" className="submit" disabled={isDisabled}>
              Submit
            </button>
          )}
        </form>
      </div>
      <ModalWindow isActive={isActive} closeWindow={closeWindow}>
        {isError && <p className="window__message">Something went wrong!!!</p>}
        {isSuccess && data && (
          <p className="window__message">
            User was created successfully! User id:
            <strong>{data.id}</strong>
          </p>
        )}
      </ModalWindow>
    </div>
  );
};

export default AddUserPage;
