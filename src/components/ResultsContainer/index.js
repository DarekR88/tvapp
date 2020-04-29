import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Card from '../Card';

function ResultsContainer() {

    const searchResults = useSelector(state => state.searchResults.searchResults.searchResults);
  
    const resultsFunc = (searchResults) => {
      if (searchResults){
        const newArr = searchResults.map( i => {
          console.log(i.show.name)
          return( 
            <Card 
              name={i.show.name}
              type={i.show.type}
              genres={i.show.genres.join(', ')}

            />
          )
        })
        return newArr
      }
    }

    return (
      <div className="ResultsContainer">
        {resultsFunc(searchResults)}
      </div>
    );
  }
  
  export default ResultsContainer;
  