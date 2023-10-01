import { ChangeEvent, FC, useContext, useState } from "react";
import ButtonFile from "../../shared/Components/Buttons/ButtonFile";
import { HiOutlineDocumentText } from "react-icons/hi";
import ReporteContext, { IReportesContext } from "./ReporteProvider";
import useUnconvertedTxt from "./hooks/useConvertedTxt";
import { ModalGeneral } from "../../shared/Components/Modal/ModalGeneral";
import IndexModalTxt from "./Components/ModalSubirTxt";

export const ReporteForm: FC = () => {
  const { setListItemsPerUpload, setFileToUpload } = useContext(
    ReporteContext
  ) as IReportesContext;

  const { handleProcessDocument } = useUnconvertedTxt();

  const [isOpenClave, setIsOpenClave] = useState(false);

  const toogleModalClave = () => {
    setIsOpenClave(!isOpenClave);
  };

  const handleTxtFile = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        const filesToProcess: File = e.target.files[0];
        setFileToUpload(filesToProcess);
        if (filesToProcess.size < 500000) {
          const data = await handleProcessDocument(filesToProcess);
          setListItemsPerUpload([...data]);
        } else {
          setListItemsPerUpload(null);
        }
        toogleModalClave();
      }
    } catch (err) {}
  };

  return (
    <div>
      <ModalGeneral
        isOpen={isOpenClave}
        onClose={toogleModalClave}
        title={"Reporte"}
      >
        <IndexModalTxt />
      </ModalGeneral>

      <div>
        <ButtonFile
          accept=".txt"
          onChange={handleTxtFile}
          title="Subir txt"
          id="txt"
          isMultiple={false}
          svg={<HiOutlineDocumentText className="-ml-1 mr-3 h-5 w-5" />}
        />
      </div>
    </div>
  );
};
