import { Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/Signup";
import { HomePage } from "../pages/HomePage";
import { VerificationCodePage } from "../pages/VerificationCodePage";
import { Medicine } from "../pages/Medicine";
import Dashboard from "../pages/Dashboard";

export const routes = (isLoggedIn: boolean) => {
  if (!isLoggedIn) {
    return [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/verification/:email", element: <VerificationCodePage /> },
      { path: "*", element: <Navigate to={"/"} /> },
      { path: "/", element: <HomePage /> },
    ];
  } else {
    return [
      { path: "/", element: <HomePage /> },
      { path: "/medicine", element: <Medicine /> },

      { path: "/dashboard", element: <Dashboard /> },
      { path: "*", element: <Navigate to={"/"} /> },
    ];
  }
};
