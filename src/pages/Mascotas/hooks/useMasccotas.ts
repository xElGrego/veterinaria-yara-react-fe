import { useState } from "react";
import { MascotaRequest } from "../../../domain/Mascotas/MascotaRequest"
import { IMascota } from "../../../domain/Mascotas/IMascota";

const useMascotas = (initialRequest: MascotaRequest) => {
    const [IsLoading, setIsLoading] = useState<boolean>(false);
    const [Mascotas, setMascotas] = useState<IMascota[]>([]);


    const searchMascotas = async () => {
        setIsLoading(true);
        console.log("Buscando mascotas")
        setIsLoading(false)
    };


    return {
        IsLoading,
        Mascotas,
        searchMascotas
    }
}

export default useMascotas;