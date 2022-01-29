import { combineReducers } from "@reduxjs/toolkit";
import { usersSlice } from "../../reduxModule/users/usersSlice";

export const rootReducer = combineReducers({
  users: usersSlice,
});
