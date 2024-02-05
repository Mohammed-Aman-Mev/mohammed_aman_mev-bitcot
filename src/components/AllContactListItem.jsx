import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillDelete } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";

const AllContactListItem = ({ data }) => {
  return (
    <li className="bg-white flex">
      <CgProfile />
      {data.name} <br />
      {data.number}
      <IoEyeSharp />
      <AiFillDelete />
      <MdModeEditOutline />
    </li>
  );
};

export default AllContactListItem;
