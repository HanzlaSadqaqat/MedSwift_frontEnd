import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContextData } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCartShopping,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface NavbarProp {
  children: React.ReactNode;
}

export const Navbar: React.FC<NavbarProp> = (props: NavbarProp) => {
  const { loggedIn, setLoggedIn, addProduct } = useContext(AppContextData);
  const [isToggle, setIsToggle] = useState(false);

  const toggleOptions = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div>
      <div className="h-16 border bg-white m-0 p-0 flex shadow-md justify-center">
        <div className="flex justify-between w-11/12">
          <Link to="/" className="MEDSWIFT_LOGO flex items-center">
            <img
              src="../../public/images/medSwift logo.png"
              alt=""
              className="h-12"
            />
            <div className="text-green-500 font-extrabold text-2xl mx-1 flex items-center">
              MED<span className="text-blue-500">SWIFT</span>
            </div>
          </Link>

          <div className="flex gap-10 items-center">
            {loggedIn ? (
              <div className=" relative">
                <div className="flex items-center mr-20 ">
                  <div className="p-5">Hi, Hanzla Sadaqat</div>
                  <img
                    src="../../public/images/user_profile.png"
                    className="h-12 bg-slate-300 p-1 rounded-full hover:scale-105"
                    alt=""
                    onClick={toggleOptions}
                  />
                </div>
                {isToggle && (
                  <div className="transition ease-out duration-300 m-2 top-20 absolute -right-5 w-full">
                    <div className="list-none pl-6 relative left-24 py-5 w-3/5 border shadow-2xl rounded-lg gap-4 flex flex-col bg-white">
                      <Link
                        to="dashboard/profile"
                        className="flex gap-3 items-center"
                      >
                        <FontAwesomeIcon icon={faUser} className="h-5" />
                        <li>Profile</li>
                      </Link>
                      <div className="border-b w-4/5  border-gray-300" />
                      <Link to="/dashboard" className="flex gap-3 items-center">
                        <FontAwesomeIcon icon={faAddressBook} className="h-5" />
                        <li>My Account</li>
                      </Link>
                      <div className="border-b w-4/5 border-gray-300" />
                      <Link
                        to="/"
                        onClick={() => setLoggedIn!(false as boolean)}
                        className="flex gap-3 items-center"
                      >
                        <FontAwesomeIcon icon={faSignOut} className="h-5" />
                        <li>Log Out</li>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <div>
                  <Link to="/login">
                    <div className=" px-5 py-2 rounded-3xl my-3 hover:bg-slate-200 transition duration-200">
                      Log in
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/signup">
                    <div className="bg-gray-200 px-5 py-2 rounded-3xl my-3 hover:bg-slate-300 transition duration-200">
                      Sign up
                    </div>
                  </Link>
                </div>
              </div>
            )}

            <button className="relative flex bg-gray-200 text-gray-600  hover:bg-blue-400 hover:text-white  rounded-full text-2xl px-8 justify-between py-2  gap-3 items-center font-bold">
              <div className="relative border-r-2 border-gray-500 pr-5">
                <FontAwesomeIcon icon={faCartShopping} />
                <div className="absolute right-1 text-xs bg-yellow-400 text-white rounded-full w-5 flex items-center justify-center h-5 -top-3">
                  {addProduct}
                </div>
              </div>

              <div className="text-xl">$0</div>
            </button>
          </div>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};
