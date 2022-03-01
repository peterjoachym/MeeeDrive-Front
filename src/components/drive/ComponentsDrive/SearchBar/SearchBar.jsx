import React from "react";

const SearchBar = () => {
  return (
    <>
      <form className="search__bar__form" onChange="">
        <label htmlFor="search" className="search__label">
          <input
            id="search__bar"
            type="text"
            className="search__input"
            placeholder="Search Drive..."
            value=""
            onChange=""
          />
        </label>
      </form>
    </>
  );
};

export default SearchBar;
