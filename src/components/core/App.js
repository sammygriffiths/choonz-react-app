import React, { Component } from 'react';
import SearchBar from '../search-bar/SearchBar';
import Results from '../results/Results';
import '../../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <main className="App-main">
          <Results />
        </main>
      </div>
    );
  }
}

export default App;
