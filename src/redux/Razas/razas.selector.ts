import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { RazaState } from "./razas.state";

const razaState = (state: RootState) => state.razas;

export const razaSelector = createSelector(razaState, (state: RazaState) => {
    return state.razaSelected;
})

export const razasSelector = createSelector(razaState, (state: RazaState) => {
    return state.razas;
})