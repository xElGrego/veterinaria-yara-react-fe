import { IMascota } from "../../domain/Mascotas/IMascota";

export interface MascotaState {
    mascotas: IMascota[]
}

export const initialState: MascotaState = {
    mascotas: []
};
