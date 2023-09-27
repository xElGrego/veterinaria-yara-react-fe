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
    loadEmpresa: (state, action) => {
      if (action.payload != null) {
        if (action.payload.empresas && action.payload.empresas.length > 0) {
          state.empresas = action.payload.empresas;
        }
      }
    },
  },
});

export const { saveUser, loadEmpresa } = userSlice.actions;
export default userSlice.reducer;
