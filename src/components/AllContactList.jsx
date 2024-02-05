import React from "react";
import AllContactListItem from "./AllContactListItem";
import { useSelector } from "react-redux";

const AllContactList = ({ setToggle }) => {
  const allData = useSelector((state) => state.contact.allContacts);
  const searchData = useSelector((state) => state.contact.searchData);

  return (
    <ul className="w-full">
      {searchData.length === 0
        ? allData.map((data) => (
            <AllContactListItem
              key={data.id}
              data={data}
              setToggle={setToggle}
            />
          ))
        : searchData.map((data) => (
            <AllContactListItem
              key={data.id}
              data={data}
              setToggle={setToggle}
            />
          ))}
    </ul>
  );
};

export default AllContactList;
