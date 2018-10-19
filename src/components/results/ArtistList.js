import React, { Component } from 'react';
import Artist from './Artist';

class ArtistList extends Component {
    render() {
        let artists = this.props.artists.items.map(artist => {
            return <Artist key={artist.id} content={artist} />;
        });

        return <ul className="artist-list">{artists}</ul>;
    }
}

export default ArtistList;
