import React from "react";
import { GoPlusCircle } from "react-icons/go";
import AllContactList from "./AllContactList";
import { useDispatch } from "react-redux";
import { searchContact } from "../feature/redux/contactSlice";

const AllContacts = ({ toggleForm, setToggle }) => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    let a = e.target.value;

    dispatch(searchContact(a.toLowerCase()));
  };

  return (
    <div className="flex flex-col items-center p-2 bg-black w-full h-[100vh] rounded-md sm:mt-3 sm:ml-7 sm:w-[500px] sm:h-[500px]">
      <header className="bg-[#7ecee9] rounded-md w-full text-white flex items-center py-3 px-">
        All Contacts
        <GoPlusCircle onClick={setToggle} />
      </header>
      <input type="text" id="search" onChange={(e) => handleSearch(e)} />
      <AllContactList setToggle={setToggle} />
    </div>
  );
};

export default AllContacts;
