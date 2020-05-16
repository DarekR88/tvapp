import React from "react";
import createStore from "./Store";
import { Provider } from "react-redux";
import SearchBar from "./components/SearchBar";
import ResultsContainer from "./components/ResultsContainer";
import FilterButtons from './components/FilterButtons';

const store = createStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="allContainer">
          <SearchBar />
          <FilterButtons />
          <ResultsContainer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
