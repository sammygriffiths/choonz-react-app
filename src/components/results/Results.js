import React, { Component } from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import '../../css/Results.css';
import TrackList from './TrackList';
import ArtistList from './ArtistList';

class Results extends Component {
    render() {
        if (!(this.props.value instanceof Object) || Object.keys(this.props.value).length < 1) return null;
        return (
            <Tabs>
                <header className="tab-links">
                    <TabLink to="tracks">Tracks</TabLink>
                    <TabLink to="artists">Artists</TabLink>
                    <TabLink to="albums">Albums</TabLink>
                </header>

                <TabContent for="tracks"><TrackList tracks={this.props.value.tracks} /></TabContent>
                <TabContent for="artists"><ArtistList artists={this.props.value.artists} /></TabContent>
                <TabContent for="albums">{JSON.stringify(this.props.value.albums.items)}</TabContent>
            </Tabs>
        );
    }
}

export default Results;
