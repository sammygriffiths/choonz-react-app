import React, { Component } from 'react';
import Track from './Track';
import VirtualList from 'react-virtual-list';

class TrackList extends Component {
    getTitle() {
        if (!this.props.title) {
            return '';
        }

        return <li class="title">{this.props.title}</li>;
    }

    render() {
        const itemHeight = 100;
        if (this.props.virtual !== false) {
            const MyList = ({virtual, itemHeight}) => (
                <ul style={virtual.style} className="track-list">
                    {this.getTitle()}
                    {virtual.items.map(track => (
                        <Track key={track.id} content={track} height={itemHeight} showImage={this.props.showImage} />
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
                return <Track key={artist.id} content={artist} height={itemHeight} showImage={this.props.showImage} />;
            });

            return <ul className="track-list">{this.getTitle()}{tracks}</ul>;
        }
    }
}

export default TrackList;
