import { ChangeEvent, FC, useContext, useState } from "react";
import ButtonFile from "../../shared/Components/Buttons/ButtonFile";
import { HiOutlineDocumentText } from "react-icons/hi";
import ReporteContext, { IReportesContext } from "./ReporteProvider";
import useUnconvertedTxt from "./hooks/useConvertedTxt";
import { ModalGeneral } from "../../shared/Components/Modal/ModalGeneral";
import IndexModalTxt from "./Components/ModalSubirTxt";

export const ReporteForm: FC = () => {
  const { setListItemsPerUpload, setFilesToUpload } = useContext(
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
        const filesToProcess: File[] = Array.from(e.target.files); // Convierte la lista de archivos en un array
        setFilesToUpload(filesToProcess);

        const processedDataArray = await Promise.all(
          filesToProcess.map(async (file) => {
            if (file.size < 500000) {
              return await handleProcessDocument(file);
            } else {
              return null;
            }
          })
        );

        //setListItemsPerUpload([...processedDataArray]);
        toogleModalClave();
      }
    } catch (err) {
      // Maneja los errores aquí
    }
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
          isMultiple={true}
          svg={<HiOutlineDocumentText className="-ml-1 mr-3 h-5 w-5" />}
        />
      </div>
    </div>
  );
};
