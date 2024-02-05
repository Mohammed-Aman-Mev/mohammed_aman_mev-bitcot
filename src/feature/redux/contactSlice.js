import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allContacts: [
    {
      name: "Aman Mev",
      number: "9977656337",
      email: "aman@gmail.com",
      address: "jail road indore",
    },
    {
      name: "Aman2 Mev",
      number: "9977656337",
      email: "aman@gmail.com",
      address: "jail road indore",
    },
    {
      name: "Aman3 Mev",
      number: "9977656337",
      email: "aman@gmail.com",
      address: "jail road indore",
    },
  ],
  editContact: { data: "", isEdit: false },
};

export const allContactSlice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {
    createContact: (state, action) => {},
    deleteContact: (state, action) => {},
    editContact: (state, action) => {},
    updateContact: (state, action) => {},
  },
});

export const { createContact, deleteContact, editContact, updateContact } =
  allContactSlice.actions;
export default allContactSlice.reducer;
