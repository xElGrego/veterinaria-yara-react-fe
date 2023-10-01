import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./razas.state";


export const razaSlice = createSlice({
    name: "razas",
    initialState,
    reducers: {
        loadRaza: (state, action) => {
            if (action.payload != null) {
                if (action.payload.razas && action.payload.razas.length > 0) {
                    state.razas = action.payload.razas;
                }
            }
        },
        selectRaza: (state, action) => {
            if (action.payload != null) {
                state.razaSelected = state.razas.find(
                    (obj) => obj.idRaza === action.payload
                );
            } else {
                state.razaSelected = undefined;
            }
        },
        guardarRaza: (state, action) => {
            const nuevaRaza = action.payload;
            state.razas.push(nuevaRaza);
        }
    }
});

export const { loadRaza, selectRaza, guardarRaza } = razaSlice.actions;
export default razaSlice.reducer;