import useRazasServices from "../../services/RazasServices";
import { RazasResponse } from '../../domain/Razas/Razas';

const { getListaRazas } = useRazasServices();

const useGetRazas = () => {
    const getAllRazas = async (): Promise<RazasResponse[]> => {
        const res = await getListaRazas();
        return res;
    }

    return {
        getAllRazas
    }
}

export default useGetRazas;
