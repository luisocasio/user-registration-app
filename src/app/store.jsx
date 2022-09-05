import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";

export const store = configureStore({
  reducer: {
    loggedIn: loginReducer,
  },
});
