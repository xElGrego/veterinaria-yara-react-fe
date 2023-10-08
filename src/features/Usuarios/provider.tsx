import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
} from "react";
import { IPaginationButtonsProps } from "../../shared/Components/PaginationButtons";
import { IUsuariosRequest } from "../../domain/User/IUsuario";
import moment from "moment";
import { useUsuarios } from "./hooks/useUsuarios";

export interface IUsariosContext {
  IsLoading: boolean;
  TotalDocs: number;
  ActualPage: number;
  TotalPage: number;
  resetPagination: () => void;
  buttons: IPaginationButtonsProps;
  /*   idUsuarioSelected: Guid | null;
  setIdUsuarioSelected: Dispatch<SetStateAction<string | null>>; */
}

const UsuarioContext = createContext({});

export const UsuarioProvider = ({ children }: { children: ReactNode }) => {
  const initialRequest: IUsuariosRequest = {
    nombre: "",
    estado: 1,
    start: 0,
    length: 10,
    fechaInicio: moment(new Date().toUTCString()).format("YYYY-MM-DD"),
    fechaFin: moment(new Date().toUTCString()).format("YYYY-MM-DD"),
  };

  const [usuarios, setUsuarios] = useState<IUsuariosRequest>(initialRequest);

  const {
    IsLoading,
    ActualPage,
    totalPage,
    resetPagination,
    TotalDocs,
    nextPageTable,
    prevPageTable,
    lastPageTable,
    startPageTable,
  } = useUsuarios(usuarios);

  const storage: IUsariosContext = {
    ActualPage,
    IsLoading,
    TotalPage: totalPage,
    resetPagination,
    TotalDocs,
    buttons: {
      nextPageTable: () => {
        if (ActualPage < totalPage) {
          setUsuarios((prev) => ({ ...prev, start: prev.start + 10 }));
          nextPageTable();
        }
      },
      prevPageTable: () => {
        if (ActualPage > 1) {
          setUsuarios((prev) => ({ ...prev, start: prev.start - 10 }));
          prevPageTable();
        }
      },
      lastPageTable: () => {
        setUsuarios((prev) => ({ ...prev, start: 10 * (totalPage - 1) }));
        lastPageTable();
      },
      firstPageTable: () => {
        setUsuarios((prev) => ({ ...prev, start: 0 }));
        startPageTable();
      },
      OnLockLast: ActualPage === totalPage,
      OnLockFirst: ActualPage === 1,
    },
  };

  return (
    <UsuarioContext.Provider value={storage}>
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioContext;
