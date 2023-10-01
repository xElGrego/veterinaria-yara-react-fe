import { useSelector } from "react-redux";
import { useRazaSelection } from "../../hooks/useRazaSelection";
import { FC, useEffect, useState } from "react";
import { RazasResponse } from "../../../domain/Razas/Razas";
import AsyncSelect from "react-select/async";

export interface InputSelectOptionsEmpresa {
  value?: string;
  label?: string;
  isDefaultValue?: boolean;
}

interface PropsInputSelect {
  title?: string;
  options?: InputSelectOptionsEmpresa[];
  name?: string;
  validations?: any;
  order?: string;
}

export const InputRaza: FC<PropsInputSelect> = (props) => {
  const { handleSelectChange, selectedOption } = useRazaSelection();
  const [options, setOptions] = useState<InputSelectOptionsEmpresa[]>([]);
  const razas = useSelector((store: any) => store.razas.razas);
  const razaSelected = useSelector((store: any) => store.razas.razaSelected);

  if (!props.name) return null;

  useEffect(() => {
    if (razaSelected != null) {
      const selectedValue = {
        value: razaSelected.idRaza,
        label: razaSelected.nombre,
      };
      if (selectedValue.value !== selectedOption.value) {
        handleSelectChange(selectedValue);
      }
    }
  }, [razaSelected, selectedOption]);

  const loadOptions = (
    inputValue: string,
    callback: (options: InputSelectOptionsEmpresa[]) => void
  ) => {
    if (inputValue) {
      const filteredRazas = razas.filter(
        (raza: RazasResponse) =>
          raza.descripcion.toLowerCase().includes(inputValue.toLowerCase()) ||
          raza.descripcion
            .toString()
            .toLowerCase()
            .includes(inputValue.toLowerCase())
      );

      const options: InputSelectOptionsEmpresa[] = filteredRazas.map(
        (raza: RazasResponse) => ({
          value: raza.idRaza,
          label: raza.nombre,
        })
      );

      callback(options);
    } else {
      const options: InputSelectOptionsEmpresa[] = [
        ...razas.map((empresa: RazasResponse) => ({
          value: empresa.idRaza,
          label: empresa.nombre,
        })),
      ];
      callback(options);
    }
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
        placeholder="Seleccionen una mascota"
        loadOptions={(inputValue, callback) => {
          loadOptions(inputValue, (newOptions) => {
            setOptions(newOptions);
            callback(newOptions);
          });
        }}
        onChange={handleSelectChange}
        className="flex-1 w-full text-sm  "
        options={options}
      />
    </div>
  );
};
