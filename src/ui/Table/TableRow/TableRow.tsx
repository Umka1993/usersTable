import React, { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../core/redux/hooks/redux";
import {
  setFilteredUsers,
  setUsersCollectionFetch,
  setUsersCounter,
} from "../../../reduxModule/users/usersSlice";
import { RootState } from "../../../core/redux/store";
import { IUserData } from "../../../types/types";
import { Row } from "./Row/Row";

export const TableRow = (): JSX.Element => {
  const { usersCollection, searchValue, newUser } = useAppSelector(
    (state: RootState) => state.users
  );
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<IUserData[]>([]);
  useEffect(() => {
    dispatch(setUsersCollectionFetch());
  }, []);

  useEffect(() => {
    if (usersCollection.length > 1) {
      setUsers(usersCollection);
    }
  }, [usersCollection]);

  const filteredUsers = users.filter((user: IUserData) => {
    return user.name
      .toString()
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });
  dispatch(setUsersCounter(filteredUsers.length));

  useEffect(() => {
    dispatch(setFilteredUsers(filteredUsers));
  }, [dispatch]);

  const user = filteredUsers.map((user: IUserData) => {
    return <Row user={user} key={user.id} />;
  });
  return <>{user}</>;
};
