import { useEffect, useState } from "react";
import { IMascota, MascotaRequest } from "../../../domain/Mascotas/IMascota";
import useGetMascotas from "../../../application/Mascotas/getMascotas";
import usePagination from "../../../shared/hooks/usePagination";

const useMascotas = (initialRequest: MascotaRequest) => {
    const { getMascotas } = useGetMascotas();
    const [IsLoading, setIsLoading] = useState<boolean>(false);
    const [Mascotas, setMascotas] = useState<IMascota[]>([]);
    const [TotalDocs, setTotalDocs] = useState<number>(0);

    const {
        ActualPage,
        totalPage,
        resetPagination,
        buttons: { nextPage, prevPage, startPage, lastPage },
    } = usePagination(10, TotalDocs);

    const searchMascotas = async () => {
        setIsLoading(true);
        var res = await getMascotas(initialRequest);
        setMascotas(res.data);
        setIsLoading(false)
        setTotalDocs(res.pagination.total);
    };

    useEffect(() => {
        searchMascotas();
    }, [initialRequest]);

    return {
        IsLoading,
        Mascotas,
        ActualPage,
        totalPage,
        TotalDocs,
        resetPagination,
        searchMascotas,
        nextPageTable: async () => {
            nextPage();
        },
        prevPageTable: async () => {
            prevPage();
        },
        startPageTable: async () => {
            startPage();
        },
        lastPageTable: async () => {
            lastPage();
        },
    }
}

export default useMascotas;