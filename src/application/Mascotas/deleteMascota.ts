import useMascotasServices from "../../services/MascotasServices";

const { deleteMascota: deleteMascotasServcices } = useMascotasServices();

const useDeleteMascota = () => {
  const deleteMascota = async (req: Guid): Promise<string> => {
    const res = await deleteMascotasServcices(req);
    return res;
  };
  return {
    deleteMascota,
  };
};

export default useDeleteMascota;
