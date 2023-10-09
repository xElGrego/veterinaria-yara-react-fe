import { ItemsPaginationResponse, MascotasServices } from "../application/ports"
import { IAddMascotaRequest, IAddMascotaResponse } from "../domain/Mascotas/IAddMascota";
import { IMascota, MascotaRequest } from "../domain/Mascotas/IMascota";
import { IOrderMascota } from "../domain/Mascotas/OrderMascotas";
import MascotaClient from "./configurationt";


const useMascotasServices = (): MascotasServices => {
    const getMascotas = async (req: MascotaRequest): Promise<ItemsPaginationResponse<IMascota>> => {
        const idUsuarioParam = req.idUsuario ? `idUsuario=${req.idUsuario}` : '';
        let params = `consulta-mascotas?start=${req.start}&lenght=${req.length}&nombre=${req.nombre}&estado=${req.estado}&fechaInicio=${req.fechaInicio}&fechaFin=${req.fechaFin}`;
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

    const GetMascotasUsuarios = async (start: number, length: number, idUsuario: Guid): Promise<IMascota[]> => {
        let params = `consulta-mascotas-usuarios?start=${start}&lenght=${length}&idUsuario=${idUsuario}`;
        let request = await MascotaClient.get("/veterinaria-yara/" + params);
        const parsed: IMascota[] = request.data.data.consulta.map(
            (el: IMascota) => {
                return {
                    ...el,
                };
            }
        );
        return parsed;
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

    const ActivarMascota = async (req: Guid): Promise<string> => {
        let res = await MascotaClient.get("/veterinaria-yara/activar-mascota", {
            headers: {
                "IdMascota": req.toString()
            }
        },
        );
        return res.data.data.response;
    }

    const OrderMascotas = async (req: IOrderMascota[]): Promise<string> => {
        let res = await MascotaClient.post("/veterinaria-yara/ordenar-mascota", req);
        return res.data.data;
    }

    return {
        getMascotas,
        postMascota,
        putMascota,
        deleteMascota,
        ActivarMascota,
        GetMascotasUsuarios,
        OrderMascotas
    }
}

export default useMascotasServices;