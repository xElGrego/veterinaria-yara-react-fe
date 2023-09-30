import {
  ChangeEvent,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Spinner } from "../../../shared/Components/Spinner";
import MascotaContext, { IMascotasContext } from "../MascotasProvider";
import { IMascota } from "../../../domain/Mascotas/IMascota";
import { PaginationButtons } from "../../../shared/Components/PaginationButtons";
import useRazonSocialPorIdEmpresa from "../../../shared/hooks/useRazaId";
import moment from "moment";
import { DropDownMascota } from "./ListDropDown";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

export const MascotasList: FC = () => {
  type ObjectSend = {
    idMascota: Guid;
    nombre: string;
    edad: number;
  };

  const { Mascotas, ActualPage, TotalDocs, buttons } = useContext(
    MascotaContext
  ) as IMascotasContext;

  const obtenerRazonSocial = useRazonSocialPorIdEmpresa();

  const [checked, setChecked] = useState<ObjectSend[]>([]);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);

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
    } else {
      setChecked([]);
    }
    setCheckAll(e.target.checked);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 my-2 text-xs w-auto">
      <div className=" flex flex-col ">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className=" min-w-full py-2 align-middle">
            <div className="ring-1 ring-black    max-h-[65vh] overflow-x-auto w-auto  ring-opacity-5 md:rounded-lg  shadow bg-white dark:bg-gray-900  ">
              <table className="min-w-full table-fixed divide-y w-auto divide-gray-300 dark:divide-gray-700">
                {Mascotas.length === 0 ? (
                  <span></span>
                ) : (
                  <>
                    <thead className="text-center divide-y top-0 z-50 bg-white divide-gray-200 dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400">
                      <tr className="divide-x divide-gray-50">
                        <th>
                          <Checkbox
                            indeterminate={indeterminate}
                            onChange={onCheckAllChange}
                            checked={checkAll}
                          ></Checkbox>
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
                          Opciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center divide-y text-white">
                      {Mascotas.map((el: IMascota, key: number) => (
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
                          <td className="text-white py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.nombre}
                          </td>
                          <td className="text-white py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.mote}
                          </td>
                          <td className="text-white py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.edad}
                          </td>
                          <td className="text-white py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.peso}
                          </td>
                          <td className="text-white py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {obtenerRazonSocial(el.idRaza)}
                          </td>
                          <td className="text-white py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {moment(el.fechaIngreso).format(
                              "DD-MM-YYYY HH:mm:ss"
                            )}
                          </td>
                          <td className="py-3.5 pl-4 pr-3 sm:pl-6">
                            <DropDownMascota field={el} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </>
                )}
              </table>
            </div>
            {Mascotas.length > 0 && (
              <div className="dark:text-gray-400 py-3 flex items-center justify-between border-gray-200 dark:border-gray-700">
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
