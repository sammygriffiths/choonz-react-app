import React, { Component } from 'react';
import Track from './Track';
import VirtualList from 'react-virtual-list';

class TrackList extends Component {
    render() {
        const MyList = ({virtual, itemHeight}) => (
            <ul style={virtual.style} className="track-list">
                {virtual.items.map(track => (
                    <Track key={track.id} content={track} height={itemHeight} />
                ))}
            </ul>
        );

        const List = VirtualList()(MyList);

        return <List
            items={this.props.tracks.items}
            itemHeight={100}
        />
    }
}

export default TrackList;
