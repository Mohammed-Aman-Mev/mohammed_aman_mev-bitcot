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
      <div className="bg-white rounded-md sm:w-[350px]">
        <div className="flex justify-between w-full border-b-2">
          <IoClose onClick={setDetail} />
          {data.name} <br />
          {data.email} <br />
          {data.mobile} <br />
          {data.address}
        </div>
      </div>
    </div>
  );
};

export default ContactDetailes;
