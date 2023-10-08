import { FC, useContext, useEffect } from "react";
import { Checkbox } from "antd";
import moment from "moment";
import { DropDownMascota } from "./ListDropDown";
import MascotaContext, { IMascotasContext } from "../provider";
import useRazonSocialPorIdEmpresa from "../../../shared/hooks/useRazaId";
import { IMascota } from "../../../domain/Mascotas/IMascota";
import { PaginationButtons } from "../../../shared/Components/PaginationButtons";
import { useAppSelector } from "../../../store/store";
import { Spinner } from "../../../shared/Components/Spinner";
import { mascotasSelector } from "../../../redux/Mascotas/mascotasSelector";

export const MascotasList: FC = () => {
  const {
    /*  Mascotas, */
    IsLoading,
    ActualPage,
    TotalDocs,
    buttons,
    checked,
    indeterminate,
    checkAll,
    selectedAll,
    setIndeterminate,
    setCheckAll,
    onCheckChange,
    onCheckAllChange,
  } = useContext(MascotaContext) as IMascotasContext;

  const Mascotas = useAppSelector(mascotasSelector);

  const obtenerRazonSocial = useRazonSocialPorIdEmpresa();

  useEffect(() => {
    setIndeterminate(checked.length > 0 && checked.length !== Mascotas.length);
    setCheckAll(checked.length === Mascotas.length);
  }, [checked, Mascotas]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 my-2 text-xs w-auto">
      <div className=" flex flex-col ">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className=" min-w-full py-2 align-middle">
            <div className="ring-1 max-h-[65vh] overflow-x-auto w-auto ring-opacity-5 md:rounded-lg shadow  ">
              <table className="min-w-full table-fixed   divide-y w-auto divide-gray-300 dark:divide-gray-700 ">
                <thead className="text-center divide-y top-0 z-50 dark:bg-neutral-800 dark:text-white">
                  <tr className="">
                    <th>
                      {Mascotas.length > 0 ? (
                        <Checkbox
                          indeterminate={indeterminate}
                          onChange={onCheckAllChange}
                          checked={checkAll}
                        ></Checkbox>
                      ) : (
                        <></>
                      )}
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 sm:pl-6">
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden"
                    >
                      Apodo
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden"
                    >
                      Edad
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell"
                    >
                      Peso
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell"
                    >
                      Raza
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell"
                    >
                      Fecha Registro
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 sm:pl-6">
                      Estado
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 sm:pl-6">
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center divide-y text-black">
                  {!IsLoading ? (
                    Mascotas.length > 0 ? (
                      Mascotas.map((el: IMascota, key: number) => (
                        <tr key={key}>
                          <td>
                            <Checkbox
                              value={el.idMascota}
                              checked={checked.some(
                                (item) => item.idMascota === el.idMascota
                              )}
                              onChange={() =>
                                onCheckChange({
                                  idMascota: el.idMascota,
                                  nombre: el.nombre,
                                  edad: el.edad,
                                })
                              }
                            />
                          </td>
                          <td className="text-black py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.nombre}
                          </td>
                          <td className="text-black py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.mote}
                          </td>
                          <td className="text-black py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.edad}
                          </td>
                          <td className="text-black py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.peso}
                          </td>
                          <td className="text-black py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {obtenerRazonSocial(el.idRaza)}
                          </td>
                          <td className="text-black py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {moment(el.fechaIngreso).format(
                              "DD-MM-YYYY HH:mm:ss"
                            )}
                          </td>
                          <td className="text-black py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.estado === 2
                              ? "Activo"
                              : el.estado === 3
                              ? "Inactivo"
                              : "Desconocido"}
                          </td>
                          <td className="py-3.5 pl-4 pr-3 sm:pl-6">
                            <DropDownMascota field={el} />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={12} className="py-4 text-sm">
                          No hay datos.
                        </td>
                      </tr>
                    )
                  ) : (
                    <tr>
                      <td colSpan={12} className="py-4 text-sm">
                        <Spinner class="h-5 w-5 text-blue-800" /> Cargando...
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {Mascotas.length > 0 && (
              <div className=" dark:text-gray-400 py-3 flex items-center justify-between border-gray-200  ">
                <div className="hidden sm:flex-1 sm:flex sm:items-center">
                  <span className="text-sm font-normal ml-2 text-gray-400 dark:text-gray-400"></span>
                  Mostrando
                  {Mascotas.length === 0 ? (
                    <span className="font-semibold text-black-900 dark:text-black">
                      0 de 0 Registros
                    </span>
                  ) : (
                    <span className="font-semibold text-black-900 dark:text-black">
                      {` ${(ActualPage - 1) * 10 + 1} - ${Math.min(
                        ActualPage * 10,
                        TotalDocs
                      )} de ${TotalDocs} Registros`}
                    </span>
                  )}
                </div>

                <PaginationButtons {...buttons} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
