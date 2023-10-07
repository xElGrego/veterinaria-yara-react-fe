import { configureStore } from "@reduxjs/toolkit";

import user from "../redux/User/user.slice";
import razas from "../redux/Razas/razas.slice";
import mascotas from "../redux/Mascotas/mascotas.slice";


import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: user,
    razas: razas,
    mascotas: mascotas
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
