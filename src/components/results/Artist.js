import React, { Component } from 'react';

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = props.content;
    }

    render() {
        return (
            <li className="artist">
                <p>{this.state.name}</p>
            </li>
        );
    }
}

export default Artist;
