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

const AllContactListItem = ({ data, setToggle, i }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    setToggle();
    dispatch(editContact(data));
  };

  return (
    <li className="bg-white px-6 py-3 flex w-full rounded-md justify-between mt-2 items-center">
      {i + 1}
      <div className="flex items-center justify-between w-[90%]">
        <div className="flex items-center justify-between gap-3">
          <CgProfile className="text-5xl" />
          <h3>
            {data.name} <br />
            {data.mobile}
          </h3>
        </div>
        <div className="flex items-center justify-between gap-5">
          <IoEyeSharp
            className="text-2xl"
            onClick={() => dispatch(showData(data))}
          />
          <AiFillDelete
            className="text-2xl"
            onClick={() => dispatch(deleteContact(data.id))}
          />
          <MdModeEditOutline className="text-2xl" onClick={handleEdit} />
        </div>
      </div>
    </li>
  );
};

export default AllContactListItem;
