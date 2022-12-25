import { useState } from "react";
import { UsePagination } from "types/types";

export const usePagination: UsePagination = ({ contentPerPage, amount }) => {
  const [page, setPage] = useState<number>(1);

  const pageAmount = Math.ceil(amount / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  const changePage = (direction: boolean) => {
    setPage((page) => {
      if (direction) {
        if (page === pageAmount) {
          return 1;
        }
        return page + 1;
      } else {
        if (page === 1) {
          return pageAmount;
        }
        return page - 1;
      }
    });
  };
  return {
    totalPages: pageAmount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    firstContentIndex,
    lastContentIndex,
    page: page,
  };
};
