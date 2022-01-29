import React from "react";
import { Input } from "../../ui/Input/Input";
import Title from "../../ui/tableTitle/Title";
import { Table } from "../../ui/Table/Table";
import s from "./usersPage.module.scss";

export const UsersPage = () => {
  return (
    <div className={s.usersPageBlock}>
      <div className="container">
        <Input />
        <Title />
        <Table />
      </div>
    </div>
  );
};
