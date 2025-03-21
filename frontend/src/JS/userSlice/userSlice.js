import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const userlogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
});

// Initial State
const initialState = {
  user: null,
  status: null,
};

// Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // userRegister
      .addCase(userRegister.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.data.newUserToken;
        localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(userRegister.rejected, (state) => {
        state.status = "fail";
      })

      // userlogin
      .addCase(userlogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userlogin.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.data.user;
        localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(userlogin.rejected, (state) => {
        state.status = "fail";
         localStorage.removeItem("token");
      })

      // userCurrent
      .addCase(userCurrent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload?.data.user;
  localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(userCurrent.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
