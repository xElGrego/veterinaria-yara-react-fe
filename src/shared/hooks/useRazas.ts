import { useEffect, useState } from "react";
import useGetRazas from "../../application/Razas/getRazas";
import { RazasResponse } from "../../domain/Razas/Razas";
import { useDispatch } from "react-redux";
import { loadEmpresa } from "../../redux/User/user.slice";


const useRazas = () => {
    const dispatch = useDispatch();

    const [EmpresaList, setEmpresaList] = useState<RazasResponse[]>([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [IsLoading, setIsLoading] = useState<boolean>(true);


    const { getAllRazas } = useGetRazas();



    const GetEmpresasOptions = (): any => {
        try {
            return EmpresaList.map((el) => {
                return {
                    title: el.nombre || "",
                    value: el.idRaza || "",
                };
            });
        } catch (error) {
        }
    };



    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const data = await getAllRazas();
                setEmpresaList([...data]);
                dispatch(loadEmpresa({ empresas: data }));
                setDataLoaded(true);
                setIsLoading(false);

            } catch (ex) {
            } finally {
            }
        })();
    }, []);

    return {
        GetEmpresasOptions,
        EmpresaList,
        dataLoaded,
        IsLoading
    };
}

export default useRazas;
