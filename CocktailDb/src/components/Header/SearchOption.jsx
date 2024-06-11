import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOption = () => {
  const searchItem = useRef();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate(`/search/${search}`, { state: { id: search } });
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  return (
    <form role="search">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        ref={searchItem}
        // onKeyDown={(e) => {
        //   handleEnter(e);
        // }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};
export default SearchOption;
