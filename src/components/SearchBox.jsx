import React from "react";

function SearchBox(props) {
  return (
    <div className="search-box">
      <input
        value={props.value}
        type="text"
        placeholder="take some search"
        className="input-search"
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
