import React, { Component } from 'react';
import SearchBar from '../search-bar/SearchBar';
import Results from '../results/Results';
import Menu from './Menu'
import '../../css/App.css';

class App extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App" id="outer-container">
        <Menu />
        <div id="page-wrap">
          <header className="App-header">
            <SearchBar />
          </header>
          <main className="App-main">
            <Results />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
