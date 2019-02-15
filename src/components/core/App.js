import React, { Component } from 'react';
import SearchBar from '../search-bar/SearchBar';
import Results from '../results/Results';
import Menu from './Menu'
import '../../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: {}
    }
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }

  updateSearchResults(results) {
    let state = this.state;
    state['searchResults'] = results;
    this.setState(state);
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App" id="outer-container">
        <Menu />
        <div id="page-wrap">
          <header className="App-header">
            <SearchBar searchCallback={this.updateSearchResults} />
          </header>
          <main className="App-main">
            <Results value={this.state.searchResults} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
