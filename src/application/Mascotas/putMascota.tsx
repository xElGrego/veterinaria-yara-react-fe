import {
  IAddMascotaRequest,
  IAddMascotaResponse,
} from "../../domain/Mascotas/IAddMascota";
import useMascotasServices from "../../services/MascotasServices";

const { putMascota: putMascotasServcices } = useMascotasServices();

const usePutMascotas = () => {
  const putMascotas = async (
    req: IAddMascotaRequest
  ): Promise<IAddMascotaResponse> => {
    const res = await putMascotasServcices(req);
    return res;
  };
  return {
    putMascotas,
  };
};

export default usePutMascotas;
