import React, { Component } from 'react';

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = props.content;
    }

    render() {
        let image = (this.state.images.length >= 2) ? <img src={this.state.images[1].url} /> : '' ;

        return (
            <li className="artist">
                <a href={"/artist/" + this.state.id}>
                    {image}
                    <h2>{this.state.name}</h2>
                </a>
            </li>
        );
    }
}

export default Artist;
