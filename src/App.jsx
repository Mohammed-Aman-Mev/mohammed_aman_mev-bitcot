import React, { useEffect, useState } from "react";
import AllContacts from "./components/AllContacts";
import AddContactForm from "./components/AddContactForm";
import { useDispatch, useSelector } from "react-redux";
import ContactDetailes from "./components/ContactDetailes";
import { getData } from "./feature/service/getContact";
import { get_Contact_Data } from "./feature/redux/contactSlice";

const App = () => {
  const dispatch = useDispatch();
  const [toggleForm, setToggleForm] = useState(false);

  const setToggle = () => {
    setToggleForm((bool) => !bool);
  };

  useEffect(() => {
    dispatch(get_Contact_Data());
  }, []);

  return (
    <>
      <AllContacts toggleForm={toggleForm} setToggle={setToggle} />
      <AddContactForm toggleForm={toggleForm} setToggle={setToggle} />
      <ContactDetailes />
    </>
  );
};

export default App;
