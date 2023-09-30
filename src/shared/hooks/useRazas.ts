import { useEffect, useState } from "react";
import useGetRazas from "../../application/Razas/getRazas";
import { RazasResponse } from "../../domain/Razas/Razas";
import { useDispatch } from "react-redux";
import { loadRaza } from "../../redux/Razas/razas.slice";


const useRazas = () => {

    const { getAllRazas } = useGetRazas();

    const dispatch = useDispatch();

    const [RazasList, setRazasList] = useState<RazasResponse[]>([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [IsLoading, setIsLoading] = useState<boolean>(true);

    const GetRazasOptions = (): { title: string; value: string }[] => {
        try {
            return RazasList.map((el: RazasResponse) => ({
                title: el.nombre || "",
                value: el.idRaza || "",
            }));
        } catch (error) {
            return [];
        }
    };

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const data = await getAllRazas();
                setRazasList([...data]);
                dispatch(loadRaza({ razas: data }));
                setDataLoaded(true);
                setIsLoading(false);

            } catch (ex) {
            } finally {
            }
        })();
    }, []);

    return {
        GetRazasOptions,
        RazasList,
        dataLoaded,
        IsLoading
    };
}

export default useRazas;
