import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { IUserData } from "../../types/types";

const initialState = {
  isLogin: false,
  isRegistration: false,
  errors: {},
  usersCollection: [{} as IUserData],
  searchValue: "",
  filteredUsers: [],
  selectedValue: "",
  newUser: {} as IUserData,
  usersCounter: 0,
  formOpen: false,
};

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoadingAuth(state, { payload }) {
      state.isLogin = payload;
    },
    setUsersCollection(state, { payload }) {
      const users = JSON.stringify(payload);
      const newUser = JSON.parse(localStorage.getItem("newUser") as string);
      const collection = JSON.parse(localStorage.getItem("users") as string);
      if (newUser) {
        state.usersCollection = collection;
      } else {
        state.usersCollection = payload;
        localStorage.setItem("users", users);
      }
    },
    setSearchValue(state, { payload }) {
      state.searchValue = payload;
    },
    setFilteredUsers(state, { payload }) {
      state.filteredUsers = payload;
    },
    setSelectedData(state, { payload }) {
      state.selectedValue = payload;
    },
    setNewUser(state, action: PayloadAction<never | IUserData>) {
      state.newUser = action.payload;
      const array = JSON.parse(localStorage.getItem("users") as string);
      const usersArray = [...array];
      state.newUser.id = usersArray.length + 1;
      usersArray.push(state.newUser);
      state.usersCollection = usersArray;
      localStorage.setItem("users", JSON.stringify(usersArray));
      localStorage.setItem("newUser", JSON.stringify(state.newUser));
    },
    setUsersCounter(state, { payload }) {
      state.usersCounter = payload;
    },
    changeFormOpen(state, { payload }) {
      state.formOpen = payload;
    },
  },
});

export const usersSlice = UsersSlice.reducer;
export const {
  setLoadingAuth,
  setUsersCollection,
  setSearchValue,
  setFilteredUsers,
  setSelectedData,
  setNewUser,
  setUsersCounter,
  changeFormOpen,
} = UsersSlice.actions;

export const setUsersCollectionFetch = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoadingAuth(true));
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    dispatch(setUsersCollection(resp.data));
  } catch (err) {
  } finally {
    dispatch(setLoadingAuth(false));
  }
};

export const setNewUserFetch =
  (newUser: IUserData) => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingAuth(true));
      const resp: AxiosResponse<IUserData> = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
      );
      dispatch(setNewUser(resp.data));
      return resp.status;
    } catch (err) {
    } finally {
      dispatch(setLoadingAuth(false));
    }
  };
