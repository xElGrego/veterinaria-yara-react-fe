import { useUsuariosServices } from "../../services/UsuariosServices";
import { ItemsPaginationResponse } from "../ports";
import { IUsuariosRequest } from '../../domain/User/IUsuario';
import { User } from "../../domain/User/User";

const { GetUsuarios } = useUsuariosServices();

export const useGetUsuarios = () => {
    const getUsuarios = async (req: IUsuariosRequest): Promise<ItemsPaginationResponse<User>> => {
        const res = await GetUsuarios(req);
        return res;
    }
    return {
        getUsuarios
    }
}
