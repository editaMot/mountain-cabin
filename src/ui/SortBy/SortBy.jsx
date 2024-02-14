import { useSearchParams } from "react-router-dom";
import Select from "../Select/Select";

const SortBy = ({ options }) => {
  const [searchParams, setSeacrhParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  const handleChange = (e) => {
    searchParams.set("sortBy", e.target.value);
    setSeacrhParams(searchParams);
  };

  return <Select options={options} onChange={handleChange} value={sortBy} />;
};

export default SortBy;
