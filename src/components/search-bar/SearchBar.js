import React, { Component } from 'react';
import SearchIcon from 'react-icons/lib/fa/search';
import spotifyHelper from '../../helpers/spotify';
import '../../css/SearchBar.css';
import Loader from 'react-loader-spinner';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            submitTimer: null,
            searching: false
        };
    }

    onChange = (e) => {
        clearTimeout(this.state.submitTimer);
        let state = this.state
        state[e.target.name] = e.target.value;
        state['submitTimer'] = setTimeout(this.onSubmit, 1000);
        this.setState(state);
    }

    onSubmit = async (e) => {
        this.setState({searching: true});
        clearTimeout(this.state.submitTimer);
        typeof e !== 'undefined' && e.preventDefault();
        const term = this.state.search;
        let results = await spotifyHelper.search(term);
        this.props.searchCallback(results);
        this.setState({searching: false});
    }

    getLoader() {
        return (
            <div className="loader">
                <Loader type="ThreeDots" color="#149c82" height="100" width="100" />
            </div>
        );
    }

    render() {
        let loader = (this.state.searching) ? this.getLoader() : '';

        return (
            <form className="App-search" onSubmit={this.onSubmit}>
                { loader }
                <input type="text" placeholder="Search..." name="search" onChange={this.onChange} />
                <SearchIcon className="App-search-icon" />
            </form>
        );
    }
}

export default SearchBar;
