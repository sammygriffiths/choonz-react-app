import React, { Component } from 'react';
import { push as ReactBurgerMenu } from 'react-burger-menu'
import '../../css/Menu.css';

class Menu extends Component {
    render() {
        return (
            <ReactBurgerMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                <h2 className="bm-item-list">Menu</h2>
            </ReactBurgerMenu>
        );
    }
}

export default Menu;
