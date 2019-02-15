import React, { Component } from 'react';
import { push as ReactBurgerMenu } from 'react-burger-menu'
import '../../css/Menu.css';
import sonosHelper from '../../helpers/sonos';

class Menu extends Component {
    resetRecentlyAdded(e) {
        e.preventDefault();
        sonosHelper.resetRecentlyAdded().then(console.log).catch(console.error);
    }

    clearQueue(e) {
        e.preventDefault();
        sonosHelper.clearQueue().then(console.log).catch(console.error);
    }

    render() {
        return (
            <ReactBurgerMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                <a className="bm-item-list" onClick={this.resetRecentlyAdded.bind(this)} href={process.env.REACT_APP_QUEUE_URL + '/songs/recently-added'}>Reset Recently Added</a>
                <a className="bm-item-list" onClick={this.clearQueue.bind(this)} href={process.env.REACT_APP_QUEUE_URL + '/songs'}>Clear Queue</a>
            </ReactBurgerMenu>
        );
    }
}

export default Menu;
