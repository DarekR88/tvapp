import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { actions } from '../../Features/SearchTerm/reducer'
import { actions } from '../../Features/SearchResults/reducer';
import API from '../../utils/API';
 
function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState();


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // dispatch(
    //   actions.active({
    //     searchTerm
    //   })
    // );
    
    API.search('shows?q=' + searchTerm)
    .then(res => setSearchResults(res.data))
    .catch(err => console.log(err));
  };

  useEffect(() => {
    if (searchResults) {
      console.log(searchResults)
      dispatch(
        actions.results({
          searchResults
        })
      )
    }
  }, [searchResults])

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
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default SearchBar;
