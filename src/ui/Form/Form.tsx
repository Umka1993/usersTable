import React from "react";
import s from "./form.module.scss";
import { useForm } from "react-hook-form";
import { INewUser, IUserData } from "../../types/types";
import { useAppDispatch } from "../../core/redux/hooks/redux";
import {
  changeFormOpen,
  setNewUserFetch,
} from "../../reduxModule/users/usersSlice";

export const Form = () => {
  const { register, handleSubmit } = useForm<INewUser>();
  const dispatch = useAppDispatch();

  const onSubmit = (data: INewUser) => {
    const valuesData = Object.values(data);
    const newData = valuesData.filter((i) => i !== "");
    if (newData.length) {
      const newId = Number(new Date().getTime());
      const newUser: IUserData = {
        id: Number(data.id) ? Number(data.id) : newId,
        name: data.Client ? data.Client : "-",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: data.Address ? data.Address : "-",
          suite: data.Adress ? data.Adress : "-",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      };
      dispatch(setNewUserFetch(newUser)).then((status) => {
        if (status === 201) {
          dispatch(changeFormOpen(false));
        }
      });
    }
  };

  return (
    <div className={s.block} onSubmit={handleSubmit(onSubmit)}>
      <form>
        <ul>
          <li>
            <div className={s.inputWrap}>
              <input
                {...register("id")}
                id={"id"}
                type="text"
                placeholder={"ID"}
                className={s.id}
              />
            </div>
          </li>
          <li>
            <div className={s.inputWrap}>
              <input
                {...register("Client")}
                id={"Client"}
                type="text"
                placeholder={"Client"}
              />
            </div>
          </li>
          <li>
            <div className={s.inputWrap}>
              <input
                {...register("Adress")}
                id={"Address"}
                type="text"
                placeholder={"Adress"}
              />
            </div>
          </li>
          <li>
            {" "}
            <div className={s.inputWrap}>
              <input
                {...register("Address")}
                id={"Adress"}
                type="text"
                placeholder={"Adress"}
              />
            </div>
          </li>
          <li>
            <div className={s.inputWrap}>
              <input
                {...register("Courier")}
                id={"Courier"}
                type="text"
                placeholder={"Courier"}
              />
            </div>
          </li>

          <li className={s.formButton}>
            <button>Add</button>
          </li>
        </ul>
      </form>
    </div>
  );
};
