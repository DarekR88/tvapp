import React from 'react';
import createStore from './Store';
import { Provider } from 'react-redux';
import SearchBar from './components/SearchBar';

const store = createStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SearchBar />
      </Provider>
    </div>
  );
}

export default App;
