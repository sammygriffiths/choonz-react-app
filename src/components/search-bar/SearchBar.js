import React, { Component } from 'react';
import SearchIcon from 'react-icons/lib/fa/search'
import '../../css/SearchBar.css'

class SearchBar extends Component {
    render() {
        return (
            <form className="App-search">
                <input type="text" placeholder="Search..." />
                <SearchIcon className="App-search-icon" />
            </form>
        );
    }
}

export default SearchBar;
