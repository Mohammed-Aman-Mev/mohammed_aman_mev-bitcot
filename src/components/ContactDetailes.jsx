import React from "react";
import { IoClose } from "react-icons/io5";

import { useSelector } from "react-redux";

const ContactDetailes = ({ setDetail, toggleDetail }) => {
  const data = useSelector((state) => state.contact.show);

  return (
    <div
      className={
        toggleDetail
          ? "w-full h-[100vh] absolute flex items-center justify-center top-0 bg-neutral-800 bg-transparent bg-opacity-50"
          : "hidden"
      }
    >
      <div className="bg-white rounded-md sm:w-[350px]">
        <div className="flex justify-between w-full border-b-2">
          <IoClose />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        </div>
      </div>
    </div>
  );
};

export default ContactDetailes;
