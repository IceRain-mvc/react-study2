import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
                <NavLink to="/look">宝宝看</NavLink>
                <NavLink to="/listen">宝宝听</NavLink>
                <NavLink to="/me">我的</NavLink>
            </div>
        );
    }
}

export default Footer;
