import React from "react";
import createStore from "./Store";
import { Provider } from "react-redux";
import SearchBar from "./components/SearchBar";
import ResultsContainer from "./components/ResultsContainer";
import FilterButtons from './components/FilterButtons';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';

const store = createStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <SearchBar />
        <div className="allContainer">
          <FilterButtons />
          <ResultsContainer />
          <LoginModal />
          <SignupModal />
        </div>
      </Provider>
    </div>
  );
}

export default App;
