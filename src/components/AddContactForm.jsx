import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  createContact,
  editContact,
  updateContact,
} from "../feature/redux/contactSlice";

const AddContactForm = ({ toggleForm, setToggle }) => {
  const editContactState = useSelector(
    (state) => state.contact.editContactState
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const handleClose = () => {
    dispatch(editContact());
    setToggle();
  };

  const resetForm = () => {
    setFormData({
      id: editContactState.isEdit
        ? editContactState.data.id
        : crypto.randomUUID(),
      name: "",
      email: "",
      mobile: "",
      address: "",
    });
  };

  const handleState = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editContactState.isEdit) dispatch(updateContact(formData));
    else dispatch(createContact({ ...formData, id: crypto.randomUUID() }));
    setFormData({
      name: "",
      email: "",
      mobile: "",
      address: "",
    });
    setToggle();
  };

  useEffect(() => {
    if (editContactState.isEdit) {
      setFormData({
        id: editContactState.data.id,
        name: editContactState.data.name,
        email: editContactState.data.email,
        mobile: editContactState.data.mobile,
        address: editContactState.data.address,
      });
    }
  }, [editContactState]);

  return (
    <div
      className={
        toggleForm
          ? "w-full h-[100vh] absolute flex items-center justify-center top-0 bg-neutral-800 bg-opacity-50"
          : "hidden"
      }
    >
      <div className="bg-white flex flex-col rounded-md w-[80%] top-6 md:left-[500px] sm:w-[350px]">
        <div className="flex justify-between w-full border-b-2 px-4 py-2">
          <h2 className="text-gray-400 text-xl ">
            {editContactState.isEdit ? "Edit Contact" : "Add Contact"}
          </h2>
          <IoClose className="text-2xl text-gray-400" onClick={handleClose} />
        </div>
        <form
          className="flex flex-col items-center py-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col">
            <label>Name:</label>
            <input
              className="border-[2px] lg:w-[90%] border-black rounded-sm px-2 py-1"
              type="text"
              placeholder="Enter Your Name"
              required
              name="name"
              value={formData.name}
              onChange={(e) => handleState(e)}
            />
          </div>
          <div className="flex flex-col">
            <label>Email:</label>

            <input
              className="border-[2px] lg:w-[90%] border-black rounded-sm px-2 py-1"
              type="email"
              placeholder="Enter Your Email"
              required
              name="email"
              value={formData.email}
              onChange={(e) => handleState(e)}
            />
          </div>
          <div className="flex flex-col">
            <label>PhoneNumber:</label>

            <input
              className="border-[2px] lg:w-[90%] border-black rounded-sm px-2 py-1"
              type="number"
              placeholder="Enter Your Number"
              required
              name="mobile"
              value={formData.mobile}
              onChange={(e) => handleState(e)}
            />
          </div>
          <div className="flex flex-col">
            <label>Address:</label>

            <input
              className="border-[2px] lg:w-[90%] border-black rounded-sm px-2 py-1"
              type="text"
              placeholder="Enter Your Address"
              required
              name="address"
              value={formData.address}
              onChange={(e) => handleState(e)}
            />
          </div>
          <div className="flex gap-7 mt-3">
            <button
              type="submit"
              className="bg-[#006ef7] text-white rounded-md px-2 py-0.5"
            >
              {editContactState.isEdit ? "Update" : "Submit"}
            </button>
            <button
              className="bg-black text-white rounded-md px-2 py-0.5"
              type="reset"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContactForm;
