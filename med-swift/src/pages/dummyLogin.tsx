import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Login: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-100 to-blue-400 h-screen flex justify-center items-center">
        <div className="flex w-4/6 h-4/6 bg-white rounded">
          <div className="w-full bg-primary text-white rounded">
            <div className="flex justify-center">
              <img
                src="../../public/images/secondary.png"
                className=""
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex text-primary justify-center font-bold relative bottom-10 text-3xl right-3">
              Login
            </div>

            <div className="flex justify-center items-center w-full">
              <form action="" className="flex flex-col gap-y-5">
                <div className="relative flex flex-col justify-between">
                  <input
                    type="email"
                    className="border-2 pl-10 w-72 border-black-300 p-1  max-w-3xl"
                    placeholder="Email"
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-3 top-2 text-gray-400"
                  />
                </div>
                <div className="relative flex flex-col justify-between">
                  <input
                    type="password"
                    className="border-2 pl-10 border-black-300 w-72 p-1 max-w-3xl active:shadow-3xl"
                    placeholder="Password"
                  />
                  <FontAwesomeIcon
                    icon={faKey}
                    className="absolute left-3 top-2 text-gray-400"
                  />
                </div>
                <div className="relative left-44 text-sm bottom-4 ">
                  <Link
                    to="/"
                    className="underline hover:no-underline hover:text-primary transition"
                  >
                    Forget Password?
                  </Link>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="border-2 p-1 w-72 relative top-1 hover:bg-secondary transition duration-200 ease-out hover:ease-in hover:text-white font-bold"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="relative top-5">
              Don't have an account yet?
              <Link
                to="/signup"
                className="text-secondary hover:text-primary font-semibold"
              >
                {" Signup"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
