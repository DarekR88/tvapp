import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions as peopleActions } from '../../Features/PeopleResults/reducer';
import { actions as showActions } from "../../Features/SearchResults/reducer";
import API from "../../utils/API";

function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState();
  const [peopleSearchResults, setPeopleSearchResults] = useState();

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
    API.search("people?q=" + searchTerm)
      .then((res) => setPeopleSearchResults(res.data))
      .catch((err) => console.log(err));

    API.search("shows?q=" + searchTerm)
      .then((res) => setShowSearchResults(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (showSearchResults) {
      // console.log(showSearchResults)
      dispatch(
        showActions.results({
          showSearchResults,
        })
      );
    }

    if(peopleSearchResults){
      dispatch(
        peopleActions.peopleResults({
          peopleSearchResults,
        })
      );
    }
  }, [showSearchResults, peopleSearchResults]);

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
