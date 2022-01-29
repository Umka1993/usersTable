import React, { useEffect, useState } from "react";
import s from "./tableHeader.module.scss";
import { useAppDispatch } from "../../../core/redux/hooks/redux";
import { changeFormOpen } from "../../../reduxModule/users/usersSlice";

export const TableHeader = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const openForm = () => {
    dispatch(changeFormOpen(true));
  };

  return (
    <div className={s.tableRow}>
      <ul>
        <li className={s.id}>ID</li>
        <li>Client</li>
        <li>Pickup Address</li>
        <li>Dropoff Address</li>
        <li>Courier</li>
        <li className={s.networkStatus}>Status</li>
        <li className={s.button}>
          <button onClick={openForm}></button>
        </li>
      </ul>
    </div>
  );
};
