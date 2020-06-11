import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import NoImage from "../../photos/no-image.png";
import Cropped from "../../photos/croppedNoImage.png"
function ResultsContainer() {
  const [activeShows, setActiveShows] = useState(true);
  const [activeActors, setActiveActors] = useState(true);
  const [actorResults, setActorResults] = useState(true);
  const [showResults, setShowResults] = useState(true);
  const showSearchResults = useSelector(
    (state) => state.searchResults.searchResults.showSearchResults
  );
  const peopleSearchResults = useSelector(
    (state) => state.peopleResults.peopleSearchResults.peopleSearchResults
  );
  const formChange = useSelector(
    (state) => state.formChange.formChange.formChange
  );
  const filterCheck = useSelector(
    (state) => state.filterCheck.filterCheck.filterCheck
  );

  const resultFilter = (filterCheck) => {
    switch (filterCheck) {
      case "shows":
        setActiveShows(true);
        setActiveActors(false);
        break;
      case "actors":
        setActiveActors(true);
        setActiveShows(false);
        break;
      case "AaS":
        setActiveShows(true);
        setActiveActors(true);
        break;
      default:
        setActiveShows(true);
        setActiveActors(true);
    }
  };

  useEffect(() => {
    resultFilter(filterCheck);
  }, [filterCheck]);

  const showResultsFunc = (searchResults) => {
    if (searchResults && searchResults.length) {
      // setShowResults(true)
      const newArr = searchResults.map((i) => {
        if (i.show.image) {
          if (i.show.image.medium) {
            return (
              <div className="infoContainer">
                <Card
                  name={i.show.name}
                  type={i.show.type}
                  genres={i.show.genres.join(", ")}
                  url={i.show.url}
                  image={i.show.image.medium}
                />
              </div>
            );
          }
        } else {
          return (
            <div className="infoContainer">
              <Card
                name={i.show.name}
                type={i.show.type}
                genres={i.show.genres.join(", ")}
                url={i.show.url}
                image={Cropped}
              />
            </div>
          );
        }
      });
      return newArr;
    } else {
      console.log("no data")
      // setShowResults(false)
    }
  };

  const peopleResultsFunc = (searchResults) => {
    if (searchResults && searchResults.length) {
      // setActorResults(true)
      const peopleArr = searchResults.map((i) => {
        if (i.person.country && i.person.birthday && i.person.image) {
          if (i.person.country.name) {
            return (
              <div className="infoContainer">
                <Card
                  name={i.person.name}
                  type={
                    i.person.country.name
                      ? "Country: " + i.person.country.name
                      : null
                  }
                  genres={
                    i.person.birthday ? "Birthday: " + i.person.birthday : null
                  }
                  dDay={
                    i.person.deathday ? "Deceased: " + i.person.deathday : null
                  }
                  url={i.person.url}
                  image={i.person.image.medium}
                />
              </div>
            );
          }
        } else {
          return (
            <div className="infoContainer">
              <Card
                name={i.person.name}
                type={
                  i.person.birthday ? "Birthday: " + i.person.birthday : null
                }
                url={i.person.url}
                image={Cropped}
              />
            </div>
          );
        }
      });
      return peopleArr;
    } else {
      console.log("no data")
      // setActorResults(false)
    }
  };

  return (
    <div className="ResultsContainer">
        <p className={formChange && activeShows ? "active-title" : "not-active-title"}>
          TV Shows
        </p>
      <div
        className={activeShows && formChange ? "active" : "not-active"}
        // className={`${isShown ? 'visible' : null} ${isShown ? 'visible' : null}`}
      >
        {showResultsFunc(showSearchResults)}
      </div>
        <p className={formChange && activeActors ? "active-title" : "not-active-title"}>
          Actors
        </p>
      <div
        className={activeActors && formChange ? "active" : "not-active"}
      >
        {peopleResultsFunc(peopleSearchResults)}
      </div>
    </div>
  );
}

export default ResultsContainer;
