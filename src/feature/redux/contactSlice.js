import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allContacts: [],
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
