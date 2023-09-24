import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { IMascota, MascotaRequest } from "../../domain/Mascotas/IMascota";
import useMascotas from "./hooks/useMascotas";
import { IPaginationButtonsProps } from "../../shared/Components/PaginationButtons";

export interface IMascotasContext {
  Mascotas: IMascota[];
  searchMascotas: Dispatch<SetStateAction<MascotaRequest>>;
  IsLoading: boolean;
  TotalDocs: number;
  ActualPage: number;
  TotalPage: number;
  resetPagination: () => void;
  buttons: IPaginationButtonsProps;
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

  const [mascotas, setMascotas] =
    useState<MascotaRequest>(initialRequest);

  const {
    Mascotas,
    searchMascotas,
    IsLoading,
    ActualPage,
    totalPage,
    resetPagination,
    TotalDocs,
    nextPageTable,
    prevPageTable,
    lastPageTable,
    startPageTable,
  } = useMascotas(mascotas);

  const storage: IMascotasContext = {
    Mascotas,
    searchMascotas,
    IsLoading,
    ActualPage,
    TotalPage: totalPage,
    resetPagination,
    TotalDocs,
    buttons: {
      nextPageTable: () => {
        if (ActualPage < totalPage) {
          setMascotas((prev) => ({ ...prev, start: prev.start + 10 }));
          nextPageTable();
        }
      },
      prevPageTable: () => {
        if (ActualPage > 1) {
          setMascotas((prev) => ({ ...prev, start: prev.start - 10 }));
          prevPageTable();
        }
      },
      lastPageTable: () => {
        setMascotas((prev) => ({ ...prev, start: 10 * (totalPage - 1) }));
        lastPageTable();
      },
      firstPageTable: () => {
        setMascotas((prev) => ({ ...prev, start: 0 }));
        startPageTable();
      },
      OnLockLast: ActualPage === totalPage,
      OnLockFirst: ActualPage === 1,
    },
  };

  return (
    <MascotaContext.Provider value={storage}>
      {children}
    </MascotaContext.Provider>
  );
};

export default MascotaContext;
