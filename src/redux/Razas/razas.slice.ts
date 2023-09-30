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
        }
    }
});

export const { loadRaza } = razaSlice.actions;
export default razaSlice.reducer;