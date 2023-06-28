import { Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/Signup";
import { HomePage } from "../pages/HomePage";
import { VerificationCodePage } from "../pages/VerificationCodePage";

export const routes = (isLoggedIn: boolean) => {
  if (!isLoggedIn) {
    return [
      { path: "/", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/verification/:email", element: <VerificationCodePage /> },
      { path: "*", element: <Navigate to={"/"} /> },
    ];
  } else {
    return [
      { path: "/", element: <HomePage /> },
      { path: "*", element: <Navigate to={"/"} /> },
    ];
  }
};
