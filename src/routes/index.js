import Login from "containers/shared/Login/Login";
import Signup from "containers/shared/Signup/Signup";

export const userRoutes = [
  {
    path: "/Login",
    component: Login,
    exact: true,
  },
  {
    path: "/Signup",
    component: Signup,
    exact: true,
  },
];
