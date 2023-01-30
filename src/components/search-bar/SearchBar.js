import React from "react";
import "../../styles/SearchBar.styles.scss";

const SearchBar = ({ searchTerm, searchHandler }) => {
  return (
    <input
      placeholder="Search Cards"
      value={searchTerm}
      onChange={searchHandler}
    />
  );
};

export default SearchBar;
