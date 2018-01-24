import React, { Component } from 'react';
import SearchBar from '../search-bar/SearchBar';
import Results from '../results/Results';
import Menu from './Menu';
import '../../css/App.css';
import menuIcon from '../../img/bars.svg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
    };
  }

  renderMenu(visible, classes = []) {
    if (visible) {
      classes.push('show');
    }
    return <Menu classes={classes.join(' ')} />
  }

  render() {
    return (
      <div className="App">
        { this.renderMenu(this.state.menuVisible, ['App-menu']) }
        <header className="App-header">
          <a href="#" onClick={() => { this.setState({ menuVisible: !this.state.menuVisible }) }} className="App-menu-link">
            <img src={menuIcon} />
          </a>
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
