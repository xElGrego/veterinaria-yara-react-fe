import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { IMascota } from "../../domain/Mascotas/IMascota";
import { MascotaRequest } from "../../domain/Mascotas/MascotaRequest";
import useMascotas from "./hooks/useMasccotas";

export interface IMascotasContext {
  Mascotas: IMascota[];
  searchMascotas: Dispatch<SetStateAction<MascotaRequest>>;
  IsLoading: boolean;
}

const MascotaContext = createContext({});

export const MascotaProvider = ({ children }: { children: ReactNode }) => {
  const initialRequest: MascotaRequest = {
    nombre: "",
    descripcion: "",
    estado: "",
  };

  const { Mascotas, searchMascotas, IsLoading } = useMascotas(initialRequest);

  const storage: IMascotasContext = {
    Mascotas,
    searchMascotas,
    IsLoading,
  };

  return (
    <MascotaContext.Provider value={storage}>
      {children}
    </MascotaContext.Provider>
  );
};
