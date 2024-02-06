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
    <div className="flex px-2 py-2 flex-col items-center p-2 bg-black w-full h-[100vh] rounded-md sm:mt-3 sm:ml-7 sm:w-[500px] sm:h-[500px]">
      <header className="bg-[#7ecee9] rounded-md w-full text-white flex items-center justify-center gap-4 py-3 px-">
        <h3 className="text-2xl">All Contacts</h3>
        <GoPlusCircle className="text-2xl" onClick={setToggle} />
      </header>
      <input
        type="search"
        id="search"
        className="px-2 py-1 mt-3 rounded-md"
        placeholder="Search Contact"
        onChange={(e) => dispatch(searchContact(e.target.value))}
      />
      <AllContactList setToggle={setToggle} />
    </div>
  );
};

export default AllContacts;
