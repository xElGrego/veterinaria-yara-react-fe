import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { IComprobanteTxt } from "./hooks/useConvertedTxt";

export interface IReportesContext {
  ListItemsPerUpload: (IComprobanteTxt[] | null)[];
  setListItemsPerUpload: Dispatch<SetStateAction<(IComprobanteTxt[] | null)[]>>;
  FilesToUpload: File[] | null;
  setFilesToUpload: Dispatch<SetStateAction<File[] | null>>;
}

const ReporteContext = createContext({});

export const ReporteProvider = ({ children }: { children: ReactNode }) => {
  const [ListItemsPerUpload, setListItemsPerUpload] = useState<
    (IComprobanteTxt[] | null)[]
  >([]);

  const [FilesToUpload, setFilesToUpload] = useState<File[] | null>([]);

  const storage: IReportesContext = {
    FilesToUpload,
    setFilesToUpload,
    ListItemsPerUpload,
    setListItemsPerUpload,
  };

  return (
    <ReporteContext.Provider value={storage}>
      {children}
    </ReporteContext.Provider>
  );
};

export default ReporteContext;
