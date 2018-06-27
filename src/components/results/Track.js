import React, { Component } from 'react';
import sonosHelper from '../../helpers/sonos';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = props.content;
    }

    addToSonos(e) {
        e.preventDefault();
        sonosHelper.add(this.state.id).then(console.log);
    }

    render() {
        return (
            <li className="track">
                <h3>{this.state.name}</h3>
                <a href={process.env.REACT_APP_QUEUE_URL + '/songs'} onClick={this.addToSonos.bind(this)}>Add</a>
            </li>
        );
    }
}

export default Track;
