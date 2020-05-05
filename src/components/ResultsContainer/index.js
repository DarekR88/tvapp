import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../Card";

function ResultsContainer() {
  const [activeShows, setActiveShows] = useState(false)
  const [activeActors, setActiveActors] = useState(false)
  const showSearchResults = useSelector(
    (state) => state.searchResults.searchResults.showSearchResults
  );
  const peopleSearchResults = useSelector(
    (state) => state.peopleResults.peopleSearchResults.peopleSearchResults
  );

  const showResultsFunc = (searchResults) => {
    if (searchResults) {
      // setActiveShows(true)
      const newArr = searchResults.map((i) => {
        return (
          <div className="showContainer">
            <Card
              name={i.show.name}
              type={i.show.type}
              genres={i.show.genres.join(", ")}
              url={i.show.url}
            />
          </div>
        );
      });
      return newArr;
    }
  };

  const peopleResultsFunc = (searchResults) => {
    if (searchResults) {
      // setActiveActors(true)
      const peopleArr = searchResults.map((i) => {
        if (
          i.person.country &&
          i.person.birthday &&
          i.person.deathday &&
          i.person.url
        ) {
          if (i.person.country.name) {
            return (
              <div className="peopleContainer">
                <Card
                  name={i.person.name}
                  type={i.person.country.name}
                  genres={i.person.birthday}
                  dDay={i.person.deathday}
                  url={i.person.url}
                />
              </div>
            );
          }
        } else {
          return (
            <Card 
            name={i.person.name}
            type={i.person.birthday}
            url={i.person.url}
            />
          )
        }
      });
      return peopleArr;
    }
  };

  return (
    <div className="ResultsContainer">
      {/* <p className={activeShows? 'active': 'not-active'}>TV Shows</p> */}
      {showResultsFunc(showSearchResults)}
      {/* <p className={activeActors? 'active': 'not-active'}>Actors</p> */}
      {peopleResultsFunc(peopleSearchResults)}
    </div>
  );
}

export default ResultsContainer;
