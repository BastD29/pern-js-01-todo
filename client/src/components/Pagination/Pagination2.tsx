import { FC } from "react";
import { usePaginationContext } from "../../hooks/usePaginationContext";
import { SET_PAGE } from "../../constants/actions";
import { useSearchParams } from "react-router-dom";
import style from "./Pagination.module.scss";

const Pagination: FC = () => {
  const {
    dispatch,
    state: { pagination },
  } = usePaginationContext();

  const { page, totalPages } = pagination;

  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = async (page: number) => {
    dispatch({ type: SET_PAGE, payload: page });
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: page.toString(),
    });
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === page}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className={style["pagination"]}>
      <button disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>
        Previous
      </button>
      {renderPageNumbers()}
      <button
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
