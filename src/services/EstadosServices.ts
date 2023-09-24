import { EstadosServices } from "../application/ports";
import { EstadosResponse } from "../domain/Estados/Estados";
import EstadoClient from "./configurationt";


const useEstadosServices = (): EstadosServices => {
    const getEstados = async (): Promise<EstadosResponse[]> => {
        const res = await EstadoClient.get('veterinaria-yara/obtener-estados');
        const data: EstadosResponse[] = res.data;
        return data;
    }

    return {
        getEstados
    }
}

export default useEstadosServices;