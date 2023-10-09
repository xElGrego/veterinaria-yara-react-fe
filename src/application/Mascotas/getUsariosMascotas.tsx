import { IMascota } from "../../domain/Mascotas/IMascota";
import useMascotasServices from "../../services/MascotasServices";

const { GetMascotasUsuarios } = useMascotasServices();

const useGetMascotasUsuarios = () => {
  const getMascotas = async (
    start: number,
    length: number,
    idUsuario: Guid
  ): Promise<IMascota[]> => {
    const res = await GetMascotasUsuarios(start, length, idUsuario);
    return res;
  };
  return {
    getMascotas,
  };
};

export default useGetMascotasUsuarios;
