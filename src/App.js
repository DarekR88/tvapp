import React from 'react';
import createStore from './Store';
import { Provider } from 'react-redux';
import SearchBar from './components/SearchBar';
// import ResultsContainer from './components/ResultsContainer';

const store = createStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SearchBar />
        {/* <ResultsContainer /> */}
      </Provider>
    </div>
  );
}

export default App;
