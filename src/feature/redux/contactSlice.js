import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../service/getContact";

const initialState = {
  allContacts: [],
  editContactState: { data: "", isEdit: false },
  show: "",
  searchData: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
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
        console.log(action.payload);
        state.searchData = state.allContacts.filter((data) => {
          let [a, b] = data.name.split(" ");
          b = b ? b.toLowerCase() : null;
          a = a.toLowerCase();
          if (a.includes(action.payload.toLowerCase())) {
            return data;
          } else if (b ? b.includes(action.payload.toLowerCase()) : null) {
            return data;
          } else if (data.mobile.includes(action.payload)) {
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
  extraReducers: (builder) => {
    builder
      .addCase(get_Contact_Data.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(get_Contact_Data.fulfilled, (state, action) => {
        state.isLoading = false;

        state.allContacts = action.payload;
      })
      .addCase(get_Contact_Data.rejected, (state, action) => {
        state.isLoading = false;

        state.allContacts = [];
        state.isError = true;
        state.errorMessage = action.payload;
      });
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

export const get_Contact_Data = createAsyncThunk(
  "GET_CONTACT_DATA",
  async () => {
    try {
      return await getData();
    } catch (error) {
      const message = error.response.data.message;
      alert(error.message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
