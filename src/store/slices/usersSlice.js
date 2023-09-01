import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");
  return response.data;
});

export const makeUserLoggedIn = createAsyncThunk("check/login", async () => {
  const response = await axios.get("http://localhost:3005/users");

  return response.data;
});

export const addLoggedUserDetails = createAsyncThunk(
  "loggedUser/add",
  (userFound) => {
    const response = userFound;
    return response;
  }
);

// function isObjectEmpty(obj) {
//     return Object.keys(obj).length === 0;
// }

// const myObj = { name: 'asd' }

// console.log(isObjectEmpty(myObj));

export const registerNewUser = createAsyncThunk(
  "newUser/register",
  async (newUser) => {
    const response = await axios.post("http://localhost:3005/users", newUser);
    return response.data;
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loggedIn: false,
    loggedUser: {},
    loggedInMessege: false,
  },
  reducers: {
    logoutUser(state, action) {
      state.loggedIn = false;
    },
    removeLoggedUserDetails(state, action) {
      state.loggedUser = {};
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(makeUserLoggedIn.fulfilled, (state, action) => {
      state.loggedIn = true;
    });
    builder.addCase(addLoggedUserDetails.fulfilled, (state, action) => {
      state.loggedUser = action.payload;
    });
    builder.addCase(registerNewUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
  },
});
// export const { toggleUserLogIn, logInThisUser } = usersSlice.actions
export const { logoutUser, removeLoggedUserDetails } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
