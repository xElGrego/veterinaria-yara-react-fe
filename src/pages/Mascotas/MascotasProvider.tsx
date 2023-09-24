import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { IMascota, MascotaRequest } from "../../domain/Mascotas/IMascota";
import useMascotas from "./hooks/useMascotas";

export interface IMascotasContext {
  Mascotas: IMascota[];
  searchMascotas: Dispatch<SetStateAction<MascotaRequest>>;
  IsLoading: boolean;
}

const MascotaContext = createContext({});

export const MascotaProvider = ({ children }: { children: ReactNode }) => {
  const initialRequest: MascotaRequest = {
    idUsuario: "",
    nombre: "",
    descripcion: "",
    estado: 0,
    start: 0,
    length: 10,
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

export default MascotaContext;
