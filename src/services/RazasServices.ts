import { RazasServices } from "../application/ports";
import { RazasResponse } from "../domain/Razas/Razas";
import EstadoClient from "./configurationt";


const useRazasServices = (): RazasServices => {
    const getListaRazas = async (): Promise<RazasResponse[]> => {
        const res = await EstadoClient.get('veterinaria-yara/obtener-razas');
        const data: RazasResponse[] = res.data.data;
        return data;
    }

    return {
        getListaRazas
    }
}

export default useRazasServices;