import React, { ChangeEvent, useEffect, useState } from "react";
import s from "./input.module.scss";
import { setSearchValue } from "../../reduxModule/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks/redux";
import { RootState } from "../../core/redux/store";

export const Input = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const { selectedValue } = useAppSelector((state: RootState) => state.users);
  const [isOpen, setIsOpen] = useState(false);

  const setInputValue = (data: string) => {
    setValue(data);
    dispatch(setSearchValue(data));

    if (!isOpen) {
      setIsOpen(!isOpen);
    }
    return data;
  };
  useEffect(() => {
    if (selectedValue !== value) {
      setValue(selectedValue);
      dispatch(setSearchValue(selectedValue));
      setIsOpen(!isOpen);
    }
  }, [selectedValue]);

  return (
    <div className={s.searchRow}>
      <div className={s.inputWrap}>
        <div className={s.imgBlock}></div>
        <input
          type={"text"}
          placeholder={"Search package, client or courier"}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const newValue = event.currentTarget.value;
            setInputValue(setInputValue(newValue));
          }}
          value={value}
        />
      </div>
    </div>
  );
};
