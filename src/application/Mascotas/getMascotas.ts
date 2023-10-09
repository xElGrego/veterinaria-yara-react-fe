import { IMascota, MascotaRequest } from "../../domain/Mascotas/IMascota";
import useMascotasServices from "../../services/MascotasServices";
import { ItemsPaginationResponse } from "../ports";

const { getMascotas: getMascotasServcices } = useMascotasServices();

const useGetMascotas = () => {
    const getMascotas = async (req: MascotaRequest): Promise<ItemsPaginationResponse<IMascota>> => {
        const res = await getMascotasServcices(req);
        return res;
    }
    return {
        getMascotas
    }
}

export default useGetMascotas;
