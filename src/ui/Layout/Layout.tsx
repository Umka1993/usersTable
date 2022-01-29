import s from "./layout.module.scss";
import { SideBar } from "../SideBar/SideBar";

export const Layout = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return (
    <div className={s.wrap}>
      <SideBar />
      {children}
    </div>
  );
};
