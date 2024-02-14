import { HiMagnifyingGlass } from "react-icons/hi2";
import "./Search.scss";
import { useSearchParams } from "react-router-dom";

const Search = ({ searchField }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    searchParams.set(searchField, e.target.value);

    if (searchParams.get("search")) searchParams.set("search", e.target.value);

    setSearchParams(searchParams);
  };

  return (
    <div className="search">
      <HiMagnifyingGlass />
      <input
        className="search__input"
        placeholder="Search..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Search;
