import { createSlice } from "@reduxjs/toolkit";
import { MascotaState, initialState } from "./mascotas.state";

export const mascotaSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadMascotas: (state: MascotaState, action) => {
            if (action.payload != null) {
                state.mascotas = action.payload;
            }
        },
        guardarMascota: (state: MascotaState, action) => {
            const mascota = action.payload;
            state.mascotas.push(mascota);
        },
        changeMascotaEstado: (state: MascotaState, action) => {
            const { mascotaId, nuevoEstado } = action.payload;
            const mascotaIndex = state.mascotas.findIndex(
                (mascota) => mascota.idMascota === mascotaId
            );
            if (mascotaIndex !== -1) {
                state.mascotas[mascotaIndex].estado = nuevoEstado;
            }
        },
    },
});

export const { loadMascotas, changeMascotaEstado, guardarMascota } = mascotaSlice.actions;
export default mascotaSlice.reducer;
