import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { UserState } from "./user.state";

const userState = (state: RootState) => state.user;

export const userSelector = createSelector(userState, (state: UserState) => {
  return state.user;
});

export const idUsuarioSelector = createSelector(userState, (state: UserState) => {
  return state.user?.idUsuario;
});

export const tokenSelector = createSelector(userState, (state: UserState) => {
  return state.user!.token;
});

export const nombresSelector = createSelector(userState, (state: UserState) => {
  return state.user!.nombres + " " + state.user!.apellidos;
});

export const rolSelector = createSelector(userState, (state: UserState) => {
  return state.user!.rol;
});


export const usuariosSelector = createSelector(userState, (state: UserState) => {
  return state.usuarios;
});
