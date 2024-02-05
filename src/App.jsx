import React, { useState } from "react";
import AllContacts from "./components/AllContacts";
import AddContactForm from "./components/AddContactForm";
import { useSelector } from "react-redux";
import ContactDetailes from "./components/ContactDetailes";

const App = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleDetail, setToggleDetail] = useState(false);

  const setToggle = () => {
    setToggleForm((bool) => !bool);
  };
  const setDetail = () => {
    setToggleForm((bool) => !bool);
  };

  return (
    <>
      <AllContacts toggleForm={toggleForm} setToggle={setToggle} />
      <AddContactForm toggleForm={toggleForm} setToggle={setToggle} />
      <ContactDetailes setDetail={setDetail} toggleDetail={toggleDetail} />
    </>
  );
};

export default App;
