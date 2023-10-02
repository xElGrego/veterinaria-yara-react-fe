import {
  IAddMascotaRequest,
  IAddMascotaResponse,
} from "../../domain/Mascotas/IAddMascota";
import useMascotasServices from "../../services/MascotasServices";

const { postMascota: postMascotasServcices } = useMascotasServices();

const usePostMascotas = () => {
  const postMascotas = async (
    req: IAddMascotaRequest
  ): Promise<IAddMascotaResponse> => {
    const res = await postMascotasServcices(req);
    return res;
  };
  return {
    postMascotas,
  };
};

export default usePostMascotas;
