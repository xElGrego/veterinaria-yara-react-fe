import { useEffect, useState } from "react";
import usePagination from "../../../shared/hooks/usePagination";
import { User } from "../../../domain/User/User";
import { useDispatch } from "react-redux";
import { loadUsuarios } from "../../../redux/User/user.slice";
import { IUsuariosRequest } from "../../../domain/User/IUsuario";
import { useGetUsuarios } from "../../../application/Usuarios/getUsuarios";

export const useUsuarios = (initialRequest: IUsuariosRequest) => {
  const dispatch = useDispatch();
  const { getUsuarios } = useGetUsuarios();
  const [IsLoading, setIsLoading] = useState<boolean>(false);
  const [Mascotas, setMascotas] = useState<User[]>([]);
  const [TotalDocs, setTotalDocs] = useState<number>(0);

  const {
    ActualPage,
    totalPage,
    resetPagination,
    buttons: { nextPage, prevPage, startPage, lastPage },
  } = usePagination(10, TotalDocs);

  const searchUsuarios = async () => {
    setIsLoading(true);
    var res = await getUsuarios(initialRequest);
    setMascotas(res.data);
    dispatch(loadUsuarios(res.data));
    setIsLoading(false);
    setTotalDocs(res.pagination.total);
  };

  useEffect(() => {
    searchUsuarios();
  }, [initialRequest]);

  return {
    IsLoading,
    Mascotas,
    ActualPage,
    totalPage,
    TotalDocs,
    resetPagination,
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
  };
};
