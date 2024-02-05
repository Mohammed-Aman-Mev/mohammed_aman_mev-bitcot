import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allContacts: [
    {
      name: "John Doe",
      email: "john@example.com",
      id: 1,
      address: "123 Main Street, Cityville",
      number: "5",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      id: 2,
      address: "456 Oak Avenue, Townsville",
      number: "58",
    },
    {
      name: "Bob Johnson",
      email: "bob@example.com",
      id: 3,
      address: "789 Elm Road, Villagetown",
      number: "12",
    },
    {
      name: "Alice Brown",
      email: "alice@example.com",
      id: 4,
      address: "101 Pine Lane, Hamletville",
      number: "756",
    },
    {
      name: "Chris Davis",
      email: "chris@example.com",
      id: 5,
      address: "202 Cedar Street, Suburbia",
      number: "890",
    },
  ],
  editContactState: { data: "", isEdit: false },
  show: "",
  searchData: [],
};

export const allContactSlice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {
    createContact: (state, action) => {
      state.allContacts = [...state.allContacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.allContacts = state.allContacts.filter((i) => {
        if (i.id !== action.payload) {
          return i;
        }
      });
      state.searchData = state.searchData.filter((i) => {
        if (i.id !== action.payload) {
          return i;
        }
      });
    },
    editContact: (state, action) => {
      if (action.payload) {
        state.editContactState = { data: action.payload, isEdit: true };
      } else {
        state.editContactState = { data: "", isEdit: false };
      }
    },
    updateContact: (state, action) => {
      state.allContacts = state.allContacts.map((i) => {
        if (i.id === action.payload.id) {
          return action.payload;
        } else {
          return i;
        }
      });
      state.searchData = state.searchData.map((i) => {
        if (i.id === action.payload.id) {
          return action.payload;
        } else {
          return i;
        }
      });
      state.editContactState = { data: "", isEdit: false };
    },

    showData: (state, action) => {
      state.show = action.payload;
    },
    removeShowData: (state, action) => {
      state.show = "";
    },
    searchContact: (state, action) => {
      if (action.payload) {
        state.searchData = state.allContacts.filter((data) => {
          const [a, b] = data.name.split(" ");
          if (
            a.toLowerCase().includes(action.payload) ||
            b.toLowerCase().includes(action.payload) ||
            data.number.includes(action.payload)
          ) {
            return data;
          } else {
            return;
          }
        });
      } else {
        state.searchData = [];
      }
    },
  },
});

export const {
  createContact,
  deleteContact,
  editContact,
  updateContact,
  showData,
  removeShowData,
  searchContact,
} = allContactSlice.actions;
export default allContactSlice.reducer;
