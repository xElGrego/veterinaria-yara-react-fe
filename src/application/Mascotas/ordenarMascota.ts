import { IOrderMascota } from "../../domain/Mascotas/OrderMascotas";
import useMascotasServices from "../../services/MascotasServices";

const { OrderMascotas } = useMascotasServices();

export const useOrdenartMascotas = () => {
    const orderMascotas = async (
        req: IOrderMascota[]
    ): Promise<string> => {
        const res = await OrderMascotas(req);
        return res;
    };
    return {
        orderMascotas,
    };
};

