import React from "react";
import s from "./row.module.scss";
import { IUserData } from "../../../../types/types";

export const Row = ({ user, key }: { user: IUserData; key: number }) => {
  return (
    <div className={s.row} key={key}>
      <ul>
        <li className={s.id}>{user.id}</li>
        <li>{user.name}</li>
        <li>3085 Frami Meadows</li>
        <li>{user.address.street}</li>
        <li>Andre Armstrong </li>
        <li className={s.networkStatus}>
          <span>online</span>
        </li>
        <li></li>
      </ul>
    </div>
  );
};
