import React from "react";
import { GoPlusCircle } from "react-icons/go";
import AllContactList from "./AllContactList";

const AllContacts = ({ toggleForm, setToggle }) => {
  return (
    <div className="flex flex-col items-center p-2 bg-black w-full h-[100vh] rounded-md sm:mt-3 sm:ml-7 sm:w-[500px] sm:h-[500px]">
      <header className="bg-[#7ecee9] rounded-md w-full text-white flex items-center py-3 px-">
        All Contacts
        <GoPlusCircle onClick={setToggle} />
      </header>
      <input type="text" id="search" />
      <AllContactList setToggle={setToggle} />
    </div>
  );
};

export default AllContacts;
