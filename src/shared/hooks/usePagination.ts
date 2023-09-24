import { useState } from "react";

const usePagination = (itemsPerPage: number, totalRegistros: number) => {
  const [ActualPage, setActualPage] = useState<number>(1);

  const nextPage = () => {
    setActualPage((currentPage) => Math.min(currentPage + 1, totalPage));
  };

  const prevPage = () => {
    setActualPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const startPage = () => {
    setActualPage(1);
  };

  const lastPage = () => {
    setActualPage(totalPage);
  };

  const resetPagination = () => {
    setActualPage(1);
  };

  const totalPage = Math.max(Math.ceil(totalRegistros / itemsPerPage), 1);

  return {
    buttons: {
      nextPage,
      prevPage,
      startPage,
      lastPage,
    },
    resetPagination,
    ActualPage,
    totalPage,
  };
};

export default usePagination;
