import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { actSignup } from "./module/action";

const content = {
  signupInputs: [
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
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      type: "text",
    },
  ],
};

const schema = yup.object().shape({
  email: yup.string().required("Please enter your email!"),
  password: yup
    .string()
    .required("Please enter password!")
    .min(8, "Password must be at least 8 characters!"),
  name: yup.string().required("Please enter your name!"),
  phoneNumber: yup.string().required("Please enter your phone number!"),
});

export default function Signup() {
  const dispatch = useDispatch();

  const { userSignup } = useSelector((state) => state.userSignupReducer);

  console.log("userSignup", userSignup);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("onSubmit", data);
    dispatch(actSignup(data));
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.signupInputs.map((input, key) => {
          return (
            <div key={key}>
              <p className="">
                <label>{input.label}</label>
              </p>
              <p>
                <input
                  name={input.name}
                  className=""
                  type={input.type}
                  ref={register}
                />
              </p>
              <p className="">{errors[input.name]?.message}</p>
            </div>
          );
        })}

        <button className="" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
