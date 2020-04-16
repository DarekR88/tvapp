import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import API from '../../utils/API';

function ResultsContainer() {

    const [showSearchResults, setShowSearchResults] = useState("");
    const searchTerm = useSelector(state => state.searchTerm.searchTerm.searchTerm);
    console.log(searchTerm)

    useEffect(() => {

    }, [searchTerm])
    return (
      <div className="ResultsContainer">

      </div>
    );
  }
  
  export default ResultsContainer;
  