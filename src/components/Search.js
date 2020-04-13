import React, { useState } from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={}
          value={}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Movie"
          id="search"
        />
        <br />
        <button onClick={} className="search-button">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
