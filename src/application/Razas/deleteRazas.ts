import useRazasServices from "../../services/RazasServices";

const { deleteRaza: deleteRazaServcices } = useRazasServices();

const useDeleteRaza = () => {
    const deleteRaza = async (req: Guid): Promise<string> => {
        const res = await deleteRazaServcices(req);
        return res;
    };
    return {
        deleteRaza,
    };
};

export default useDeleteRaza;
