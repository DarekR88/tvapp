import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from '../../Features/SearchTerm/reducer'
 
function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      actions.active({
        searchTerm
      })
    );
  };

  return (
    <div className="SearchBar">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          id="search-field"
          name="search-field"
          placeholder="Search for a TV show or Actor"
          value={searchTerm}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}

export default SearchBar;
