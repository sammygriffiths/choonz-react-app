import React, { Component } from 'react';
import SearchBar from '../search-bar/SearchBar';
import Results from '../results/Results';
import Menu from './Menu';
import '../../css/App.css';
import menuIcon from '../../img/bars.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="#" className="App-menu-link">
            <img src={menuIcon} />
          </a>
          <Menu />
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
