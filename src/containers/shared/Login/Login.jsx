/* eslint-disable no-unused-vars */
import React from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { actLogin } from "./module/action";
import { useSelector } from "react-redux";

const content = {
  loginInputs: [
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ],
};

const schema = yup.object().shape({
  email: yup.string().required("Please enter your email!"),
  password: yup
    .string()
    .required("Please enter password!")
    .min(8, "Password must be at least 8 characters!"),
});
// .required();

export default function Login() {
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.userLoginReducer);

  console.log("login Test Selector", userLogin);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("onSubmit", data);
    dispatch(actLogin(data));
  };

  console.log(errors);

  return (
    <div className="login__form__container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.loginInputs.map((input, key) => {
          return (
            <div key={key}>
              <p className="login__form__p">
                <label>{input.label}</label>
              </p>
              <p>
                <input
                  name={input.name}
                  className="login__form__input"
                  type={input.type}
                  ref={register}
                />
              </p>
              <p className="login__form__message">
                {errors[input.name]?.message}
              </p>
            </div>
          );
        })}

        <button className="login__form__button" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
