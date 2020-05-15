import React from "react";
import createStore from "./Store";
import { Provider } from "react-redux";
import SearchBar from "./components/SearchBar";
import ResultsContainer from "./components/ResultsContainer";
import Logo from "./components/Logo";

const store = createStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="allContainer">
          <Logo />
          <SearchBar />
          <ResultsContainer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
