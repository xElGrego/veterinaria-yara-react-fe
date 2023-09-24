import { useEffect, useState } from "react";
import useGetEstados from "../../application/Estados/getEstados";
import { InputSelectOptions } from "../Components/InputSelect";
import { EstadosResponse } from "../../domain/Estados/Estados";

const useEstados = () => {
  const { getEstadosAll } = useGetEstados();
  const [EstadosList, setEstadosList] = useState<InputSelectOptions[]>([]);
  const [IsLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getEstadosAll();
        const dataParsed: InputSelectOptions[] = data.map(
          (el: EstadosResponse) => {
            return { title: el.nombre, value: el.idEstado };
          }
        );
        setEstadosList(dataParsed);
      } catch (ex) {
        // console.error(ex);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    IsLoading,
    EstadosList,
  };
};

export default useEstados;
