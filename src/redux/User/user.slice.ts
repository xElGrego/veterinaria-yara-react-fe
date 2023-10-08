import { createSlice } from "@reduxjs/toolkit";
import { UserState, initialState } from "./user.state";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state: UserState, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state: UserState) => {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("toke");
    },
    loadUsuarios: (state: UserState, action) => {
      if (action.payload != null) {
        state.usuarios = action.payload;
      }
    },
    guardarUsuario: (state: UserState, action) => {
      const mascota = action.payload;
      state.usuarios.push(mascota);
    },
  },
});

export const { saveUser, logout, guardarUsuario, loadUsuarios } = userSlice.actions;
export default userSlice.reducer;
