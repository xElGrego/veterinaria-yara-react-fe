import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { IMascota, MascotaRequest } from "../../domain/Mascotas/IMascota";
import useMascotas from "./hooks/useMascotas";
import { IPaginationButtonsProps } from "../../shared/Components/PaginationButtons";
import moment from "moment";
import useRazas from "../../shared/hooks/useRazas";
import { RazasResponse } from "../../domain/Razas/Razas";
import { ObjectSend } from "../../domain/Mascotas/ObjectSend";
import { CheckboxChangeEvent } from "antd/es/checkbox";

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
  idMascotaSeleccionada: string | null;
  setIdMascotaSeleccionada: Dispatch<SetStateAction<string | null>>;
  GetRazasOptions: () => {
    title: string;
    value: string;
  }[];
  checked: ObjectSend[];
  setChecked: Dispatch<SetStateAction<ObjectSend[]>>;
  indeterminate: boolean;
  setIndeterminate: Dispatch<SetStateAction<boolean>>;
  checkAll: boolean;
  setCheckAll: Dispatch<SetStateAction<boolean>>;
  selectedAll: boolean;
  setSelectedAll: Dispatch<SetStateAction<boolean>>;
  onCheckChange: (value: ObjectSend) => void;
  onCheckAllChange: (e: CheckboxChangeEvent) => void;
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

  const [checked, setChecked] = useState<ObjectSend[]>([]);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [selectedAll, setSelectedAll] = useState<boolean>(false);

  const onCheckChange = (value: ObjectSend) => {
    const newChecked = [...checked];
    const index = newChecked.findIndex(
      (item) => item.idMascota === value.idMascota
    );

    if (index === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(index, 1);
    }

    setChecked(newChecked);
    setIndeterminate(
      newChecked.length > 0 && newChecked.length !== Mascotas.length
    );
    setCheckAll(newChecked.length === Mascotas.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      const allObjects = Mascotas.map((item) => ({
        idMascota: item.idMascota,
        nombre: item.nombre,
        edad: item.edad,
      }));
      setChecked(allObjects);
      setSelectedAll(true);
    } else {
      setChecked([]);
      setSelectedAll(false);
    }
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    setIndeterminate(checked.length > 0 && checked.length !== mascotas.length);
    setCheckAll(checked.length === mascotas.length);
  }, [checked, mascotas]);

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
    checked,
    setChecked,
    indeterminate,
    setIndeterminate,
    checkAll,
    setCheckAll,
    selectedAll,
    setSelectedAll,
    onCheckChange,
    onCheckAllChange,
  };

  return (
    <MascotaContext.Provider value={storage}>
      {children}
    </MascotaContext.Provider>
  );
};

export default MascotaContext;
