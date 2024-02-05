import React from "react";
import AllContactListItem from "./AllContactListItem";
import { useSelector } from "react-redux";

const AllContactList = ({ setToggle }) => {
  const allData = useSelector((state) => state.contact.allContacts);

  return (
    <ul className="w-full">
      {allData.map((data) => (
        <AllContactListItem
          key={crypto.randomUUID()}
          data={data}
          setToggle={setToggle}
        />
      ))}
    </ul>
  );
};

export default AllContactList;
