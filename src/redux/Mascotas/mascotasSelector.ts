import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { MascotaState } from "./mascotas.state";

const mascotasState = (state: RootState) => state.mascotas;


export const mascotasSelector = createSelector(mascotasState, (state: MascotaState) => {
    return state.mascotas;
});