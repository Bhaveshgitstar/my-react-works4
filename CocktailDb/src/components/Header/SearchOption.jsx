import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchOption = () => {
  const searchItem = useRef();
  const navigate = useNavigate();

  const handleEnter = async (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      const search = searchItem.current.value;
      searchItem.current.value = "";
      navigate(`/search/${search}`, { state: { id: search } });
    }
  };
  return (
    <form role="search">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        ref={searchItem}
        onKeyDown={(e) => {
          handleEnter(e);
        }}
        onKeyUp={(e) => {
          handleKeyUp(e);
        }}
      />
    </form>
  );
};
export default SearchOption;
