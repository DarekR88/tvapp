import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import NoImage from "../../photos/no-image.png";

function ResultsContainer() {
  const [activeShows, setActiveShows] = useState(false);
  const [activeActors, setActiveActors] = useState(false);
  const showSearchResults = useSelector(
    (state) => state.searchResults.searchResults.showSearchResults
  );
  const peopleSearchResults = useSelector(
    (state) => state.peopleResults.peopleSearchResults.peopleSearchResults
  );
  const formChange = useSelector(
    (state) => state.formChange.formChange.formChange
  );

  const showResultsFunc = (searchResults) => {
    if (searchResults) {
      // setActiveShows(true)
      const newArr = searchResults.map((i) => {
        if (i.show.image) {
          if (i.show.image.medium) {
            return (
              <div className="showContainer">
                <Card
                  name={"Name: " + i.show.name}
                  type={"Type: " + i.show.type}
                  genres={"Genre(s): " + i.show.genres.join(", ")}
                  url={"More Info: " + i.show.url}
                  image={i.show.image.medium}
                />
              </div>
            );
          }
        } else {
          return (
            <div className="showContainer">
              <Card
                name={"Name: " + i.show.name}
                type={"Type: " + i.show.type}
                genres={"Genre(s): " + i.show.genres.join(", ")}
                url={"More Info: " + i.show.url}
                image={NoImage}
              />
            </div>
          );
        }
      });
      return newArr;
    }
  };

  const peopleResultsFunc = (searchResults) => {
    if (searchResults) {
      // setActiveActors(true)
      const peopleArr = searchResults.map((i) => {
        if (i.person.country && i.person.birthday && i.person.image) {
          if (i.person.country.name) {
            return (
              <div className="peopleContainer">
                <Card
                  name={"Name: " + i.person.name}
                  type={"Country: " + i.person.country.name}
                  genres={"Birthday: " + i.person.birthday}
                  dDay={"Deceased" + i.person.deathday}
                  url={"More Info: " + i.person.url}
                  image={i.person.image.medium}
                />
              </div>
            );
          }
        } else {
          return (
            <Card
              name={"Name: " + i.person.name}
              type={"Country: " + i.person.country.name}
              url={"More Info: " + i.person.url}
              image={NoImage}
            />
          );
        }
      });
      return peopleArr;
    }
  };

  return (
    <div className="ResultsContainer">
      <p className={formChange ? "active" : "not-active"}>TV Shows</p>
      {showResultsFunc(showSearchResults)}
      <p className={formChange ? "active" : "not-active"}>Actors</p>
      {peopleResultsFunc(peopleSearchResults)}
    </div>
  );
}

export default ResultsContainer;
