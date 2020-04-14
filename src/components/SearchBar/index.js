import React, { useState } from "react";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('Search for a TV Show')
    const [searchFocus, setSearchFocus] = useState(false)

    const handleChange = (event) => { 
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(searchTerm)
        // setSearchFocus(false)
    }

    const inputFocus = () => {
        setSearchTerm('')
        setSearchFocus(true)
    }

    let dynamicLabel;
    
    if (searchFocus) {
        dynamicLabel = <p>Search for a TV Show</p>
    }

  return (
    <div className="SearchBar">
      <form className='searchForm' onSubmit={handleSubmit}>
          {dynamicLabel}
        <input onFocus={inputFocus} onChange={handleChange} type="text" id="search-field" name="search-field" value={searchTerm}></input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}

export default SearchBar;
