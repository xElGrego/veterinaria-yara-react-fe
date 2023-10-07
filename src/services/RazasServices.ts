import { RazasServices } from "../application/ports";
import { IAddRazaRequest, IAddRazaResponse } from "../domain/Razas/IAddRaza";
import { RazasResponse } from "../domain/Razas/Razas";
import RazaClient from "./configurationt";


const useRazasServices = (): RazasServices => {
    const getListaRazas = async (): Promise<RazasResponse[]> => {
        const res = await RazaClient.get('veterinaria-yara/obtener-razas');
        const data: RazasResponse[] = res.data.data;
        return data;
    }

    const postRaza = async (req: IAddRazaRequest): Promise<IAddRazaResponse> => {
        const res = await RazaClient.post('veterinaria-yara/crear-raza', { ...req });
        return res.data.data;
    }

    const deleteRaza = async (req: Guid): Promise<string> => {
        let res = await RazaClient.delete("/veterinaria-yara/eliminar-raza", {
            headers: {
                "idRaza": req.toString()
            }
        },
        );
        return res.data.data.response;
    }

    return {
        getListaRazas,
        postRaza,
        deleteRaza
    }
}

export default useRazasServices;