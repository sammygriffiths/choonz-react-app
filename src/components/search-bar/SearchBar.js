import React, { Component } from 'react';
import SearchIcon from 'react-icons/lib/fa/search';
import spotifyHelper from '../../helpers/spotify';
import '../../css/SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            submitTimer: null
        };
    }

    onChange = (e) => {
        clearTimeout(this.state.submitTimer);
        const state = this.state
        state[e.target.name] = e.target.value;
        state['submitTimer'] = setTimeout(this.onSubmit, 1000);
        this.setState(state);
    }

    onSubmit = (e) => {
        clearTimeout(this.state.submitTimer);
        typeof e !== 'undefined' && e.preventDefault();
        const term = this.state.search;
        spotifyHelper.search(term);
    }

    render() {
        return (
            <form className="App-search" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Search..." name="search" onChange={this.onChange} />
                <SearchIcon className="App-search-icon" />
            </form>
        );
    }
}

export default SearchBar;
