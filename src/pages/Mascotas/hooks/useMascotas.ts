import { useState } from "react";
import { IMascota, MascotaRequest } from "../../../domain/Mascotas/IMascota";
import useGetMascotas from "../../../application/Mascotas/getMascotas";

const useMascotas = (initialRequest: MascotaRequest) => {
    const { getMascotas } = useGetMascotas();
    const [IsLoading, setIsLoading] = useState<boolean>(false);
    const [Mascotas, setMascotas] = useState<IMascota[]>([]);


    const searchMascotas = async () => {
        setIsLoading(true);
        console.log("Buscando mascotas")
        var res = await getMascotas(initialRequest);
        setMascotas(res.data);
        setIsLoading(false)
    };

    return {
        IsLoading,
        Mascotas,
        searchMascotas
    }
}

export default useMascotas;