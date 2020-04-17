import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import API from '../../utils/API';

function ResultsContainer() {

    const [showSearchResults, setShowSearchResults] = useState("");
    const searchTerm = useSelector(state => state.searchTerm.searchTerm.searchTerm);
    // console.log(searchTerm)

    useEffect(() => {
        API.search('shows?q=' + searchTerm)
        .then(res => setShowSearchResults(res.data), console.log(showSearchResults))
        .catch(err => console.log(err));
    }, [searchTerm, showSearchResults])

    return (
      <div className="ResultsContainer">

      </div>
    );
  }
  
  export default ResultsContainer;
  