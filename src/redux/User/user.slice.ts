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
    /*  loadRaza: (state, action) => {
       if (action.payload != null) {
         if (action.payload.razas && action.payload.razas.length > 0) {
           state.razas = action.payload.razas;
         }
       }
     }, */
  },
});

export const { saveUser/* , loadRaza  */ } = userSlice.actions;
export default userSlice.reducer;
