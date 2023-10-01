import { useContext, useEffect, useState } from "react";
import moment from "moment";
import ReporteContext, { IReportesContext } from "../ReporteProvider";
import { Spinner } from "../../../shared/Components/Spinner";
import { HeaderSubirTxt } from "./HeaderSubirTxt";
import HeaderItems from "./HeaderItems";
import ModalTxtTable from "./ModalTxtTable";

const ModalContent = () => {
  const { FileToUpload, ListItemsPerUpload } = useContext(
    ReporteContext
  ) as IReportesContext;

  const [IsLoadingAdded, setIsLoadingAdded] = useState<boolean>(false);
  const [IsSuccess, setIsSuccess] = useState<boolean | null>();

  const handlerAddDocuments = async () => {
    try {
      setIsLoadingAdded(true);
    } catch (ex) {
      // console.log(ex);
    } finally {
      setIsLoadingAdded(false);
    }
  };

  return (
    <div className="border dark:border-gray-600 rounded-lg relative">
      {IsLoadingAdded ? (
        <div className=" absolute top-0 bottom-0 z-20 left-0 right-0 flex justify-center items-center backdrop-blur-sm  rounded-lg border-black my-auto  mx-auto">
          <div className="my-auto flex items-center justify-center bg-white p-2 rounded-lg px-4 select-none text-black hover:border-blue-600 border shadow-lg">
            <Spinner class="w-6 h-6 text-blue-600" /> Descargando...
          </div>
        </div>
      ) : (
        <></>
      )}
      {IsSuccess && !IsLoadingAdded ? (
        <div className=" absolute top-0 bottom-0 z-20 left-0 right-0 flex justify-center items-center backdrop-blur-sm  rounded-lg border-black my-auto  mx-auto">
          <div className="my-auto flex items-center justify-center bg-white p-2 rounded-lg px-4 select-none text-black hover:border-blue-600 border shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-green-600 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            Archivos subidos con exito
          </div>
        </div>
      ) : (
        <></>
      )}
      {IsSuccess === false && !IsLoadingAdded ? (
        <div className=" absolute top-0 bottom-0 z-20 left-0 right-0 flex justify-center items-center backdrop-blur-sm  rounded-lg border-black   my-auto  mx-auto">
          <div className="my-auto flex items-center justify-center bg-white p-2 rounded-lg px-4 select-none text-black hover:border-blue-600 border shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-red-500 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
            Error al subir el archivo
          </div>
        </div>
      ) : (
        <></>
      )}
      <HeaderSubirTxt
        name={FileToUpload && FileToUpload.name ? FileToUpload.name : "N/A"}
        razonSocial={"Razon social"}
        peso={FileToUpload && FileToUpload.size ? FileToUpload.size : 0}
      />
      <div className="flex justify-between my-2 overflow-x-auto mx-2 text-xs">
        <button
          onClick={handlerAddDocuments}
          type="button"
          className=" border dark:border-gray-900 p-2 rounded-md dark:bg-white  hover:bg-slate-100"
        >
          Subir Archivo
        </button>
        <div className="my-auto">
          <input
            type="month"
            className="border px-2 py-2 rounded-lg active:border-blue-500 focus:border-blue-500"
          />
        </div>
        <HeaderItems />
      </div>
      <>
        <div className="flex flex-col  overflow-y-auto overflow-x-auto max-h-96 w-[100%] ">
          <div className="inline-block min-w-full py-2 align-middle  ">
            <ModalTxtTable />
          </div>
        </div>
      </>
    </div>
  );
};

export default ModalContent;
