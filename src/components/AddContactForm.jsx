import React from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const AddContactForm = ({ toggleForm, setToggle }) => {
  const editContact = useSelector((state) => state.contact.editContact);
  return (
    <div
      className={
        toggleForm
          ? "w-full h-[100vh] absolute flex items-center justify-center top-0 bg-neutral-800 bg-transparent bg-opacity-50"
          : "hidden"
      }
    >
      <div className="bg-white rounded-md sm:w-[350px]">
        <div className="flex justify-between w-full border-b-2">
          {editContact.isEdit ? "Edit Contact" : "Add Contact"}
          <IoClose onClick={setToggle} />
        </div>
        <form className="flex flex-col">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="tel" placeholder="Enter Your Number" />
          <input type="text" placeholder="Enter Your Address" />
          <button type="submit">
            {editContact.isEdit ? "Update" : "Submit"}
          </button>
          <button type="reset">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default AddContactForm;
