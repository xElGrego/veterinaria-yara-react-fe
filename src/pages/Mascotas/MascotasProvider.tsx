import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { IMascota, MascotaRequest } from "../../domain/Mascotas/IMascota";
import useMascotas from "./hooks/useMascotas";
import { IPaginationButtonsProps } from "../../shared/Components/PaginationButtons";
import moment from "moment";
import useRazas from "../../shared/hooks/useRazas";
import { RazasResponse } from "../../domain/Razas/Razas";

export interface IMascotasContext {
  IsEditing: boolean;
  setIsEditing: (value: boolean) => void;
  Mascotas: IMascota[];
  setMascotas: Dispatch<SetStateAction<MascotaRequest>>;
  IsLoading: boolean;
  dataLoaded: boolean;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  TotalDocs: number;
  ActualPage: number;
  TotalPage: number;
  resetPagination: () => void;
  openAddModal: () => void;
  buttons: IPaginationButtonsProps;
  RazasList: RazasResponse[];
  idMascotaSeleccionada: string | null; // Nuevo estado para el ID de la mascota seleccionada
  setIdMascotaSeleccionada: Dispatch<SetStateAction<string | null>>; // Nuevo estado para el ID de la mascota seleccionada
  GetRazasOptions: () => {
    title: string;
    value: string;
  }[];
}

const MascotaContext = createContext({});

export const MascotaProvider = ({ children }: { children: ReactNode }) => {
  const initialRequest: MascotaRequest = {
    idUsuario: "",
    nombre: "",
    descripcion: "",
    estado: 1,
    start: 0,
    length: 10,
    fechaInicio: moment(new Date().toUTCString()).format("YYYY-MM-DD"),
    fechaFin: moment(new Date().toUTCString()).format("YYYY-MM-DD"),
  };

  const [mascotas, setMascotas] = useState<MascotaRequest>(initialRequest);
  const { GetRazasOptions, dataLoaded, RazasList } = useRazas();

  const [isOpen, setIsOpen] = useState(false);
  const [IsEditing, setIsEditing] = useState<boolean>(false);

  const [idMascotaSeleccionada, setIdMascotaSeleccionada] = useState<
    string | null
  >(null);

  const openAddModal = () => {
    setIsEditing(false);
    setIsOpen(true);
  };

  const {
    Mascotas,
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
    IsLoading,
    setIsEditing,
    ActualPage,
    setMascotas,
    TotalPage: totalPage,
    resetPagination,
    TotalDocs,
    GetRazasOptions,
    dataLoaded,
    RazasList,
    IsEditing,
    isOpen,
    setIsOpen,
    openAddModal,
    idMascotaSeleccionada,
    setIdMascotaSeleccionada,
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
