import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { UserState } from "./user.state";

const userState = (state: RootState) => state.user;

export const userSelector = createSelector(userState, (state: UserState) => {
  return state.user;
});
