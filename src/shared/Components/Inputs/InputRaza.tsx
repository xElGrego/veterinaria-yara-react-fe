import AsyncSelect from "react-select/async";
import useGetRazas from "../../../application/Razas/getRazas";
import { RazasResponse } from "../../../domain/Razas/Razas";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { FC, useState } from "react";

export interface InputSelectOptionsEmpresa {
  value?: string;
  label?: string;
}

interface PropsInputSelect<T extends FieldValues> {
  title?: string;
  options?: InputSelectOptionsEmpresa[];
  name?: string;
  validations?: any;
  order?: string;
  register?: UseFormRegister<T>;
}

export const InputRaza: FC<PropsInputSelect<any>> = (props) => {
  const { getAllRazas } = useGetRazas();

  const promiseOptions = async (inputValue: string) =>
    new Promise<InputSelectOptionsEmpresa[]>((resolve) => {
      getAllRazas().then((data) => {
        const options: InputSelectOptionsEmpresa[] = [
          ...data.map((empresa: RazasResponse) => ({
            value: empresa.idRaza,
            label: empresa.nombre,
          })),
        ];
        resolve(options);
      });
    });

  const [inputValue, setValue] = useState("");

  const handleInputChange = (value: string) => {
    console.log("handleInputChange", JSON.stringify(value));
    setValue(value);
  };

  return (
    <div
      className={`mt-1  my-auto ${
        props.order === "true" ? "lg:flex  lg:space-x-2" : " flex-initial"
      }   justify-center items-center w-full  `}
    >
      <label className="text-sm dark:text-white"> {props.title} </label>
      <AsyncSelect
        noOptionsMessage={() => "No existen datos para la búsqueda."}
        loadingMessage={() => "Cargando..."}
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        name={props.name}
        className="flex-1 w-full text-sm"
        onInputChange={handleInputChange}

        /*  value={selectedOption} */
      />
    </div>
  );
};
