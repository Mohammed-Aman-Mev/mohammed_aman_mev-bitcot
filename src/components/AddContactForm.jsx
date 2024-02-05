import React from "react";
import { IoClose } from "react-icons/io5";

const AddContactForm = ({ toggleForm, setToggle }) => {
  return (
    <div
      className={
        toggleForm
          ? "w-full h-[100vh] absolute flex items-center justify-center top-0 bg-neutral-800 bg-transparent bg-opacity-50"
          : "hidden"
      }
    >
      <div className="bg-white rounded-md xl:w-[350px] xl:h-[350]">
        <IoClose onClick={setToggle} />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus
        dolore nam consequuntur quis mollitia minima voluptatum tempore maxime
        praesentium recusa
      </div>
    </div>
  );
};

export default AddContactForm;
