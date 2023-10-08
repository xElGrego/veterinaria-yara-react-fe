import { FC, useContext } from "react";
import UsuarioContext, { IUsariosContext } from "../provider";
import { IUsuariosRequest } from "../../../domain/User/IUsuario";
import { useAppSelector } from "../../../store/store";
import { usuariosSelector } from "../../../redux/User/user.selector";
import { User } from "../../../domain/User/User";
import { Spinner } from "../../../shared/Components/Spinner";
import { PaginationButtons } from "../../../shared/Components/PaginationButtons";

export const UsuariosList: FC = () => {
  const { IsLoading, ActualPage, TotalDocs, buttons } = useContext(
    UsuarioContext
  ) as IUsariosContext;

  const Usuarios = useAppSelector(usuariosSelector);

  return (
    <div className="px-4 sm:px-6 lg:px-8 my-2 text-xs w-auto">
      <div className=" flex flex-col ">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className=" min-w-full py-2 align-middle">
            <div className="ring-1 max-h-[65vh] overflow-x-auto w-auto ring-opacity-5 md:rounded-lg shadow  ">
              <table className="min-w-full table-fixed   divide-y w-auto divide-gray-300 dark:divide-gray-700 ">
                <thead className="text-center divide-y top-0 z-50 dark:bg-neutral-800 dark:text-white">
                  <tr className="">
                    {/* <th>
                      {Usuarios.length > 0 ? (
                        <Checkbox
                          indeterminate={indeterminate}
                          onChange={onCheckAllChange}
                          checked={checkAll}
                        ></Checkbox>
                      ) : (
                        <></>
                      )}
                    </th> */}
                    <th scope="col" className="py-3.5 pl-4 pr-3 sm:pl-6">
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden"
                    >
                      Apellidos
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden"
                    >
                      Correo
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell"
                    >
                      Roles
                    </th>

                    <th scope="col" className="py-3.5 pl-4 pr-3 sm:pl-6">
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center divide-y text-black">
                  {!IsLoading ? (
                    Usuarios.length > 0 ? (
                      Usuarios.map((el: User, key: number) => (
                        <tr key={key}>
                          <td className="text-black py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.nombres}
                          </td>
                          <td className="text-black py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.apellidos}
                          </td>
                          <td className="text-black py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.correo}
                          </td>
                          <td className="text-black py-3.5 pl-4 pr-3 sm:pl-6 lg:table-cell hidden">
                            {el.rol.length > 0 ? el.rol.join(" - ") : "-"}
                          </td>

                          {/* <td className="py-3.5 pl-4 pr-3 sm:pl-6">
                            <DropDownMascota field={el} />
                          </td> */}
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
            {Usuarios.length > 0 && (
              <div className=" dark:text-gray-400 py-3 flex items-center justify-between border-gray-200  ">
                <div className="hidden sm:flex-1 sm:flex sm:items-center">
                  <span className="text-sm font-normal ml-2 text-gray-400 dark:text-gray-400"></span>
                  Mostrando
                  {Usuarios.length === 0 ? (
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
