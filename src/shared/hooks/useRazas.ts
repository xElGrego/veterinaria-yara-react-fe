import { useEffect } from "react";
import useGetRazas from "../../application/Razas/getRazas";


const useRazas = () => {

    const { getAllRazas } = useGetRazas();

    useEffect(() => {
        (async () => {
            try {
                const data = await getAllRazas();
                /*  const dataParsed: InputSelectOptions[] = data.map(
                     (el: RazasResponse) => {
                         return { title: el.nombre, value: el.idRaza };
                     }
                 );
                    setEstadosList(dataParsed); */
            } catch (ex) {
            } finally {
            }
        })();
    }, []);

    return {

    };
}

export default useRazas;
