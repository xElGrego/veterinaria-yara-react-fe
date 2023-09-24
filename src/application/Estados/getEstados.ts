import { EstadosResponse } from "../../domain/Estados/Estados"
import useEstadosServices from "../../services/EstadosServices"

const { getEstados } = useEstadosServices();

const useGetEstados = () => {
    const getEstadosAll = async (): Promise<EstadosResponse[]> => {
        const res = await getEstados();
        return res;
    }

    return {
        getEstadosAll
    }
}

export default useGetEstados;
