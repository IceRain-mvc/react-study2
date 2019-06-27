import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                fontSize: "24px",
                height: "48px",
                backgroundColor: "orange",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0
            }}>
                <NavLink to="/page">首页</NavLink>
                <NavLink to="/zixuan">自选</NavLink>
            </div>
        );
    }
}

export default Footer;
