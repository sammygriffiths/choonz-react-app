import React, { Component } from 'react';
import sonosHelper from '../../helpers/sonos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner';
import '../../css/Loader.css';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = props.content;
        this.state.height = props.height;
        this.state.showImage = (this.props.showImage !== false) ? true : false;
        this.state.loading = false;
        this.state.addingFailed = false;
        this.state.songAdded = false;
    }

    addToSonos(e) {
        e.preventDefault();
        const delay = 1500;
        this.setState({loading: true});

        sonosHelper.add(this.state.id).then((response) => {
            console.log(response);
            this.setState({loading: false});
            this.setState({ songAdded: true });
            setTimeout(() => {
                this.setState({ songAdded: false });
            }, delay);
        }).catch((e) => {
            console.error(e);
            this.setState({loading: false});
            this.setState({addingFailed: true});
            setTimeout(() => {
                this.setState({addingFailed: false});
            }, delay);
        });
    }

    getLoader() {
        return (
            <div className="loader">
                <Loader type="ThreeDots" color="#149c82" height="100" width="100" />
            </div>
        );
    }

    getError() {
        return (
            <div className="loader failed">
                <FontAwesomeIcon icon={faTimes} />
            </div>
        );
    }

    getSuccess() {
        return (
            <div className="loader success">
                <FontAwesomeIcon icon={faCheck} />
            </div>
        );
    }

    render() {
        let image = (this.state.showImage)? <img src = { this.state.album.images[1].url } /> : '';
        let style = { height: this.state.height };
        if (!this.state.showImage) style.paddingLeft = "10px";
        let loader = (this.state.loading) ? this.getLoader() : '';
        let error = (this.state.addingFailed) ? this.getError() : '';
        let success = (this.state.songAdded) ? this.getSuccess() : '';

        return (
            <li className="track" style={style}>
                {loader}
                {error}
                {success}
                {image}
                <p>{this.state.name}</p>
                <a href={process.env.REACT_APP_QUEUE_URL + '/songs'} onClick={this.addToSonos.bind(this)}><FontAwesomeIcon icon={faPlusSquare} /></a>
            </li>
        );
    }
}

export default Track;
