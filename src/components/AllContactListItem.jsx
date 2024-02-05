import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillDelete } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  editContact,
  showData,
} from "../feature/redux/contactSlice";

const AllContactListItem = ({ data, setToggle }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    setToggle();
    dispatch(editContact(data));
  };

  return (
    <li className="bg-white flex w-full justify-between mt-2">
      <CgProfile />
      {data.name} <br />
      {data.number}
      <IoEyeSharp onClick={() => dispatch(showData(data))} />
      <AiFillDelete onClick={() => dispatch(deleteContact(data.id))} />
      <MdModeEditOutline onClick={handleEdit} />
    </li>
  );
};

export default AllContactListItem;
