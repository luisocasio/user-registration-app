# Using Redux Toolkit

> File Structure

```
src
└─ app
	└─ store.jsx // takes reducers from features
└─ features
	└─ someSlice.jsx // hold redux logic for a specific feature
```

# Installation

- @reduxjs/toolkit
- react-redux

# Steps

- setup redux store which will take our reducers from our slice

```
import { configureStore } from "@reduxjs/toolkit";
import someReducer from "../features/someSlice";

export const store = configureStore({
	reducer: {
		reducer_name: someReducer,
	},
});
```

- define slice - creatSlice takes an object. That object has a name field,
  initialstate that reducer will use and and object called reducers

```
// main api function used to define redux logic
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
	login: false,
};

// create slice
const loginSlice = createSlice({
	// name slice
	name: "login",
	// bring in our initial state
	initialState,
	// define reducers
	reducers: {
	// reducers take state and action arguments
	// this is where the different types of logic and updates happen
		// login
		// logout
	},
});


export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;

export const selectLogin = (state) => state.login.value;
```
