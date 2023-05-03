import { memo } from "react";
import loop from "../../Images/loop.svg";
import("./SearchBar.scss");
const SearchBar = memo(() => {
  return (
    <>
      <label className="searchBar-label">
        <input className="SearchBar" type="text" placeholder="Movie search" />
        <img
          src={loop}
          alt="loop"
          className="loop"
          width="14px"
          height="14px"
        />
      </label>
    </>
  );
});

export default SearchBar;
