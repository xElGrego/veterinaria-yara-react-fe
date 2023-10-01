import { useContext, useState, useEffect } from "react";
import ReporteContext, { IReportesContext } from "../ReporteProvider";
import { Spinner } from "../../../shared/Components/Spinner";
import { HeaderSubirTxt } from "./HeaderSubirTxt";
import moment from "moment";
import HeaderItems from "./HeaderItems";

const ModalContent = () => {
  const { FilesToUpload, ListItemsPerUpload } = useContext(
    ReporteContext
  ) as IReportesContext;

  const [IsLoadingAdded, setIsLoadingAdded] = useState<boolean>(false);
  const [IsSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (ListItemsPerUpload && ListItemsPerUpload.length > 0) {
      // Verificar si al menos uno de los archivos tiene éxito
      const isSuccess = ListItemsPerUpload.some((item) => item !== null);
      setIsSuccess(isSuccess);
    }
  }, [ListItemsPerUpload]);

  const handlerAddDocuments = async () => {
    try {
      for (const file of FilesToUpload || []) {
        if (file) {
          /*    const status: boolean = await UploadDocument(
            file,
            empresaId,
            getValues().mes
          ); */
          console.log(`Archivo ${file.name} subido con éxito.`);
        }
      }
    } catch (ex) {
      // Maneja los errores aquí
    } finally {
      setIsLoadingAdded(false);
    }
  };

  return (
    <div className="border dark:border-gray-600 rounded-lg relative">
      {IsLoadingAdded ? (
        <div className="absolute top-0 bottom-0 z-20 left-0 right-0 flex justify-center items-center backdrop-blur-sm rounded-lg border-black my-auto mx-auto">
          <div className="my-auto flex items-center justify-center bg-white p-2 rounded-lg px-4 select-none text-black hover:border-blue-600 border shadow-lg">
            <Spinner class="w-6 h-6 text-blue-600" /> Descargando...
          </div>
        </div>
      ) : (
        <></>
      )}

      {FilesToUpload && FilesToUpload.length > 0 && (
        <>
          {FilesToUpload.map((file, index) => (
            <>
              <HeaderSubirTxt
                key={index}
                name={file.name || "N/A"}
                razonSocial={"Razon social"}
                peso={file.size || 0}
              />
              {ListItemsPerUpload && ListItemsPerUpload.length > 0 && (
                <>
                  {ListItemsPerUpload.map((item, index) => (
                    <HeaderItems key={index} ListItemsPerUpload={item} />
                  ))}
                </>
              )}
            </>
          ))}
        </>
      )}

      <div className="flex justify-between my-2 overflow-x-auto mx-2 text-xs">
        <button
          onClick={handlerAddDocuments}
          type="button"
          className="border dark:border-gray-900 p-2 rounded-md dark:bg-white hover:bg-slate-100"
        >
          Subir Archivo
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
