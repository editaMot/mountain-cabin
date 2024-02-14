import { useSearchParams } from "react-router-dom";
import "./Filter.scss";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParamas] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);

    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParamas(searchParams);
  };

  return (
    <div className="filter">
      {options.map((option) => (
        <button
          className={`filter__btn ${
            option.value === currentFilter ? "filter__btn--active" : ""
          }`}
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
