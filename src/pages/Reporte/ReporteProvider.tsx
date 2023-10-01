import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { IComprobanteTxt } from "./hooks/useConvertedTxt";

export interface IReportesContext {
  ListItemsPerUpload: IComprobanteTxt[] | null;
  setListItemsPerUpload: Dispatch<SetStateAction<IComprobanteTxt[] | null>>;
  FileToUpload?: File;
  setFileToUpload: Dispatch<SetStateAction<File | undefined>>;
}

const ReporteContext = createContext({});

export const ReporteProvider = ({ children }: { children: ReactNode }) => {
  const [ListItemsPerUpload, setListItemsPerUpload] = useState<
    IComprobanteTxt[] | null
  >([]);

  const [FileToUpload, setFileToUpload] = useState<File>();

  const storage: IReportesContext = {
    FileToUpload,
    setFileToUpload,
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
