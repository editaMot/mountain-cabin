import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { NUM_PER_PAGE } from "../../utils/constants";
import "./Pagination.scss";

const Pagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const numOfPage = Math.ceil(count / NUM_PER_PAGE);

  const nextPage = () => {
    const next = currentPage === numOfPage ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  };
  const previousPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  if (numOfPage <= 1) return null;

  return (
    <div className="pagination">
      <p className="pagination__content">
        Showing <span>{(currentPage - 1) * NUM_PER_PAGE + 1}</span> to{" "}
        <span>
          {currentPage === numOfPage ? count : currentPage * NUM_PER_PAGE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <div className="pagination__buttons">
        <button
          className="pagination__btn"
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft /> <span>Previous</span>
        </button>
        <button
          className="pagination__btn"
          onClick={nextPage}
          disabled={currentPage === numOfPage}
        >
          <span>Next</span> <HiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
