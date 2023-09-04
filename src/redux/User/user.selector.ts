import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { UserState } from "./user.state";

const userState = (state: RootState) => state.user;

export const userSelector = createSelector(userState, (state: UserState) => {
  return state.user;
});

export const tokenSelector = createSelector(userState, (state: UserState) => {
  return state.user.token;
});

export const nombreSelector = createSelector(userState, (state: UserState) => {
  return state.user.nombres;
});
