import useMascotasServices from "../../services/MascotasServices";

const { ActivarMascota } = useMascotasServices();

const useActivarMascota = () => {
  const activarMascota = async (req: Guid): Promise<string> => {
    const res = await ActivarMascota(req);
    return res;
  };
  return {
    activarMascota,
  };
};

export default useActivarMascota;
