import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

export const useAppDispatch = (): ThunkDispatch<RootState, void, AnyAction> =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
