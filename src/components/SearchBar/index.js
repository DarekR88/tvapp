import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as peopleActions } from "../../Features/PeopleResults/reducer";
import { actions as showActions } from "../../Features/SearchResults/reducer";
import API from "../../utils/API";
import SearchIcon from "../../photos/searchIcon.png";
import { actions as formActions } from "../../Features/FormChange/reducer";
import { actions as loginActions } from "../../Features/Loggedin/reducer";
import { actions as modalActions } from "../../Features/Modal/reducer";
import Logo from "../Logo";

function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState();
  const [peopleSearchResults, setPeopleSearchResults] = useState();
  const formChange = useSelector(
    (state) => state.formChange.formChange.formChange
  );
  const loggedIn = useSelector((state) => state.loggedIn.loggedIn);

  const loginClick = (event) => {
    event.preventDefault();
    dispatch(
      modalActions.modalOpen({
        modalOpen: true,
      })
    );
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      formActions.change({
        formChange: true,
      })
    );
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

    if (peopleSearchResults) {
      dispatch(
        peopleActions.peopleResults({
          peopleSearchResults,
        })
      );
    }
  }, [showSearchResults, peopleSearchResults]);

  return (
    <div className={formChange ? "searchBarContainer" : "searchBarContainer-L"}>
      <Logo />
      <div className="searchBar">
        <form className="searchForm" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="search"
            id="search-field"
            name="search-field"
            placeholder="Search for a TV show or Actor"
            value={searchTerm}
          />
          <button type="submit" value="search" id="submitButton">
            <img className="search-icon" src={SearchIcon} alt="Search" />
          </button>
        </form>
      </div>
      <button
        className={`${formChange ? "loginButton button-S" : "loginButton button-L"} ${
          loggedIn ? "hidden" : null
        }`}
        type="submit"
        value="search"
        id="loginButton"
        onClick={loginClick}
      >
        Login
      </button>
    </div>
  );
}

export default SearchBar;
