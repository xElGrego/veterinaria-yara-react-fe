import { RazasResponse } from "../../domain/Razas/Razas";

export interface RazaState {
    razas: RazasResponse[],
    razaSelected: RazasResponse | undefined;
}

export const initialState: RazaState = {
    razas: [],
    razaSelected: undefined
};