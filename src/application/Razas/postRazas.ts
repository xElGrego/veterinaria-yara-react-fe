import useRazasServices from "../../services/RazasServices";
import { IAddRazaRequest, IAddRazaResponse } from "../../domain/Razas/IAddRaza";

const { postRaza: PostRazaService } = useRazasServices();

const usePostRazas = () => {
    const postRaza = async (req: IAddRazaRequest): Promise<IAddRazaResponse> => {
        const res = await PostRazaService(req);
        return res;
    }

    return {
        postRaza
    }
}

export default usePostRazas;
