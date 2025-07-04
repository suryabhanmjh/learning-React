import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./counterSlice";
const store = configureStore({
  reducer: {
    counter: myReducer,
  },
});