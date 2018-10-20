import React, { Component } from 'react';
import Track from './Track';
import VirtualList from 'react-virtual-list';

class TrackList extends Component {
    render() {
        const itemHeight = 100;
        if (this.props.virtual !== false) {
            const MyList = ({virtual, itemHeight}) => (
                <ul style={virtual.style} className="track-list">
                    {virtual.items.map(track => (
                        <Track key={track.id} content={track} height={itemHeight} />
                    ))}
                </ul>
            );
            const List = VirtualList(this.props.listOptions)(MyList);

            return <List
                items={this.props.tracks}
                itemHeight={itemHeight}
            />
        } else {
            let tracks = this.props.tracks.map(artist => {
                return <Track key={artist.id} content={artist} height={itemHeight} />;
            });

            return <ul className="track-list">{tracks}</ul>;
        }
    }
}

export default TrackList;
