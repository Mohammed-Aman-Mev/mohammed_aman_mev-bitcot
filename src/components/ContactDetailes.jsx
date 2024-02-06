import React from "react";
import { IoClose } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { removeShowData } from "../feature/redux/contactSlice";

const ContactDetailes = ({}) => {
  const data = useSelector((state) => state.contact.show);
  const dispatch = useDispatch();
  const setDetail = () => {
    dispatch(removeShowData());
  };
  return (
    <div
      className={
        data
          ? "w-full h-[100vh] absolute flex items-center justify-center top-0 bg-neutral-800 bg-opacity-50"
          : "hidden"
      }
    >
      <div className="flex flex-col items-center rounded-md p-4 sm:w-[400px]">
        <div className="bg-white w-full">
          <div className="flex items-center px-4 py-2 justify-between w-full border-b-2">
            <h3 className="text-gray-400 text-xl">Contact Details</h3>
            <IoClose className="text-xl text-gray-400" onClick={setDetail} />
          </div>
        </div>
        <div className="bg-[#eff8ff] w-full p-3">
          <div className="bg-white w-full rounded-md flex items-center justify-center">
            <div className="flex flex-col items-end">
              <h3 className="font-semibold">Name: </h3>
              <h3 className="font-semibold">Email: </h3>
              <h3 className="font-semibold">Number: </h3>
              <h3 className="font-semibold">Address: </h3>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-semibold"> -{data.name}</h3>
              <h3 className="font-semibold"> -{data.email}</h3>
              <h3 className="font-semibold"> -{data.mobile}</h3>
              <h3 className="font-semibold"> -{data.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailes;
