import { useSelector } from "react-redux";
import { useEmpresaSelection } from "../../hooks/useRazaSelection";
import { useEffect } from "react";
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

export const InputEmpresa = (props: PropsInputSelect) => {
  const { handleSelectChange, selectedOption } = useEmpresaSelection();

  const empresas = useSelector((store: any) => store.Auth.empresas);
  const empresaSelected = useSelector((store: any) => store.Auth.empresa);

  if (!props.name) return null;

  useEffect(() => {
    if (empresaSelected != null) {
      selectedOption.label =
        empresaSelected.ruc + " - " + empresaSelected.razonSocial;
      selectedOption.value = empresaSelected.idEmpresa;
      handleSelectChange(selectedOption);
    }
  }, [empresaSelected, selectedOption]);

  const loadOptions = (
    inputValue: string,
    callback: (options: InputSelectOptionsEmpresa[]) => void
  ) => {
    if (inputValue) {
      const filteredEmpresas = empresas.filter(
        (empresa: RazasResponse) =>
          empresa.descripcion
            .toLowerCase()
            .includes(inputValue.toLowerCase()) ||
          empresa.descripcion
            .toString()
            .toLowerCase()
            .includes(inputValue.toLowerCase())
      );

      const options: InputSelectOptionsEmpresa[] = filteredEmpresas.map(
        (empresa: RazasResponse) => ({
          value: empresa.idRaza,
          label: empresa.nombre,
        })
      );

      callback(options);
    } else {
      const options: InputSelectOptionsEmpresa[] = [
        { value: "todos", label: "TODOS", isDefaultValue: true },
        ...empresas.map((empresa: RazasResponse) => ({
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
        loadOptions={loadOptions}
        onChange={handleSelectChange}
        className="flex-1 w-full text-sm  "
        value={selectedOption}
      />
    </div>
  );
};
