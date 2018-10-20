import React, { Component } from 'react';
import sonosHelper from '../../helpers/sonos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = props.content;
        this.state.height = props.height;
        this.state.showImage = (this.props.showImage !== false) ? true : false;
    }

    addToSonos(e) {
        e.preventDefault();
        sonosHelper.add(this.state.id).then(console.log).catch(console.error);
    }

    render() {
        let image = (this.state.showImage)? <img src = { this.state.album.images[1].url } /> : '';
        let style = { height: this.state.height };
        if (!this.state.showImage) {
            style.paddingLeft = "10px";
        }
        return (
            <li className="track" style={style}>
                {image}
                <p>{this.state.name}</p>
                <a href={process.env.REACT_APP_QUEUE_URL + '/songs'} onClick={this.addToSonos.bind(this)}><FontAwesomeIcon icon={faPlusSquare} /></a>
            </li>
        );
    }
}

export default Track;
