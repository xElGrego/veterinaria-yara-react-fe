import { useContext } from "react";

import ReporteContext, { IReportesContext } from "../ReporteProvider";
import { IComprobanteTxt } from "../hooks/useConvertedTxt";
const ModalTxtTable = () => {
  const { ListItemsPerUpload } = useContext(ReporteContext) as IReportesContext;

  return (
    <div className=" shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
      {ListItemsPerUpload !== null ? (
        <table className="min-w-full divide-y divide-gray-300 text-xs">
          <thead className="bg-gray-50 dark:bg-gray-800   sticky top-0">
            <tr>
              <th
                scope="col"
                className=" py-2 px-2 text-center  font-semibold text-gray-900 dark:text-white "
              >
                Tipo Documento
              </th>
              <th
                scope="col"
                className="  text-center  font-semibold text-gray-900 dark:text-white"
              >
                Fecha de Autorización
              </th>
              <th
                scope="col"
                className=" text-center  font-semibold text-gray-900 dark:text-white"
              >
                Num. Documento
              </th>
              <th
                scope="col"
                className=" text-center  font-semibold text-gray-900 dark:text-white"
              >
                Ruc Receptor
              </th>

              <th
                scope="col"
                className=" text-center  font-semibold text-gray-900 dark:text-white"
              >
                Ruc Emisor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:bg-gray-800">
            <>
              {ListItemsPerUpload.map((el: IComprobanteTxt, index: number) => (
                <tr key={index}>
                  <td className="whitespace-nowrap py-2 px-2 text-center  font-medium text-gray-900 dark:text-white ">
                    {el.Comprobante}
                  </td>
                  <td className="whitespace-nowrap text-center   text-gray-500 dark:text-white">
                    {el.FechaAutorizacion}
                  </td>
                  <td className="whitespace-nowrap text-center   text-gray-500 dark:text-white">
                    {el.SerieComprobante}
                  </td>
                  <td className="whitespace-nowrap  text-center  text-gray-500 dark:text-white">
                    {el.IdentificacionReceptor}
                  </td>
                  <td className="whitespace-nowrap  text-center  text-gray-500 dark:text-white">
                    {el.RucEmisor}
                  </td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      ) : (
        <h1>
          El archivo es demasiado grande, su lectura se realizara en segundo
          plano.
        </h1>
      )}
    </div>
  );
};

export default ModalTxtTable;
