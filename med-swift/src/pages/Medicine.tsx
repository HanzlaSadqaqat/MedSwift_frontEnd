import {
  faCalendar,
  faCapsules,
  faDollar,
  faFile,
  faInstitution,
  faPlusMinus,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBar } from "../components/Dashboard/SideBar";

export const Medicine = () => {
  const createListing = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <SideBar>
      <div className="border flex justify-center w-full h-full items-center">
        <div className="w-9/12 h-4/5 shadow-xl rounded border flex flex-col gap-5 p-5 items-center">
          <div className="font-bold text-3xl text-blue-500">
            Medicine Listing
          </div>
          <form className="gap-10 flex flex-col">
            <div className="gap-5 grid grid-flow-row grid-cols-2">
              <div className="relative flex flex-col justify-between">
                <input
                  type="text"
                  className="border-2 pl-10 w-72 border-black-300 p-1  max-w-3xl rounded"
                  placeholder="Medicine Name"
                  required
                />
                <FontAwesomeIcon
                  icon={faCapsules}
                  className="absolute left-3 top-2 text-gray-400"
                />
              </div>
              <div className="relative flex flex-col justify-between">
                <input
                  type="text"
                  className="border-2 pl-10 w-72 border-black-300 p-1  max-w-3xl rounded"
                  placeholder="Medicine Weight"
                  required
                />
                <FontAwesomeIcon
                  icon={faWeight}
                  className="absolute left-3 top-2 text-gray-400"
                />
              </div>
              <div className="relative flex flex-col justify-center">
                <div>Expire Date:</div>
                <input
                  type="date"
                  className="border-2 pl-10 w-44 right-0 absolute border-black-300 p-1  max-w-3xl text-gray-500 rounded"
                  placeholder="Expire Date"
                  required
                />
              </div>

              <div className="flex gap-20 items-center">
                Availability
                <input type="checkbox" />
              </div>
              <div className="relative flex flex-col justify-between">
                <input
                  type="number"
                  className="border-2 pl-10 w-72 border-black-300 p-1  max-w-3xl rounded"
                  placeholder="Price"
                  required
                />
                <FontAwesomeIcon
                  icon={faDollar}
                  className="absolute left-3 top-2 text-gray-400"
                />
              </div>
              <div className="relative flex flex-col justify-between">
                <input
                  type="number"
                  className="border-2 pl-10 w-72 border-black-300 p-1  max-w-3xl rounded"
                  placeholder="Quantity"
                  required
                />
                <FontAwesomeIcon
                  icon={faPlusMinus}
                  className="absolute left-3 top-2 text-gray-400"
                />
              </div>
              <div className="relative flex flex-col justify-between">
                <textarea
                  rows={5}
                  className="border-2 pl-10 w-72 border-black-300 p-1  max-w-3xl text-gray-500 rounded"
                  placeholder="Dose Instructions"
                  required
                />
                <FontAwesomeIcon
                  icon={faInstitution}
                  className="absolute left-3 top-2 text-gray-400"
                />
              </div>
              <div className="relative flex flex-col justify-between">
                <textarea
                  rows={5}
                  className="border-2 pl-10 w-72 border-black-300 p-1  max-w-3xl text-gray-500 rounded"
                  placeholder="Description"
                  required
                />
                <FontAwesomeIcon
                  icon={faFile}
                  className="absolute left-3 top-2 text-gray-400"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="border-2 p-1 w-72 relative top-1 hover:bg-secondary transition duration-200 ease-out hover:ease-in hover:text-white font-bold"
                onClick={createListing}
              >
                Create Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </SideBar>
  );
};
