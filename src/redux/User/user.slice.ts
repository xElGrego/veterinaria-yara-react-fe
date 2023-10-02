import { createSlice } from "@reduxjs/toolkit";
import { UserState, initialState } from "./user.state";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state: UserState, action) => {
      const { nombres, apellidos, correo, token, rol } = action.payload;
      state.user = { ...state.user, nombres, apellidos, correo, token, rol };
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    loadMascotas: (state, action) => {
      if (action.payload != null) {
        state.mascotas = action.payload;
      }
    },
    guardarMascota: (state, action) => {
      const mascota = action.payload;
      state.mascotas.push(mascota);
    },
    changeMascotaEstado: (state, action) => {
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

export const { saveUser, loadMascotas, changeMascotaEstado, guardarMascota } = userSlice.actions;
export default userSlice.reducer;
