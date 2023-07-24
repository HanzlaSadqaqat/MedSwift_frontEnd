import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContextData } from "../../context/AppContext";
// import Rating from "./Rating";
interface cardProp {
  children: React.ReactNode;
}
export const Card: React.FC<cardProp> = (props: cardProp) => {
  const { setAddProduct } = useContext(AppContextData);
  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddProduct!((count) => count + 1);
  };
  return (
    <div className="">
      <div className="CARDS">
        <Link
          to="/product/details"
          className="border w-1/4 p-4 flex flex-col gap-5 shadow-sm rounded hover:shadow-xl m-10"
        >
          <img src="../../public/images/background.jpg" className="" alt="" />
          <div className="Project_Name font-bold text-xl">
            Lorem ipsum dolor sit
          </div>
          <div className="Rating_stars ">*****</div>
          <div>Price: 500$</div>
          <div className="flex gap-3 justify-end">
            <button
              onClick={addToCart}
              className="px-4 w-2/6 flex justify-center py-2 bg-blue-400 rounded hover:bg-blue-500 transition duration-200 text-white font-bold gap-2 items-center"
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Add
            </button>
            <Link
              to="/buy/now"
              className="px-4 py-2 w-2/6 bg-green-400 rounded hover:bg-green-500 transition duration-200 text-white font-bold"
            >
              Buy Now
            </Link>
          </div>
        </Link>
      </div>

      <div>{props.children}</div>
    </div>
  );
};
