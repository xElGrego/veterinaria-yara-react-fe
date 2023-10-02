import { FC } from "react";
import { razasSelector } from "../../../redux/Razas/razas.selector";
import { useAppSelector } from "../../../store/store";
import { RazasResponse } from "../../../domain/Razas/Razas";
import useRazas from "../../../shared/hooks/useRazas";
import useDeleteRaza from "../../../application/Razas/deleteRazas";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { eliminarRaza } from "../../../redux/Razas/razas.slice";

export const RazasList: FC = () => {
  const dispatch = useDispatch();
  const { deleteRaza } = useDeleteRaza();
  const razas = useAppSelector(razasSelector);

  useRazas();

  const handlerEliminar = async (idRaza: Guid) => {
    try {
      var res = await deleteRaza(idRaza);
      toast.success(res);
      dispatch(eliminarRaza(idRaza));
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Error al realizar la transacción.";
      const res = errorMessage;
      toast.error(res);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 my-2 text-xs w-auto">
      <div className=" flex flex-col ">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className=" min-w-full py-2 align-middle">
            <div className="ring-1 ring-black max-h-[65vh] overflow-x-auto w-auto ring-opacity-5 md:rounded-lg shadow bg-white dark:bg-gray-900">
              <table className="min-w-full table-fixed divide-y w-auto divide-gray-300 dark:divide-gray-700">
                {razas.length === 0 ? (
                  <span></span>
                ) : (
                  <>
                    <thead className="text-center divide-y top-0 z-50 bg-white divide-gray-200 dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400">
                      <tr className="divide-x divide-gray-50">
                        <th scope="col" className="py-3.5 pl-4 pr-3 sm:pl-6">
                          Nombre
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden"
                        >
                          Descripcion
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden"
                        >
                          Opciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center divide-y text-white">
                      {razas.map((el: RazasResponse, key: number) => (
                        <tr key={key}>
                          <td className="text-white py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.nombre}
                          </td>
                          <td className="text-white py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.descripcion}
                          </td>
                          <td>
                            <button onClick={() => handlerEliminar(el.idRaza)}>
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
