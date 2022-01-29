import React, { useEffect, useState } from "react";
import s from "./table.module.scss";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableRow } from "./TableRow/TableRow";
import { Form } from "../Form/Form";
import { useAppSelector } from "../../core/redux/hooks/redux";

export const Table = () => {
  const { formOpen } = useAppSelector((state) => state.users);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(!open);
  }, [formOpen]);
  return (
    <div className={s.tableBlock}>
      <TableHeader />
      <TableRow />
      {open && <Form />}
    </div>
  );
};
