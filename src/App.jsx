import React, { useState } from "react";
import AllContacts from "./components/AllContacts";
import AddContactForm from "./components/AddContactForm";
import { useSelector } from "react-redux";

const App = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const setToggle = () => {
    setToggleForm((bool) => !bool);
  };

  return (
    <>
      <AllContacts toggleForm={toggleForm} setToggle={setToggle} />
      <AddContactForm toggleForm={toggleForm} setToggle={setToggle} />
    </>
  );
};

export default App;
