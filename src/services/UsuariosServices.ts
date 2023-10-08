import { ItemsPaginationResponse, UsuariosServices } from "../application/ports";
import { IUsuariosRequest } from '../domain/User/IUsuario';
import { User } from "../domain/User/User";
import UsuarioClient from "./configurationt";


export const useUsuariosServices = (): UsuariosServices => {

    const GetUsuarios = async (req: IUsuariosRequest): Promise<ItemsPaginationResponse<User>> => {

        /* &nombre=${req.nombre}&estado=${req.estado}&fechaInicio=${req.fechaInicio}&fechaFin=${req.fechaFin} */
        let params = `consulta-usuarios?start=${req.start}&lenght=${req.length}`;

        let request = await UsuarioClient.get("/veterinaria-yara/" + params);
        const parsed: User[] = request.data.data.consulta.map(
            (el: User) => {
                return {
                    ...el,
                };
            }
        );
        return { data: parsed, pagination: request.data.data.pagination }
    }

    return {
        GetUsuarios
    }
}