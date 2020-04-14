import React from 'react';
import { Provider } from 'react-redux'
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider>
    <div className="App">
      <SearchBar />
    </div>
    </Provider>
  );
}

export default App;
