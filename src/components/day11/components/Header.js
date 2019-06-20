import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <NavLink to={{pathname:"/home",state:"Home"}}>Home</NavLink>
                <NavLink to={{pathname:"/page",state:"Page"}}>Page</NavLink>
                <NavLink to={{pathname:"/me",state:"Me"}}>Me</NavLink>
            </div>
        );
    }
}

export default Header;
