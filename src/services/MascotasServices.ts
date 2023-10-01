import { ItemsPaginationResponse, MascotasServices } from "../application/ports"
import { IAddMascotaRequest, IAddMascotaResponse } from "../domain/Mascotas/IAddMascota";
import { IMascota, MascotaRequest } from "../domain/Mascotas/IMascota";
import MascotaClient from "./configurationt";


const useMascotasServices = (): MascotasServices => {
    const getMascotas = async (req: MascotaRequest): Promise<ItemsPaginationResponse<IMascota>> => {
        const idUsuarioParam = req.idUsuario ? `idUsuario=${req.idUsuario}` : '';
        let params = `consulta-mascotas?start=${req.start}&lenght=${req.length}&estado=${req.estado}&fechaInicio=${req.fechaInicio}&fechaFin=${req.fechaFin}`;
        if (idUsuarioParam) {
            params += `&${idUsuarioParam}`;
        }

        let request = await MascotaClient.get("/veterinaria-yara/" + params);
        const parsed: IMascota[] = request.data.data.consulta.map(
            (el: IMascota) => {
                return {
                    ...el,
                };
            }
        );
        return { data: parsed, pagination: request.data.data.pagination }
    }

    const postMascota = async (req: IAddMascotaRequest): Promise<IAddMascotaResponse> => {
        let res = await MascotaClient.post("/veterinaria-yara/crear-mascota", { ...req });
        return res.data.data;
    }

    const putMascota = async (req: IAddMascotaRequest): Promise<IAddMascotaResponse> => {
        let res = await MascotaClient.put("/veterinaria-yara/editar-mascota", { ...req });
        return res.data.data;
    }

    const deleteMascota = async (req: Guid): Promise<string> => {
        let res = await MascotaClient.delete("/veterinaria-yara/eliminar-mascota", {
            headers: {
                "IdMascota": req.toString()
            }
        },
        );
        return res.data.data.response;
    }

    return {
        getMascotas,
        postMascota,
        putMascota,
        deleteMascota
    }
}

export default useMascotasServices;