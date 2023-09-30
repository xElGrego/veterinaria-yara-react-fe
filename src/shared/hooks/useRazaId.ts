import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RazasResponse } from "../../domain/Razas/Razas";

const useRazonSocialPorIdEmpresa = () => {
    const razas = useSelector((store: any) => store.razas.razas);
    const obtenerRazonSocialPorId = (idRaza: Guid) => {
        const razaEncontrada = razas.find((empresa: RazasResponse) => empresa.idRaza === idRaza);
        return razaEncontrada ? razaEncontrada.nombre : "Empresa no encontrada";
    };
    const memoizedFunction = useMemo(() => obtenerRazonSocialPorId, [razas]);
    return memoizedFunction;
};

export default useRazonSocialPorIdEmpresa;