import React from "react";
import s from "./sideBar.module.scss";

export const SideBar = () => {
  return (
    <div className={s.sideBarBlock}>
      <div className={s.wrap}>
        <div className={s.logo}>
          <p>LO</p>
          <p>GO</p>
        </div>
      </div>
    </div>
  );
};
