import React, { Component } from 'react';
import Modal from 'react-modal';
import '../../css/Artist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import spotify from '../../helpers/spotify';
import TrackList from './TrackList';

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistData: props.content,
            modalIsOpen: false,
            modalContent: '',
            renderModal: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getModalContent = this.getModalContent.bind(this);
        this.container = React.createRef();
    }

    async openModal(e) {
        e.preventDefault();
        this.setState({ modalIsOpen: true });
        this.setState({ modalContent: await this.getModalContent() });
    }

    closeModal(e) {
        e.preventDefault();
        this.setState({ modalIsOpen: false });
    }

    async getModalContent() {
        let fullArtistData = await spotify.getArtist(this.state.artistData.id);
        return (
            <div>
                <a onClick={this.closeModal} className="modal-close"><FontAwesomeIcon icon={faTimes} /></a>
                <h1>{this.state.artistData.name}</h1>
                { this.state.image }
                <div className="divider"></div>
                <TrackList virtual={false} tracks={fullArtistData.topTracks.body.tracks} />
            </div>
        );
    }

    render() {
        this.state.image = (this.state.artistData.images.length >= 2) ? <img src={this.state.artistData.images[1].url} /> : '' ;
        return (
            <li className="artist">
                <a href={"/artist/" + this.state.artistData.id} onClick={this.openModal} className="modal-open">
                    {this.state.image}
                    <h2>{this.state.artistData.name}</h2>
                </a>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    ref={this.container}
                >
                    {this.state.modalContent}
                </Modal>
            </li>
        );
    }
}

export default Artist;
