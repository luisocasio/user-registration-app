import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLoginReducer(state) {
      state.login = true;
    },
    userLogOutReducer(state) {
      state.login = false;
    },
  },
});

//
export const { userLoginReducer, userLogOutReducer } = loginSlice.actions;

export default loginSlice.reducer;
