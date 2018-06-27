import React, { Component } from 'react';
import Track from './Track';

class TrackList extends Component {
    render() {
        let tracks = [];
        this.props.tracks.items.forEach(track => {
            tracks.push(<Track key={track.id} content={track} />);
        });
        return <ul className="track-list">{tracks}</ul>;
    }
}

export default TrackList;
