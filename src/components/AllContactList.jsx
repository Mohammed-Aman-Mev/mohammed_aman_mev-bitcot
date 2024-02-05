import React from "react";
import AllContactListItem from "./AllContactListItem";
import { useSelector } from "react-redux";

const AllContactList = () => {
  const allData = useSelector((state) => state.contact.allContacts);

  return (
    <ul>
      {allData.map((data) => (
        <AllContactListItem key={crypto.randomUUID()} data={data} />
      ))}
    </ul>
  );
};

export default AllContactList;
