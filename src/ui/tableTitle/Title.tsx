import React from "react";
import s from "./title.module.scss";
import { useAppSelector } from "../../core/redux/hooks/redux";
import { RootState } from "../../core/redux/store";

const Title = (): JSX.Element => {
  const { usersCounter } = useAppSelector((state: RootState) => state.users);

  return (
    <div className={s.titleBlock}>
      <div className={s.titleRow}>
        <h2>Packages</h2>
        <span className={s.counter}>{`${usersCounter} entries`}</span>
      </div>
    </div>
  );
};

export default Title;
